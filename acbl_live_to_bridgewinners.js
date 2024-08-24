#! /usr/bin/env node

function vul(board) {
    switch(board) {
      case 1:
        return "-";
      case 2:
        return "n";
      case 3:
        return "e";
      case 4:
        return "b";
      default:
        return vul(Math.floor((board-1) / 4) + ((board-1) % 4) % 4 + 1);
    }
}

function parseX(source) {
    const regexp = /handviewer.html.(.*?)b=(\d+)(.*?)&tbt=y/gi;
    const array = [...source.matchAll(regexp)];

    result = "";
    
    for (row of array) {
        lin = row[1] + "b=" + row[2] + row[3];
        result += `{ghand ${lin}}\n`;
    }
    
    return result;
}

function parse(source) {
    const regexp = /handviewer.html.(.*?)v=(.)&b=(\d+)(.*?)&tbt=y/gi;
    const array = [...source.matchAll(regexp)];

    result = "";
    
    for (row of array) {
        let cards = row[1];
        let vul = row[2];
        let board = row[3];
        let auction_and_names = row[4];
        
        lin = cards + "v=" + vul + "&b=" + board + auction_and_names;
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



