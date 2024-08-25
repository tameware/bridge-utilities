#! /usr/bin/env node

function canonicalVul(board) {
    // Defines the vulnerability for boards 1 to 4, per lin format
    const vulPatterns = ["-", "n", "e", "b"];
    
    // Math.floor((board - 1) / 4) computes the # of full cycles of 4 boards.
    // (board - 1) % 4 handles the offset within the current cycle.
    // The sum is taken modulo 4 to get the correct vulnerability for the board.
    const patternIndex = (Math.floor((board - 1) / 4) + (board - 1) % 4) % 4;
    
    // Return the corresponding vulnerability
    return vulPatterns[patternIndex];
}

function parse(source) {
    const regexp = /handviewer.html.(.*?)v=(.)&b=(\d+)&a=(.*?&)(.*?)&tbt=y/gi;
    const matches = [...source.matchAll(regexp)];

    let result = "";

    for (const match of matches) {
        const [_, cards, vul, board, auction, names] = match;
        
        let newVul = vul;

        if (vul !== canonicalVul(board)) {
            newVul = canonicalVul(board);
            console.log(`Corrected vulnerability on board ${board}. Was ${vul}, should be ${newVul}`);
        }

        const namesTrimmed = names
            .split("&")
            .map((name) => {
                const [direction, playerName] = name.split("=");
                return `${direction}=${playerName.trim()}`;
            })
            .join("&");

        const lin = `${cards}v=${newVul}&b=${board}&a=${auction}${namesTrimmed}`;
        result += `{ghand ${lin}}\n`;
    }

    return result;
}

const ACBL_LIVE_URL = 'https://live.acbl.org/event/NABC242/VZLM/6/scores/W/E/7';

// Fetch and parse data from a URL.
// Works only in a Node.js environment due to CORS restrictions.
async function parseURL(url) {
    try {
        const res = await fetch(url);
        const text = await res.text();
        console.log(parse(text));
    } catch (err) {
        console.error('Error fetching or parsing URL:', err);
    }
}

// Check whether the code is running in a Node.js environment
const isNode = typeof process !== 'undefined' && process.release && process.release.name === 'node';

// If running from the command line
if (isNode) {
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



