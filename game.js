document.addEventListener("DOMContentLoaded", function () {
    const API_URL = "http://localhost:3000/games/";
    const gameInfo = document.getElementById("game-info");

    async function loadGame() {
        const params = new URLSearchParams(window.location.search);
        const gameId = params.get("id");

        if (!gameId) {
            gameInfo.innerHTML = "<p>Geen game ID opgegeven.</p>";
            return;
        }

        try {
            const response = await fetch(API_URL + gameId);
            if (!response.ok) throw new Error("Game niet gevonden.");

            const game = await response.json();
            gameInfo.innerHTML = `
                <img src="${game.image}" class="game-image" alt="${game.name}">
                <h1 class="game-title">${game.name}</h1>
                <p class="game-description">${game.shortDescription}</p>
                <p class="game-full-description">${game.fullDescription}</p>
                <p class="game-price">€${game.price.toFixed(2)}</p>
                <a href="games.html" class="back-link">← Terug naar de game lijst</a>
            `;
        } catch (error) {
            gameInfo.innerHTML = "<p>Fout bij het laden van game details.</p>";
            console.error("API Fout:", error);
        }
    }

    loadGame();
});