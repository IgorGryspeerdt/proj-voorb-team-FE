document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/api/codeertools")
        .then(response => response.json())
        .then(tools => {
            const list = document.getElementById("tools-list");
            tools.forEach(tool => {
                const li = document.createElement("li");
                const link = document.createElement("a");
                link.href = `codeerdetail.html?id=${tool.id}`;
                link.textContent = tool.name;
                li.appendChild(link);
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Fout bij ophalen van tools:", error));
});
