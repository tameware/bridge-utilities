#! /usr/bin/env node

let SAMPLE_INPUT = `<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=ck1098daj987sk106h10&s=c53dkq102s8753ha52&e=caqj642d5sq94h964&w=c7d643saj2hkqj873&d=n&v=-&b=1&a=ppp4hppp&nn=Stephen Nellissen&sn=Adam Wildavsky&en= Diana Schuld &wn= Alan Kudisch&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; Eastern%20States%2C%20Goldman%20Pairs%2C%20May%2027%2C%202018&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 4%21H = Score: 420%2A &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-300%205%21D%2A-NS-2&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %203%21D%201%21S%20%21C5%20%21H3%20NT6 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %202%21C%204%21H%20%21D4%20%21S5%2F6%20NT6&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/1805061/2600/4/board-detail/S?board_num=1'>01</a>							</td>
							<td> 4<span class='hearts symbol contract'></span></td>
							<td>W</td>
							<td>420*</td>
							<td></td>
							<td>8.5</td><td>77</td>							<td class="vs">18 - Diana Schuld - Alan Kudisch</td>						</tr>
											<tr>
            <td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=cj54da109653sa6hq5&s=cq763dk2s842hk832&e=ca8dqj8sq973h10974&w=ck1092d74skj105haj6&d=e&v=-&b=2&a=pp1nppp&nn=Stephen Nellissen&sn=Adam Wildavsky&en= Diana Schuld &wn= Alan Kudisch&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; Eastern%20States%2C%20Goldman%20Pairs%2C%20May%2027%2C%202018&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 1NT = Score: 90%2A &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-110%202%21H-EW%2F2%21S-EW&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %202%21D%20%21C6%20%21H5%20%21S4%20NT5 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %202%21H%202%21S%201NT%20%21C6%20%21D5&lt;/p&gt;
	    		}"
`

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

function parse(source) {
    const regexp = /handviewer.html.(.*?)b=(\d+)(.*?)&tbt=y/gi;
    const array = [...source.matchAll(regexp)];

    result = "";
    
    for (row of array) {
        lin = row[1] + "b=" + row[2] + row[3];
        result += `{ghand ${lin}}\n`;
    }
    
    return result;
}

const URL = 'https://live.acbl.org/event/1805061/2600/4/scores/S/N/3';

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

if (isNode()) console.log(parse(SAMPLE_INPUT));





