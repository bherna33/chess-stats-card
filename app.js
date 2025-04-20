async function getPlayerInfo(username) {
    const statsURL = await fetch(`https://api.chess.com/pub/player/${username || 'magnuscarlsen'}/stats`);
    const playerURL = await fetch(`https://api.chess.com/pub/player/${username || 'magnuscarlsen'}`);
    const gamesURL = await fetch(`https://api.chess.com/pub/player/${username || 'magnuscarlsen'}/games`);

    const playerStats = await statsURL.json();
    const playerInfo = await playerURL.json();
    const gamesInfo = await gamesURL.json();

    console.log(playerStats.chess_rapid.record);

}

getPlayerInfo("dual-shock514")
