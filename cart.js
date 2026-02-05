function getfromLocalStorage() {
  return JSON.parse(localStorage.getItem("fooditems")) || [];
}

function saveToLocalStorage(fooditems) {
  return localStorage.setItem("fooditems", JSON.stringify(fooditems));
}

function displayCartItems() {
  let foodcart = getfromLocalStorage();
  let Container = document.querySelector("#FoodContainer");

  Container.innerHTML = "";

  foodcart.forEach((food, index) => {
    let parentdiv = document.createElement("div");
    parentdiv.classList.add(
      "lg:flex",
      "md:flex",
      "flex",
      "flex-col",
      "md:flex-row",
      "lg:flex-row",
      "justify-between",
      "items-center",
      "shadow-lg",
      "border",
      "rounded",
      "py-3",
      "px-5",
      "lg:w-full",
      "md:w-full",
      "w-[90%]",
      "lg:h-40",
      "md:h-40",
      "h-auto",
      "gap-3",
    );

    let indexFood = index + 1;

    let indexp = document.createElement("p");
    indexp.innerText = `${indexFood}`;
    indexp.classList.add("text-[20px]", "md:text-[18px]");

    let namep = document.createElement("p");
    namep.innerHTML = `<p class="">${food.name}</p>`;
    namep.classList.add("text-[20px]", "md:text-[18px]");

    let img = document.createElement("img");
    img.src = `${food.image}`;
    img.classList.add("w-40", "h-auto", "md:w-30");

    let price = document.createElement("p");
    price.textContent = `₹${food.price}`;
    price.classList.add("text-[18px]");

    let quantity = document.createElement("div");
    quantity.textContent = `${food.quantity}`;
    quantity.classList.add("text-[18px]");

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Cancel";
    removeBtn.classList.add(
      "px-15",
      "py-2",
      "text-[18px]",
      "border",
      "rounded",
    );
    removeBtn.addEventListener("click", () => removeFoodItem(index));
    parentdiv.appendChild(indexp);
    parentdiv.appendChild(namep);
    parentdiv.appendChild(img);
    parentdiv.appendChild(price);
    parentdiv.appendChild(quantity);
    parentdiv.appendChild(removeBtn);
    Container.appendChild(parentdiv);
  });
}
displayCartItems();

function removeFoodItem(index) {
  let foodcart = getfromLocalStorage();
  foodcart.splice(index, 1);

  saveToLocalStorage(foodcart);
}

function FoodCount() {
  let itemqty = document.querySelector("#foodqty");
  let foodcart = getfromLocalStorage();

  let itemcount = foodcart.reduce((prev, curr) => prev + curr.quantity, 0);

  itemqty.innerText = `${itemcount}`;
}

FoodCount();
