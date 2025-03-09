document.addEventListener("DOMContentLoaded", function () {
    const API_URL = "http://localhost:3000/games";
    const gameContainer = document.getElementById("game-container");

    async function loadGames() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Kan geen games laden.");

            const games = await response.json();
            gameContainer.innerHTML = ""; // Leeg de container

            games.forEach(game => {
                const gameCard = document.createElement("div");
                gameCard.classList.add("game-card");

                gameCard.innerHTML = `
                    <a href="game.html?id=${game.id}">
                        <img src="${game.image}" alt="${game.name}">
                        <h3>${game.name}</h3>
                        <p class="game-description">${game.shortDescription}</p>
                        <p class="game-price">€${game.price.toFixed(2)}</p>
                    </a>
                `;

                gameContainer.appendChild(gameCard);
            });
        } catch (error) {
            gameContainer.innerText = "Fout bij het laden van games.";
            console.error("API Fout:", error);
        }
    }

    loadGames();
});