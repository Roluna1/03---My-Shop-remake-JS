import { cart } from "../javascript/cart.js";
import { products } from "../javascript/products.js";

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId

  let matchingProduct;

  products.forEach((product) => {
    if(product.id === productId){
      matchingProduct = product;
    }
  });

  console.log(matchingProduct);
  cartSummaryHTML +=
  `
  <div class="summary-content">
  <img class="product-img" src="${matchingProduct.image}">
  <div class="product-total-details">
    <p class="product-name">${matchingProduct.name}</p>
    <p class="product-price">₱${matchingProduct.price}</p>
    <div class="product-quantity">
      <p class="product-quantity">Quantity: ${cartItem.quantity}</p>
      <div class="quantity-edit">
        <button class="button-update">Update</button>
        <button class="button-delete">Delete</button>
      </div>
    </div>
  </div>
</div>
  `;

  console.log(cartSummaryHTML);

document.querySelector('.summary-container').innerHTML = cartSummaryHTML;
});