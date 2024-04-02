const products = [{
  id: '23423112154521515214123',
  image: 'img/1.jpg',
  name: 'Coffee',
  price: 39
},{
  id: '23423112131312554214123',
  image: 'img/2.jpg',
  name: 'Crossoni',
  price: 29
},{
  id: '2342311213132354214123',
  image: 'img/3.jpg',
  name: 'Pancake',
  price: 29
},{
  id: '2342311215321314214123',
  image: 'img/4.jpg',
  name: 'Taco',
  price: 79
},{
  id: '234231121213457474214123',
  image: 'img/5.jpg',
  name: 'Sushi',
  price: 99
},{
  id: '234231121542437314123',
  image: 'img/6.png',
  name: 'Ramen',
  price: 129
},{
  id: '2342311215347344214123',
  image: 'img/7.png',
  name: 'Cheesilog',
  price: 89
},{
  id: '234231121543473214123',
  image: 'img/8.png',
  name: 'Jumbo Burger',
  price: 149
}
,{
  id: '2342311215421347344123',
  image: 'img/9.png',
  name: 'Shrimp',
  price: 99
}];

let productsHTML = '';

products.forEach((product) => {
   productsHTML += `
<div class="product-content">
  <img class="product-img" src="${product.image}">
      <div class="product-details">
        <p class="product-name">${product.name}</p>
        <p class="product-price">₱${product.price}</p>
        </div>
      <div class="add-to-cart">
    <button class="add-to-cart-button">Add to Cart</button>
  </div>  
</div>
  `;
}); 
console.log(productsHTML);

document.querySelector('.product-container').innerHTML = productsHTML;