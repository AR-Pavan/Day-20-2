let games = [];
let gameData = document.getElementById("gamesData");

let getData = async() => {

    try {
        let data = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "4ff4ae0375mshc030b542bdbcf9ep14ef45jsn13bae7b6b4eb",
                "Content-Type": "application/json"
            }
        })
        games = await data.json();
        console.log(games);
        displayData(games);
    } catch (error) {
        console.log(error);
    }

}
let displayData = (game) => {
    let html = game.map((data) => {
        return `
        <div class="games-container">
      <div class="game-info">
       <h2>${data.title}</h2>
       <p>${data.short_description}</p>
       <img class="thumbnail" src = ${data.thumbnail}>
       </div>
       </div>
       `
    }).join('');
    gameData.innerHTML = html;

}


getData();