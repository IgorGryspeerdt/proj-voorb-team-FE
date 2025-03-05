document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const toolId = params.get("id");

    fetch(`http://localhost:3000/api/codeertools/${toolId}`)
        .then(response => response.json())
        .then(tool => {
            const details = document.getElementById("tool-details");
            details.innerHTML = `
                <h2>${tool.name}</h2>
                <p>Omschrijving: ${tool.description}</p>
                <p>Prijs: ${tool.price}</p>
            `;
        })
        .catch(error => console.error("Tool niet gevonden", error));
});
