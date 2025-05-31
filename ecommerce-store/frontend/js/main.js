const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 }
];

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');

if (productList) {
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<h2>${product.name}</h2><p>$${product.price}</p><button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
}

if (cartItems) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.forEach(id => {
    const product = products.find(p => p.id === id);
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<h3>${product.name}</h3><p>$${product.price}</p>`;
    cartItems.appendChild(div);
  });
}