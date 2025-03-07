// Fetch and display product details
if (window.location.pathname.includes("cijferdetails.html")) {
    const params = new URLSearchParams(window.location.search);
    const cijfertId = params.get("id");

    fetch(`${API_URL}/${cijfertId}`)
        .then(res => res.json())
        .then(cijfer => {
            const details = document.getElementById("cijfer-details");
            details.innerHTML = `<h2>${cijfer.id}</h2><p>${cijfer.nummer}</p>`;
        })
        .catch(err => console.error("Error fetching cijfer details:", err));
}