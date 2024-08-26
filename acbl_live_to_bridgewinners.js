#! /usr/bin/env node

/**
 * Determines the correct vulnerability for a given board number.
 * @param {number} board - The board number.
 * @returns {string} - The vulnerability ('-', 'n', 'e', or 'b').
 */
function canonicalVul(board) {
    // Defines the vulnerability for boards 1 to 4, per lin format
    const vulPatterns = ["-", "n", "e", "b"];
    const boardOffset = (board - 1) % 4;
    const cycleCount = Math.floor((board - 1) / 4);
    const patternIndex = (cycleCount + boardOffset) % 4;
    return vulPatterns[patternIndex];
}

/**
 * Parses an individual match and corrects the vulnerability if necessary.
 * @param {Array} match - The match details from regex capture.
 * @returns {string} - The formatted LIN string.
 */
function parseMatch(match) {
    const [_, cards, vul, board, auction, names] = match;
    const boardNumber = parseInt(board, 10);
    const correctVul = canonicalVul(boardNumber);

    if (vul !== correctVul) {
        console.log(`Corrected vulnerability on board ${board}. Was ${vul}, should be ${correctVul}`);
    }

    const namesTrimmed = names
        .split("&")
        .map((name) => {
            const [direction, playerName] = name.split("=");
            return `${direction}=${playerName.trim()}`;
        })
        .join("&");

    const lin = [cards, `v=${correctVul}`, `b=${board}`, `a=${auction}`, namesTrimmed].join("&")

    return `{ghand ${lin}}`;
}

/**
 * Parses the source text and processes each match.
 * @param {string} source - The raw HTML or text source to parse.
 * @returns {string} - A text list of ghand strings, suitable for a BridgeWinners article.
 */
function parse(source) {
    const regexp = /handviewer\.html\?(.*?)&v=(.)&b=(\d+)&a=(.*?)&(.*?)&tbt=y/gi;
    const matches = [...source.matchAll(regexp)];

    return matches.map(parseMatch).join('\n');
}

const ACBL_LIVE_URL = 'https://live.acbl.org/event/NABC242/VZLM/6/scores/W/E/7';

/**
 * Fetches and parses data from a given URL.
 * Works only in a Node.js environment due to CORS restrictions.
 * 
 * @param {string} url - The URL to fetch and parse.
 */
async function parseURL(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
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
    const fs = require('node:fs').promises;

    fs.readFile(ACBL_LIVE_SAMPLE, 'utf8')
        .then(data => console.log(parse(data)))
        .catch(err => console.error(`Error reading file ${ACBL_LIVE_SAMPLE}:`, err));
}



