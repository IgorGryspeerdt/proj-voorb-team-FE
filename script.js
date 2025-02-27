// Function to fetch products from API
async function fetchProducts() {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();
    return products;
  }
  
  // Function to fetch product details from API
  async function fetchProductDetails(id) {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const product = await response.json();
    return product;
  }
  
  // Event listener for product list
  document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById('product-list');
    const products = await fetchProducts();
    products.forEach((product)});