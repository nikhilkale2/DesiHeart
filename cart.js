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

  foodcart.forEach((food) => {
    let parentdiv = document.createElement("div");
    parentdiv.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "shadow-lg",
      "border",
      "rounded",
      "py-3",
      "px-5",
      "w-full",
      "h-40",
    );

    let namep = document.createElement("p");
    namep.innerHTML = `<p class="">${food.name}</p>`;

    let img = document.createElement("img");
    img.src = `${food.image}`;
    img.classList.add("w-40", "h-auto");

    let price = document.createElement("p");
    price.textContent = `₹${food.price}`;

    let quantity = document.createElement("div");
    quantity.textContent = `${food.quantity}`;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Cancel";
    removeBtn.classList.add(
      "px-15",
      "py-2",
      "text-[18px]",
      "border",
      "rounded",
    );

    parentdiv.appendChild(namep);
    parentdiv.appendChild(img);
    parentdiv.appendChild(price);
    parentdiv.appendChild(quantity);
    parentdiv.appendChild(removeBtn);
    Container.appendChild(parentdiv);
  });
}
displayCartItems();
