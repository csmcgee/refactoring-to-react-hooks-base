/// <reference types="cypress" />
import { makeMockData } from '../../src/mocks';
// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Polly dashboard', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/totals/', {
      statusCode: 200,
      body: {
        salesTotal: 50000,
        subscriptionsTotal: 32500,
      },
    }).as("getTotals");
    // server = makeServer({ environment: "test" })
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/');
  });

  it('it displays sales and subscriptions', () => {
    cy.wait('@getTotals').its('response.statusCode').should('eq', 200);
    cy.get('.summary .card').should('have.length', 2)
    cy.get('.summary .card:first p:first').should('have.text', 'CellFast sales');
    cy.get('.summary .card:last p:first').should('have.text', 'CellNow subscriptions');
    // @todo: add in check for values retrieved
  });


  describe('select chart form', () => {
    it('it displays with correct options', () => {
      cy.get('#select-product').should('have.length', 1);
      cy.get('#select-product option:selected').should('have.text', '--');
    });

    it('it has a value of /api/sales when Sales is selected', () => {
      const { sales } = makeMockData();
      cy.intercept('GET', '/api/sales/', {
        statusCode: 200,
        body: sales,
      }).as("getSales");
      cy.get('#select-product').select('Sales').should('have.value', '/api/sales/');
      cy.wait('@getSales').its('response.statusCode').should('eq', 200);

    });

    it('it has a value of /api/subscriptions when Subscriptions is selected', () => {
      const { subscriptions } = makeMockData();
      cy.intercept('GET', '/api/subscriptions/', {
        statusCode: 200,
        body: subscriptions,
      }).as("getSubscriptions");
      cy.get('#select-product').select('Subscriptions').should('have.value', '/api/subscriptions/');
      cy.wait('@getSubscriptions').its('response.statusCode').should('eq', 200);

    });
  })

});
