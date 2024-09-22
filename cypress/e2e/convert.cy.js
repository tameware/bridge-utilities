import { SINGLE_LINE_TEST_INPUT, SINGLE_LINE_TEST_OUTPUT, MULTI_LINE_TEST_INPUT, MULTI_LINE_TEST_OUPUT, MULTI_LINE_TEST_OUPUT_1, MULTI_LINE_TEST_OUPUT_2 } from '../../test_strings.js';

describe('Utility test', () => {
  it('Visits the app and checks the title', () => {
    // cy.visit('http://tameware.com/adam/bridge/utilities/');
    // cy.visit('http://localhost:8080/adam/bridge/utilities/');
    // cy.visit('http://localhost:3000');
    cy.visit('.');

    cy.title().should('include', 'Bridge Utilities');
    cy.get('body').should('contain', 'Prepare ACBL Live results');
  });

  it('Confirms that incorrect input produces a null result', () => {
    cy.visit('.');

    cy.get('#userInput').type('hello');
    cy.get('#userInput').should('have.value', 'hello');
    
    cy.get('#textForm').submit()
    
    cy.get('#result').should('have.value', '');

    cy.get('#userInput').clear();
  });

  it('Confirms that input with one match produces a correct result', () => {
    cy.visit('.');

    cy.get('#userInput').type(SINGLE_LINE_TEST_INPUT);
    cy.get('#userInput').should('include.value', SINGLE_LINE_TEST_INPUT.trim());
    
    cy.get('#textForm').submit()
    
    cy.get('#result').invoke('text').then((editorText) => {
      expect(editorText).to.equal(SINGLE_LINE_TEST_OUTPUT);
    });

    cy.get('#userInput').clear();
  });

  it('Confirms that input with two matches produces two correct results', () => {
    cy.visit('.');

    cy.get('#userInput').type(MULTI_LINE_TEST_INPUT);
    // Doesn't work because the textarea value lacks the newlines in the input
    // cy.get('#userInput').should('include.value', MULTI_LINE_TEST_INPUT.trim());
    
    cy.get('#textForm').submit()
    
    cy.get('#result').invoke('text').then((editorText) => {
      expect(editorText).to.contain(MULTI_LINE_TEST_OUPUT_1);
      expect(editorText).to.contain(MULTI_LINE_TEST_OUPUT_2);
    });
  });
});
