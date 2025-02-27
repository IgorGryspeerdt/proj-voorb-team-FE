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
    products.forEach(product => {
        const productListItem = document.createElement('li');
        const productLink = document.createElement('a');
        productLink.href = `details.html?id=${product.id}`;
        productLink.textContent = `${product.name} - ${product.description}`;
        productListItem.appendChild(productLink);
        productList.appendChild(productListItem);
      });
});

function displayProductDetails(product) {
    const productDetailsContainer = document.getElementById('product-details-container');
    productDetailsContainer.innerHTML = `
        <h2>${product.id}</h2>
        <p>${product.name}</p>
        <p>Description: ${product.description}</p>
        
    `;
}