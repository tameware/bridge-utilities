// const { expect } = require('chai');
// const { canonicalVul, parseMatch, parse } = require('./acbl_live_to_bridgewinners.js');

import { expect } from 'chai';
import sinon from 'sinon';
import { canonicalVul, parseMatch, parse } from './acbl_live_to_bridgewinners.js';
import { SINGLE_LINE_TEST_INPUT, SINGLE_LINE_TEST_OUTPUT, MULTI_LINE_TEST_INPUT, MULTI_LINE_TEST_OUPUT } from './test_strings.js';
import { ACBL_LIVE_SAMPLE_HTML } from './acbl_live_sample.html.js';
import { EXPECTED_SAMPLE_PAGE_RESULT } from './expected_sample_page_result.js';

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
  let mock;

  beforeEach(() => {
    mock = sinon.mock(console);
  });

  afterEach(() => {
    mock.restore();
  });

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

    const message = 'Corrected vulnerability on board 2. Was -, should be n';
    mock.expects('warn')
      .once()
      .withExactArgs(message);

    const result = parseMatch(match);
    const GHAND_STRING = `
{ghand n=cj532dk10sk103hk542&s=caq1094d-----sq962haqj8&e=c876dq87saj754h97&w=ckdaj965432s8h1063&d=e&v=n&b=2&a=pp6hppp&nn=Ely&sn=Josephine&en=Charles&wn=Helen}
`.trim()

    expect(result).to.equal(GHAND_STRING);

    mock.verify();
  });
});

describe('parse', () => {
  let mock;

  beforeEach(() => {
    mock = sinon.mock(console);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should parse the source and return formatted ghand strings', () => {
    const result = parse(SINGLE_LINE_TEST_INPUT);
    expect(result).to.equal(SINGLE_LINE_TEST_OUTPUT);
  });

  it('should handle multiple matches and return formatted ghand strings', () => {
    const message = 'Corrected vulnerability on board 2. Was -, should be n';
    mock.expects('warn')
      .once()
      .withExactArgs(message);

    const result = parse(MULTI_LINE_TEST_INPUT);
    expect(result).to.equal(MULTI_LINE_TEST_OUPUT);

    mock.verify();
  });

  it('should parse an entire page', () => {
    mock.expects('warn')
      .exactly(6);
    const result = parse(ACBL_LIVE_SAMPLE_HTML);
    expect(result).to.equal(EXPECTED_SAMPLE_PAGE_RESULT);
    mock.verify();
  });

});
