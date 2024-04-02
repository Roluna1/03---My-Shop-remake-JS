const products = [{
  id: '23423112154521515214123',
  image: 'img/1.jpg',
  name: 'Coffee',
  price: 39
},{
  id: '23423112131312554512521214123',
  image: 'img/2.jpg',
  name: 'Crossoni',
  price: 29
},{
  id: '234231121313235425125114123',
  image: 'img/3.jpg',
  name: 'Pancake',
  price: 29
},{
  id: '23423112153213142512514123',
  image: 'img/4.jpg',
  name: 'Taco',
  price: 79
},{
  id: '2342311212134574751254214123',
  image: 'img/5.jpg',
  name: 'Sushi',
  price: 99
},{
  id: '2342311215424373521514123',
  image: 'img/6.png',
  name: 'Ramen',
  price: 129
},{
  id: '234231121534735215244214123',
  image: 'img/7.png',
  name: 'Cheesilog',
  price: 89
},{
  id: '23423112154347521513214123',
  image: 'img/8.png',
  name: 'Jumbo Burger',
  price: 149
}
,{
  id: '234231121542135251474344123',
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
    <button class="add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
  </div>  
</div>
  `;
}); 
console.log(productsHTML);

document.querySelector('.product-container').innerHTML = productsHTML;

document.querySelectorAll('.add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
  console.log('Added')
  const productId = button.dataset.productName;

    let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId){
        matchingItem = item;
      }
    });
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else{
        cart.push({
          productId: productId,
          quantity: 1
        });
      }


  console.log(cart)
  });
});