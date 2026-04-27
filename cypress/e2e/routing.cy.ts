/// <reference types="cypress" />
import '../support/commands';

describe('App routing', () => {
    it('opens public main route', () => {
        cy.visit('/');
        cy.location('pathname').should('eq', '/');
    });

    it('opens public about route', () => {
        cy.visit('/about');
        cy.location('pathname').should('eq', '/about');
    });

    it('shows not found page for unknown route', () => {
        cy.visit('/some-unknown-route');
        cy.location('pathname').should('eq', '/some-unknown-route');
        cy.contains(/Страница не найдена|Page not found/i).should('be.visible');
    });

    it('redirects guest from private profile route to forbidden', () => {
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.visit('/profile/1');
        cy.location('pathname').should('eq', '/forbidden');
        cy.contains(/У вас нет доступа к этой странице|You have no access to this page/i).should(
            'be.visible'
        );
    });

    it('allows authenticated user to open private profile route', () => {
        cy.visitWithAuth({
            path: '/profile/1',
            user: {
                id: '1',
                username: 'regular-user',
                roles: ['user'],
            },
        });
        cy.location('pathname').should('eq', '/profile/1');
    });

    it('redirects regular user from admin route to forbidden', () => {
        cy.visitWithAuth({
            path: '/admin',
            user: {
                id: '1',
                username: 'regular-user',
                roles: ['user'],
            },
        });
        cy.location('pathname').should('eq', '/forbidden');
        cy.contains(/У вас нет доступа к этой странице|You have no access to this page/i).should(
            'be.visible'
        );
    });

    it('allows admin to open admin route', () => {
        cy.visitWithAuth({
            path: '/admin',
            user: {
                id: '1',
                username: 'admin-user',
                roles: ['admin'],
            },
        });
        cy.location('pathname').should('eq', '/admin');
        cy.contains('admin panel page').should('be.visible');
    });
});
