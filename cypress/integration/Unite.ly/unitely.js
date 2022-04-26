/// <reference types="cypress" />

describe('Unitely Login and SMS', function() {

    it('Should be able to navigate to unite.ly' , () => {

        cy.visit('https://test.unite.ly/#/') .wait(5000)

    })      

it('Navigates to login' , () => {
    cy.get('#home-header-login-btn > .mat-button-wrapper').click()
    
  
}) 

it('Should be Able to login' , () => {
    cy.get('#login-email-input').click().type('stockton.nielson@unite.ly')
    cy.get('#login-password-input').click().type('Doom0101')
    cy.get('#login-email-submit-btn').click()
})

 it('be able to get into a program and navigate to chat' , () => {
    cy.get('.logo').click().wait(3000)
    cy.get('#chat-icon-btn > .mat-button-wrapper > .mat-icon').click().wait(5000)
    

}) 

it('Should be able to send a message' , () => {
    cy.get(':nth-child(2) > chat-item.mat-ripple > uni-avatar-inner.ng-star-inserted > .avatar-inner > .initials').click({force: true}).wait(3000)
    cy.get('.selected > .chat-info-container > .chat-info > .mat-tooltip-trigger').click({force: true}).wait(3000)
    cy.get('.message-textarea > .not-ios-device-style').click().type('stock').wait(5000)
    cy.get('#message-options-menu-btn > .mat-button-wrapper > .mat-icon').click()
    cy.get('#smsBtn').click()
    cy.get('#mesage-send-message-btn-mobile > .mat-button-wrapper > .mat-icon').click({force: true})
    


   
}) 
});