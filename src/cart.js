let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem('data')) || [];

let calculation = () => {
  let cartIcon = document.getElementById('cartAmount');
  //return only item not id
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  
};
calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket.map((x) => {return `
    <div class="cart-item">
      <img src="" alt="">
    </div>
    `}).join(''));
  }
  else{
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to Home</button>
    </a>
     `; 
  }
};
generateCartItems();