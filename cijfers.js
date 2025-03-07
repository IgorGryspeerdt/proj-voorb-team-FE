const API_URL = "http://localhost:3000/cijfers";

// Fetch and display products
if (window.location.pathname.includes("cijfers.html")) {
    fetch(API_URL)
        .then(res => res.json())
        .then(cijfer => {
            const list = document.getElementById("cijfer-lijst");
            products.forEach(product => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="details.html?id=${cijfer.id}">${cijfer.name}</a>`;
                list.appendChild(li);
            });
        })
        .catch(err => console.error("Error cijfers:", err));
}

