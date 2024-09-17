// const { expect } = require('chai');
// const { canonicalVul, parseMatch, parse } = require('./acbl_live_to_bridgewinners.js');

import { expect } from 'chai';
import { canonicalVul, parseMatch, parse } from './acbl_live_to_bridgewinners.js';
import { SINGLE_LINE_TEST_INPUT, SINGLE_LINE_TEST_OUTPUT, MULTI_LINE_TEST_INPUT } from './test_strings.js';

describe('canonicalVul', () => {
  it('should return the correct vulnerability for each board number', () => {
    expect(canonicalVul(1)).to.equal('-');
    expect(canonicalVul(2)).to.equal('n');
    expect(canonicalVul(3)).to.equal('e');
    expect(canonicalVul(4)).to.equal('b');
    expect(canonicalVul(5)).to.equal('n');
    expect(canonicalVul(6)).to.equal('e');
    expect(canonicalVul(7)).to.equal('b');
    expect(canonicalVul(8)).to.equal('-');
    expect(canonicalVul(9)).to.equal('e');
  });
});

describe('parseMatch', () => {
  it('should parse the match correctly and return formatted LIN string', () => {
    const match = {
      groups: {
        cards: 'n=cj532dk10sk103hk542&s=caq1094d-----sq962haqj8&e=c876dq87saj754h97&w=ckdaj965432s8h1063',
        dealer: 'n',
        vul: '-',
        board: '1',
        auction: 'pp6hppp',
        names: 'nn=Ely&sn=Josephine&en=Charles&wn=Helen',
      },
    };

    const result = parseMatch(match);
    const GHAND_STRING = `
        {ghand n=cj532dk10sk103hk542&s=caq1094d-----sq962haqj8&e=c876dq87saj754h97&w=ckdaj965432s8h1063&d=n&v=-&b=1&a=pp6hppp&nn=Ely&sn=Josephine&en=Charles&wn=Helen}
        `.trim()

    expect(result).to.equal(GHAND_STRING);
  });

  it('should correct the vulnerability if it does not match', () => {
    const match = {
      groups: {
        cards: 'n=cj532dk10sk103hk542&s=caq1094d-----sq962haqj8&e=c876dq87saj754h97&w=ckdaj965432s8h1063',
        dealer: 'e',
        vul: '-',
        board: '2',
        auction: 'pp6hppp',
        names: 'nn=Ely&sn=Josephine&en=Charles&wn=Helen',
      },
    };

    const result = parseMatch(match);
    const GHAND_STRING = `
{ghand n=cj532dk10sk103hk542&s=caq1094d-----sq962haqj8&e=c876dq87saj754h97&w=ckdaj965432s8h1063&d=e&v=n&b=2&a=pp6hppp&nn=Ely&sn=Josephine&en=Charles&wn=Helen}
`.trim()

    expect(result).to.equal(GHAND_STRING);
  });
});

describe('parse', () => {
  it('should parse the source and return formatted ghand strings', () => {
    const result = parse(SINGLE_LINE_TEST_INPUT);
    expect(result).to.equal(SINGLE_LINE_TEST_OUTPUT);
  });

  it('should handle multiple matches and return formatted ghand strings', () => {

    const result = parse(MULTI_LINE_TEST_INPUT);
    const GHAND_STRING = `
{ghand n=cj532dk10sk103hk542&s=caq1094d-----sq962haqj8&e=c876dq87saj754h97&w=ckdaj965432s8h1063&d=n&v=-&b=1&a=pp6hppp&nn=Brian Platnick&sn=Danny Sprung&en=Adam Wildavsky&wn=Ron Gerard}
{ghand n=caq75daj7skq95h83&s=ck104d964s732haj54&e=cj86dq532sj1086hk10&w=c932dk108sa4hq9762&d=e&v=n&b=2&a=ppp1nppp&nn=Brian Platnick&sn=Danny Sprung&en=Adam Wildavsky&wn=Ron Gerard}
`.trim()

    expect(result).to.equal(GHAND_STRING);
  });
});
