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
  
    id: 'nnnn',
    name: 'Barbell',
    price: 60,
    desc: ' Provides resistance to help you build muscle ',
    img: 'images/img-5.png'

}, {
    id: 'oooo',
    name: 'Pull up bar',
    price: 60,
    desc: 'Rise, conquer: Pull-up bar, strength ascends',
    img: 'images/img-6.png'
}, {
    id: 'pppp',
    name: 'Bench',
    price: 80,
    desc: 'Strength rests here: Bench, sculpting power and form.',
    img: 'images/img-7.jpg'
}, {
    id: 'oooo',
    name: 'Weight Plates',
    price: 30,
    desc: 'symphony: Gym plates, sculpting strength in silence',
    img: 'images/img-8.jpg'
}];


let basket = [];


let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let {id, name, price, desc, img} = x; //destructuring
    return ` 
    <div id=product-id-${id} class="item">
      <img width="220" src="${img}" alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>$ ${price}</h2>
          <div class="buttons">
            <i onclick="decrement(${id});" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">0</div>
            <i onclick="increment(${id});" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>
    `;
  }).join(''));
};

generateShop();

//create search function find if the item exist if it does then increse quantity or not then push the item

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);//If a match is found, the search variable will hold that element (an object).
  //If no match is found, search will be undefined.

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1
    });
  
  } else {
    search.item += 1;
  }
 

  update(selectedItem.id);
  
}


let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);//If a match is found, the search variable will hold that element (an object).
  //If no match is found, search will be undefined.

  //If the current quantity (search.item) is equal to zero, it means the item has already been decremented to its minimum value.
  
  if (search.item === 0) return;
   else {
    search.item -= 1;
  }
 
 
  update(selectedItem.id);
  
}



let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById('cartAmount');
  //return only item not id
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  
};