document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch("http://localhost:3000/codeertools");
      const tools = await response.json();
  
      const list = document.getElementById("tools-list");
      tools.forEach(tool => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `codeerdetail.html?id=${tool.id}`;
        link.textContent = tool.name;
        li.appendChild(link);
        list.appendChild(li);
      });
    } catch (error) {
      console.error("Fout bij ophalen van tools:", error);
    }
  });
  