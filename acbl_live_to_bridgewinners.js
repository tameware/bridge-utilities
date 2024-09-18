#! /usr/bin/env node

export { canonicalVul, parseMatch, parse };

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
    const { cards, dealer, vul, board, auction, names } = match.groups;
    const boardNumber = parseInt(board, 10);
    const correctVul = canonicalVul(boardNumber);

    if (vul !== correctVul) {
        console.warn(`Corrected vulnerability on board ${board}. Was ${vul}, should be ${correctVul}`);
    }

    const namesTrimmed = names
        .split("&")
        .map((name) => {
            const [direction, playerName] = name.split("=");
            return `${direction}=${playerName.trim()}`;
        })
        .join("&");

    const lin = [cards, `d=${dealer}`, `v=${correctVul}`, `b=${board}`, `a=${auction}`, namesTrimmed].join("&");

    return `{ghand ${lin}}`;
}

/**
 * Parses the source text and processes each match.
 * @param {string} source - The raw HTML or text source to parse.
 * @returns {string} - A text list of ghand strings, suitable for a BridgeWinners article.
 */
function parse(source) {
    const regexp = /handviewer\.html\?(?<cards>.*?)&d=(?<dealer>.)&v=(?<vul>.)&b=(?<board>\d+)&a=(?<auction>.*?)&(?<names>.*?)&tbt=y/gi;
    const matches = [...source.matchAll(regexp)];

    return matches.map(parseMatch).join('\n');
}

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
            throw new Error(`Failed to fetch URL: ${url}, Status: ${res.status}`);
        }
        const text = await res.text();
        console.log(parse(text));
    } catch (err) {
        console.error('Error fetching or parsing URL:', err);
    }
}

// Check whether the code is running in a Node.js environment
const isNode = typeof process !== 'undefined' && process.release && process.release.name === 'node';

import { ACBL_LIVE_SAMPLE_HTML } from './acbl_live_sample.html.js';

// If running from the command line
if (isNode) {
    if (true) {
        // Using a string to avoid extra load on live.acbl.org
        console.log(parse(ACBL_LIVE_SAMPLE_HTML));
    } else {
        const ACBL_LIVE_URL = 'https://live.acbl.org/event/NABC242/VZLM/6/scores/W/E/7';
        parseURL(ACBL_LIVE_URL);
    }
}



