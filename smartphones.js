document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("http://localhost:3000/smartphones");

        if (!response.ok) {
            throw new Error(`Er is een fout opgetreden: ${response.status} ${response.statusText}`);
        }

        const smartphones = await response.json();

        const list = document.getElementById("smartphone-list");
        list.innerHTML = ""; 

        if (smartphones.length === 0) {
            list.innerHTML = "<li>Geen smartphones gevonden.</li>";
            return;
        }

        smartphones.forEach(smartphone => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = `smartphoneDetail.html?id=${smartphone.id}`;
            link.textContent = smartphone.name;
            li.appendChild(link);
            list.appendChild(li);
        });
    } catch (error) {
        console.error("Fout bij ophalen van smartphones:", error);
        const list = document.getElementById("smartphone-list");
        list.innerHTML = `<li>Er is een fout opgetreden bij het ophalen van de smartphones: ${error.message}</li>`;
    }
});