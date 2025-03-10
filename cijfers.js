const API_URL = "http://localhost:3000/cijfers";

// Fetch en toon de cijfers
if (window.location.pathname.includes("cijfers.html")) {
    fetch(API_URL)
        .then(res => res.json())  // Zet de JSON-response om naar een JavaScript-object
        .then(cijfers => {
            const list = document.getElementById("cijfer-lijst");
            cijfers.forEach(cijfer => {   // Voor elk cijfer in de lijst
                const li = document.createElement("li");
                // Maak een link naar de detailpagina voor elk cijfer
                li.innerHTML = `<a href="cijferdetails.html?id=${cijfer.id}">${cijfer.nummer}</a>`;
                list.appendChild(li);
            });
        })
        .catch(err => console.error("Error cijfers:", err)); // Foutmelding als de fetch mislukt
}
