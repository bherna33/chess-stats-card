async function getPlayerStats(username) {
    const response = await fetch(`https://api.chess.com/pub/player/${username || 'magnuscarlsen'}/stats`);
    const playerStats = await response.json();

    const modes = ['chess_daily', 'chess_rapid', 'chess_blitz', 'chess_bullet'];
    
    for (const mode of modes) {
        if (playerStats[mode]) {
            const rating = playerStats[mode].last.rating;
            console.log(`${mode}: ${rating}`);
        }
    }

}

async function getPlayerInfo(username) {
    const response = await fetch(`https://api.chess.com/pub/player/${username || 'magnuscarlsen'}`);
    const playerInfo = await response.json();
    console.log(playerInfo.username, playerInfo.avatar, playerInfo.url);
}

function generateChessStatsSVG(username, stats) {
    const modes = ['chess_daily', 'chess_rapid', 'chess_blitz', 'chess_bullet'];

    let rows = '';
    for (const mode of modes) {
        if (stats[mode]) {
            const rating = stats[mode].last.rating;
            rows += `<tspan x="20" dy="1.2em">${mode.replace("chess_", "")}: ${rating}</tspan>`;
        }
    }

    if (stats.tactics) {
        rows += `<tspan x="20" dy="1.2em">Tactics: ${stats.tactics.highest.rating}</tspan>`;
    }

    // if (stats.puzzle_rush) {
    //     rows += `<tspan x="20" dy="1.2em">Puzzle Rush: ${stats.puzzle_rush.best.score}</tspan>`;
    // }

    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <style>
    text {
      font-family: Arial, sans-serif;
      font-size: 14px;
      fill: #333;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      fill: #000;
    }
    rect {
      fill: #f9f9f9;
      stroke: #ccc;
      rx: 10;
      ry: 10;
    }
  </style>
  <rect x="0" y="0" width="100%" height="100%" />
  <text x="20" y="30" class="title">${username}'s Chess Stats</text>
  <text x="20" y="60">${rows}</text>
</svg>`;
}

fetch('https://api.chess.com/pub/player/magnuscarlsen/stats')
  .then(res => res.json())
  .then(stats => {
    const svg = generateChessStatsSVG('magnuscarlsen', stats);
    console.log(svg);
    // You can write this to a file or serve it on a web page!
  });


// getPlayerStats();
// getPlayerInfo("dual-shock514");

