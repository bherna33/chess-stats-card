import { themes } from "./themes.js";

export default async function handler(req, res) {

    const { user = "magnuscarlsen", theme = "default" } = req.query;
    const selectedTheme = themes[theme] || themes["default"];

    const statsURL = await fetch(`https://api.chess.com/pub/player/${user}/stats`);
    const playerURL = await fetch(`https://api.chess.com/pub/player/${user}`);

    const playerStats = await statsURL.json();
    const playerInfo = await playerURL.json();

    const svg = `
        <svg width="420" height="200" xmlns="http://www.w3.org/2000/svg">
            <style>
                text{
                    font-family: Segoe UI;
                    fill:${selectedTheme.textColor};
                }
                .border {
                    fill: ${selectedTheme.border};
                }
                .background {
                    fill: ${selectedTheme.background};
                }
                .label {
                    font-weight: bold;
                }
                .title{
                    fill: ${selectedTheme.titleColor};
                    font-size: 20px;
                    font-weight: bold;
                }
            </style>

            <a href="${playerInfo.url}" target="_blank">
                <rect width="100%" height="100%" rx="5" ry="5" class="border" />
                <rect width="417" height="197" rx="5" ry="5" x="1.5" y="1.5" class="background" />
            </a>
            <text class="title" text-anchor="middle" x="210" y="30">${user}'s Chess Profile</text>

            <text x="20" y="60" class="label">Rapid:</text>
            <text x="100" y="60">${playerStats.chess_rapid?.last?.rating ?? "N/A"}</text>

            <text x="20" y="85" class="label">Blitz:</text>
            <text x="100" y="85">${playerStats.chess_blitz?.last?.rating ?? "N/A"}</text>

            <text x="20" y="110" class="label">Daily:</text>
            <text x="100" y="110">${playerStats.chess_daily?.last?.rating ?? "N/A"}</text>

            <text x="20" y="135" class="label">Bullet:</text>
            <text x="100" y="135">${playerStats.chess_bullet?.last?.rating ?? "N/A"}</text>

            <text x="20" y="160" class="label">League:</text>
            <text x="100" y="160">${playerInfo.league ?? "N/A"}</text>

            <image width="100" height="100" x="230" y="55" href="${playerInfo.avatar ? await getBase64Image(playerInfo.avatar) : "" }" alt="avatar" />
        </svg>
    `;

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    res.status(200).send(svg);
}

async function getBase64Image(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');
    const contentType = response.headers.get('content-type');
    return `data:${contentType};base64,${base64}`;
}