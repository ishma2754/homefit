let shop = document.getElementById('shop');

let shopItemsData = [
  {
    id: 'jjjj',
    name: 'Power Rack',
    price: 100,
    desc: 'Mechanical spotter for free weight barbell exercises',
    img: 'images/img-1.jpg'
  }, 
  {
    id: 'kkkk',
    name: 'Adjustable Dumbbell',
    price: 40,
    desc: 'Allows customizable weight training ',
    img: 'images/img-2.jpg'
  }, 
  {
    id: 'llll',
    name: 'Yoga Mat',
    price: 25,
    desc: 'Provides comfort during mindful practice ',
    img: 'images/img-3.jpg'
  }, 
  {
    id: 'mmmm',
    name: 'Kettlebell',
    price: 30,
    desc: 'Swings strength and versatility into workouts ',
    img: 'images/img-4.jpg'

}, {
    id: 'mmmm',
    name: 'Kettlebell',
    price: 30,
    desc: 'Swings strength and versatility into workouts ',
    img: 'images/img-4.jpg'

}];


let basket = [];
const jtml = require('jtml');




const generateShop = () => {
  return jtml.html`
    ${shopItemsData.map((x) => {
      const { id, name, price, desc, img } = x; 
      return html `
        <div id="product-id-${id}" class="item">
          <img width="220" src="${img}" alt="">
          <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
              <h2>$ ${price}</h2>
              <div class="buttons">
                <i onclick="decrement(${id});" class="bi bi-dash-lg"></i>
                <div id="${id}" class="quantity">0</div>
                <i onclick="increment(${id});" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('')}
  `;
};

shop.innerHTML = generateShop();