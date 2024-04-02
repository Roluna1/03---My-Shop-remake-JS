import { products } from "../javascript/products.js";
import { cart } from "../javascript/cart.js"

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

      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.cart-quantity').innerHTML = cartQuantity;

      console.log(cartQuantity)
      console.log(cart)
  });
});