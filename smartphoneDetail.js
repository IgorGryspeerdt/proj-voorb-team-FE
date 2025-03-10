document.addEventListener("DOMContentLoaded", async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const smartphoneId = params.get("id");

        if (!smartphoneId) {
            throw new Error("Geen smartphone ID opgegeven");
        }

        console.log(`Ophalen van smartphone met ID: ${smartphoneId}`);

        const response = await fetch(`http://localhost:3000/smartphones/${smartphoneId}`);

        if (!response.ok) {
            throw new Error("Smartphone niet gevonden");
        }

        const smartphone = await response.json();

        const details = document.getElementById("smartphone-details");
        details.innerHTML = `
            <h2>${smartphone.name}</h2>
            <p>Merk: ${smartphone.brand}</p>
            <p>Release Jaar: ${smartphone.releaseYear}</p>
            <p>Features: ${smartphone.features.join(", ")}</p>
            <p>Prijs: ${smartphone.price}€</p>
        `;
    } catch (error) {
        console.error("Fout bij ophalen van smartphone:", error);
        const details = document.getElementById("smartphone-details");
        details.innerHTML = `<p>Er is een fout opgetreden bij het ophalen van de smartphone: ${error.message}</p>`;
    }
});