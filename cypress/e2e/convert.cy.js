import { SINGLE_LINE_TEST_INPUT, SINGLE_LINE_TEST_OUTPUT, MULTI_LINE_TEST_INPUT, MULTI_LINE_TEST_OUPUT } from '../../test_strings.js';

function stripNewlines(str) {
    return str.replace(/\r?\n|\r/g, '');
}

describe('Utility test', () => {
  beforeEach(() => {
    cy.visit('.');
  });

  it('Visits the app and checks the title', () => {
    // cy.visit('http://tameware.com/adam/bridge/utilities/');
    // cy.visit('http://localhost:8080/adam/bridge/utilities/');
    // cy.visit('http://localhost:3000');
    cy.title().should('include', 'Bridge Utilities');
    cy.get('body').should('contain', 'Prepare ACBL Live results');
  });

  it('Confirms that incorrect input produces a null result', () => {
    cy.get('#userInput').type('hello');
    cy.get('#userInput').should('have.value', 'hello');
    
    cy.get('#textForm').submit()
    
    cy.get('#result').should('have.value', '');
  });

  it('Confirms that input with one match produces a correct result', () => {
    cy.get('#userInput').type(SINGLE_LINE_TEST_INPUT);
    cy.get('#userInput').should('include.value', SINGLE_LINE_TEST_INPUT.trim());
    
    cy.get('#textForm').submit()
    
    cy.get('#result').invoke('text').then((editorText) => {
      expect(editorText).to.equal(SINGLE_LINE_TEST_OUTPUT);
    });
  });

  it('Confirms that input with two matches produces two correct results', () => {
    cy.get('#userInput').type(MULTI_LINE_TEST_INPUT);
    cy.get('#userInput').should('include.value', stripNewlines(MULTI_LINE_TEST_INPUT));
    
    cy.get('#textForm').submit()
    
    cy.get('#result').invoke('text').then((editorText) => {
      expect(editorText).to.contain(stripNewlines(MULTI_LINE_TEST_OUPUT));
    });
  });
});
