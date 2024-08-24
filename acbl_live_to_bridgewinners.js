#! /usr/bin/env node

function vul(board) {
    const vulPatterns = ["-", "n", "e", "b"];
    
    // Calculate the pattern index based on the board number
    const patternIndex = (Math.floor((board - 1) / 4) + ((board - 1) % 4)) % 4;
    
    // Return the corresponding vulnerability
    return vulPatterns[patternIndex];
}

function parse(source) {
    const regexp = /handviewer.html.(.*?)v=(.)&b=(\d+)&a=(.*?&)(.*?)&tbt=y/gi;
    const matches = [...source.matchAll(regexp)];

    let result = "";

    for (const match of matches) {
        const [_, cards, vul, board, auction, names] = match;

        const namesTrimmed = names
            .split("&")
            .map((name) => {
                const [direction, playerName] = name.split("=");
                return `${direction}=${playerName.trim()}`;
            })
            .join("&");

        const lin = `${cards}v=${vul}&b=${board}&a=${auction}${namesTrimmed}`;
        result += `{ghand ${lin}}\n`;
    }

    return result;
}

const ACBL_LIVE_URL = 'https://live.acbl.org/event/NABC242/VZLM/6/scores/W/E/7';

// Unused due to CORS restrictions
function parseURL(url) {
    fetch(url)
    .then(res => res.text())
    .then(text => {
        console.log(parse(text));
    })
    .catch(err => console.log(err));
}

var isNode=new Function("try {return this===global;}catch(e){return false;}");

if (isNode()) {
    ACBL_LIVE_SAMPLE = './ACBL Live sample.html';

    const fs = require('node:fs');

    fs.readFile(ACBL_LIVE_SAMPLE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(parse(data));
        }
    });
}



