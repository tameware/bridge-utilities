#! /usr/bin/env node

function canonical_vul(board) {
    // Defines the vulnerability for boards 1 to 4, per lin format
    const vulPatterns = ["-", "n", "e", "b"];
    
    // Math.floor((board - 1) / 4) computes the # of full cycles of 4 boards.
    // (board - 1) % 4 handles the offset within the current cycle.
    // The sum is taken modulo 4 to get the correct vulnerability for the board.
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
        
        let new_vul = vul;

        if (vul == canonical_vul(board)) {
        } else {
            new_vul = canonical_vul(board);
            console.log(`Corrected vulnerability on board ${board}. Was ${vul}, should be ${new_vul}`);
        }

        const namesTrimmed = names
            .split("&")
            .map((name) => {
                const [direction, playerName] = name.split("=");
                return `${direction}=${playerName.trim()}`;
            })
            .join("&");

        const lin = `${cards}v=${new_vul}&b=${board}&a=${auction}${namesTrimmed}`;
        result += `{ghand ${lin}}\n`;
    }

    return result;
}

const ACBL_LIVE_URL = 'https://live.acbl.org/event/NABC242/VZLM/6/scores/W/E/7';

// Works only from the command line due to CORS restrictions
function parseURL(url) {
    fetch(url)
    .then(res => res.text())
    .then(text => {
        console.log(parse(text));
    })
    .catch(err => console.log(err));
}

var isNode=new Function("try {return this===global;}catch(e){return false;}");

// If running from the command line rather than in a browser
if (isNode()) {
    const ACBL_LIVE_SAMPLE = './ACBL Live sample.html';

    const fs = require('node:fs');

    fs.readFile(ACBL_LIVE_SAMPLE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(parse(data));
        }
    });
}



