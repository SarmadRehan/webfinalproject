class sale_item {
  constructor(name, price, id, img){
    this.name = name;
    this.price = parseFloat(price);
    this.id = id;
    this.img = img;
  }
  get_name() {
    return this.name;
  }
  set_name(new_name) {
    this.name = new_name;
  }
  get_price() {
    return this.price;
  }
  set_price(new_price) {
    this.price = new_price;
  }
  get_id() {
    return this.id;
  }
  get_img() {
    return this.img;
  }
}
let cart = new Array();
let myLi = document.createElement("li");
  let divOne = document.createElement("div");
  divOne.setAttribute("id","divOne")
  let divTwo = document.createElement("div");
  divTwo.setAttribute("id","divTwo")
  let myImage = document.createElement("img");
  let imgSrc = null;
// var itemName = document.getElementById("itemName").innerText;
// var price = document.getElementById("price").innerText;
// var type = document.getElementById("itemName").parentElement.parentElement.id;
// let category = document.getElementById("itemName").parentElement.parentElement.parentElement.id;
// var newobj = new sale_item(itemName, price,type,category)
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  let mycart = document.getElementById("cartDiv");

  for (x in cart) {
  }
});
function addToCart(valuee) {
  let button = document.getElementById(valuee);
  let itemId = button.parentElement.id;
  let itemImg = button.parentElement.firstElementChild;
  let itemName =
    button.parentElement.firstElementChild.nextElementSibling.innerText;
  let itemPrice =
    button.parentElement.firstElementChild.nextElementSibling.nextElementSibling
      .innerText;
  let newItem = new sale_item(itemName, itemPrice, itemId, itemImg);

  imgSrc = itemImg.getAttribute("src");
  // myImg.src = imgSrc;
  //console.log(myImg);
  myImage.setAttribute("src",imgSrc);

  let productName = document.createElement("p");
  productName.innerText = itemName;
  let productPrice = document.createElement("p");
  productPrice.innerText = itemPrice;
  let removeButton = document.createElement("input");
  removeButton.setAttribute("type", "button");
  removeButton.addEventListener("click", remove, false);
  removeButton.setAttribute("class", "removeButton");
  
 

   divOne.appendChild(myImage);
   divOne.appendChild(productName);
  
  
  divTwo.appendChild(productPrice);
  divTwo.appendChild(removeButton);
  myLi.appendChild(divOne);
  myLi.appendChild(divTwo);
  function remove() {
    console.log("id");
  }

  //console.log(myImg)
  cart.push(newItem);
  let mycart = document.getElementById("cartList");
  //mycart.appendChild(myLi);

  console.log(mycart);

  //console.log(cart);
}
