document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/api/products")
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById("product-list");
            products.forEach(product => {
                const li = document.createElement("li");
                li.textContent = `${product.name} - ${product.price}`;
                productList.appendChild(li);
            });
        })
        .catch(error => console.error("Fout bij ophalen van data:", error));
});
