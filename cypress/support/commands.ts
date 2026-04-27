/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
type VisitWithAuthOptionsLocal = {
    path: string;
    user?: {
        id: string;
        username: string;
        roles?: string[];
    };
};

Cypress.Commands.add('visitWithAuth', ({ path, user }: VisitWithAuthOptionsLocal) => {
    const fallbackUser = {
        id: '1',
        username: 'cypress-user',
        roles: ['user'],
    };

    cy.visit(path, {
        onBeforeLoad(win) {
            win.localStorage.setItem('user', JSON.stringify(user ?? fallbackUser));
        },
    });
});
