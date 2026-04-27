/// <reference types="cypress" />

type VisitWithAuthOptions = {
    path: string;
    user?: {
        id: string;
        username: string;
        roles?: string[];
    };
};

declare namespace Cypress {
    interface Chainable {
        visitWithAuth(options: VisitWithAuthOptions): Chainable<void>;
    }
}
