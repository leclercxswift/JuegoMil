// Variables globales
let gamesArray = [];
let filteredGames = [];

// Cargar el archivo JSON y renderizar los productos
document.addEventListener('DOMContentLoaded', () => {
    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            gamesArray = data;
            filteredGames = data;
            displayGames(filteredGames);
        });
});

// Filtrar juegos según las selecciones del usuario
document.getElementById('filter-genre').addEventListener('change', filterGames);
document.getElementById('filter-price').addEventListener('change', filterGames);
document.getElementById('filter-popularity').addEventListener('change', filterGames);

function filterGames() {
    const genre = document.getElementById('filter-genre').value;
    const price = document.getElementById('filter-price').value;
    const popularity = document.getElementById('filter-popularity').value;

    filteredGames = gamesArray.filter(game => {
        let isGenreMatch = genre === 'all' || game.genre === genre;
        let isPriceMatch = price === 'all' || (price === 'low-high' ? game.price <= 40 : game.price > 40);
        let isPopularityMatch = popularity === 'all' || 
            (popularity === 'most-popular' && game.popularity >= 80) || 
            (popularity === 'least-popular' && game.popularity < 80);

        return isGenreMatch && isPriceMatch && isPopularityMatch;
    });

    displayGames(filteredGames);
}

// Mostrar los juegos filtrados en la página
function displayGames(games) {
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = '';

    games.forEach(game => {
        const gameCard = `
            <div class="game-card" data-genre="${game.genre}" data-price="${game.price}" data-popularity="${game.popularity}">
                <img src="${game.image}" alt="${game.name}">
                <h2>${game.name}</h2>
                <p>Precio: $${game.price}</p>
                <button class="btn">Comprar</button>
            </div>
        `;
        gamesList.innerHTML += gameCard;
    });
}
