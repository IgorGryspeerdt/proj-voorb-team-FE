document.addEventListener("DOMContentLoaded", async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const toolId = params.get("id");

        const response = await fetch(`http://localhost:3000/codeertools/${toolId}`);

        if (!response.ok) {
            throw new Error("Tool niet gevonden");
        }

        const tool = await response.json();

        const details = document.getElementById("tool-details");
        details.innerHTML = `
            <h2>${tool.name}</h2>
            <p>Omschrijving: ${tool.description}</p>
            <p>Prijs: ${tool.price}</p>
        `;
    } catch (error) {
        console.error("Fout bij ophalen van tool:", error);
    }
});
