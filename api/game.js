import { themes } from "./themes.js";

export default async function handler(request, response) {

    const { 
        user = "magnuscarlsen",
        theme = "default",
        width = 420,
        height = 220,
        textColor = "",
        titleColor = "",
        borderColor = "",
        bgColor = "",
        iconColor = "",
        gameMode = "",

    } = request.query;
    
    const selectedTheme = themes[theme] || themes["default"];

    const statsURL = await fetch(`https://api.chess.com/pub/player/${user}/stats`);
    const playerURL = await fetch(`https://api.chess.com/pub/player/${user}`);

    const playerStats = await statsURL.json();
    const playerInfo = await playerURL.json();

    const win = playerStats[gameMode]?.record?.win;
    const loss = playerStats[gameMode]?.record?.loss;
    const draw = playerStats[gameMode]?.record?.draw;

    const bestDate = new Date(playerStats[gameMode]?.best?.date * 1000).toLocaleDateString();
    const lastPlayed = new Date(playerStats[gameMode]?.last?.date * 1000).toLocaleDateString();

    const gameTitle = {
        chess_blitz: "Chess Blitz",
        chess_bullet: "Chess Bullet",
        chess_rapid: "Chess Rapid",
        chess960_daily: "Chess960 Daily",
        chess_daily: "Chess Daily"
    };

    const totalGames = win+loss+draw;

    const svg = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <style>
                text{
                    font-family: Segoe UI;
                    fill:${!textColor ? selectedTheme.textColor : textColor};
                }
                .border{
                    fill: ${!borderColor ? selectedTheme.border : borderColor};
                }
                .background{
                    fill: ${!bgColor ? selectedTheme.background : bgColor};
                }
                .label{
                    font-weight: bold;
                }
                .title{
                    fill: ${!titleColor ? selectedTheme.titleColor : titleColor};
                    font-size: 20px;
                    font-weight: bold;
                }
                .number{
                    font-size: 35px;
                    font-weight: bold;
                }
            </style>

            <a href="${playerInfo.url}" target="_blank">
                <rect width="100%" height="100%" rx="5" ry="5" class="border" />
                <rect width="${width -3}" height="${height -3}" rx="5" ry="5" x="1.5" y="1.5" class="background" />
            </a>

            <text class="title" text-anchor="middle" x="${width/2}" y="30"> ${gameTitle[gameMode]} </text>

            <text x="80" y="60" text-anchor="middle" class="label" >Highest Rating</text>
            <text x="80" y="110" text-anchor="middle" class="number" >${playerStats[gameMode]?.best?.rating ?? "N/A"}</text>
            <text x="80" y="145" text-anchor="middle" >${bestDate}</text>
    
            <text x="210" y="60" text-anchor="middle" class="label">Rating</text>
            <text x="210" y="110" text-anchor="middle" class="number" >${playerStats[gameMode]?.last?.rating ?? "N/A"}</text>
            <text x="210" y="145" text-anchor="middle" >${lastPlayed}</text>

            <text x="340" y="60" text-anchor="middle" class="label">Total Games</text>
            <text x="340" y="110" text-anchor="middle" class="number" >${totalGames ?? "N/A"}</text>
            <text x="340" y="145" text-anchor="middle" >${lastPlayed}</text>

            <line x1="7%" y1="190" x2="${((Math.ceil((win/totalGames)*100))-10)}%" y2="190" stroke-linecap="round" style="stroke:green;stroke-width:12" />
            <line x1="${((Math.ceil(((win+loss)/totalGames)*100))-10)}%" y1="190" x2="93%" y2="190" stroke-linecap="round" style="stroke:gray;stroke-width:12" />
            <line x1="${((Math.ceil((win/totalGames)*100))-10)}%" y1="190" x2="${((Math.ceil(((win+loss)/totalGames)*100))-10)}%" y2="190" style="stroke:red;stroke-width:12" />

            <text x="7%" y="180" >${win}</text>
            <text x="${((Math.ceil((win/totalGames)*100))-10)}%" y="180" >${loss}</text>
            <text x="93%" y="180" text-anchor="end" >${draw}</text>

        </svg>
    `;

    response.setHeader("Content-Type", "image/svg+xml");
    response.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    response.status(200).send(svg);
}
