const API_URL = "http://localhost:3000/cijfers";

// Fetch en toon de details van een specifiek cijfer
if (window.location.pathname.includes("cijferdetails.html")) {
    const params = new URLSearchParams(window.location.search);  // Verkrijg de URL-parameters
    const cijferId = params.get("id");  // Haal het cijfer-id op uit de URL

    fetch(`${API_URL}/${cijferId}`)
        .then(res => res.json())  // Zet de JSON-response om naar een JavaScript-object
        .then(cijfer => {
            const details = document.getElementById("cijfer-details");
            // Toon de details van het cijfer op de pagina
            details.innerHTML = `<h2>Cijfer ID: ${cijfer.id}</h2><p>Nummer: ${cijfer.nummer}</p>`;
        })
        .catch(err => console.error("Error fetching cijfer details:", err));  // Foutmelding als de fetch mislukt
}
