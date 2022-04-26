/// <reference types="cypress" />

describe('Unitely Notes', function() {

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
it('Should be Able to create new with all content' , () => {
    
    cy.get('.logo').click({force: true}).wait(3000)
    cy.get('#primary-menu-item-5 > .mat-list-item-content').click({force: true}).wait(5000)
    cy.get('#new-item-fab-menu').click({force: true}).wait(3000)
    cy.get('#contents-board-menu-item-create-file').click().wait(3000)
    cy.get('#mat-input-4').click().type('test')
    cy.get('editor-toolbar-menu-viewer.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get('image-btn.ng-star-inserted > .mat-focus-indicator > span').click()
    cy.get('.file-full-name > .mat-tooltip-trigger').click()
    cy.get('#select-entries-bottom-sheet-add-btn > .mat-button-wrapper').click()
    cy.get('.ProseMirror > p').click().type('test')
    cy.get('editor-toolbar-menu-viewer.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get('video-btn.ng-star-inserted > .mat-focus-indicator').click().wait(2000)
    cy.get('.file-full-name > .mat-tooltip-trigger').click()
    cy.get('#select-entries-bottom-sheet-add-btn > .mat-button-wrapper').click()
    cy.get('.ProseMirror > p').click()
    cy.get('editor-toolbar-menu-viewer.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get('hyperlink-btn.ng-star-inserted > .mat-focus-indicator > span').click()
    cy.get('#mat-input-9').click().type('test')
    cy.get('#mat-input-10').click().type('https://www.youtube.com/watch?v=sO8eGL6SFsA')
    cy.get('.mat-dialog-actions > .mat-raised-button > .mat-button-wrapper').click()
    cy.get('editor-toolbar-menu-viewer.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get(':nth-child(4) > .feature > .mat-focus-indicator').click()
    cy.get('.item-wrapper > .mat-icon').click()
    cy.get('.mat-toolbar > .uni-button > .mat-button-wrapper').click().wait(3000)
    cy.get('video.ng-star-inserted').click().wait(3000).type('testbreak').wait(3000)
    

   
})



it('Should be Able to make text style changes' , () => {

    cy.get('.ProseMirror > :nth-child(1)').click().wait(3000).click()
    cy.get('bold-btn.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click({ force: true }).type('test')
    cy.get('bold-btn.ng-star-inserted > .mat-focus-indicator').type('test')
    cy.get('.ProseMirror > :nth-child(1)').click().wait(3000).click()
    cy.get('font-size-btn.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get('.menu-item-size-7').click()
    cy.get('.ProseMirror > :nth-child(1)').click().wait(3000).click().type('test')
    cy.get('justify-center-btn.ng-star-inserted > .mat-focus-indicator').click().type('test')
    cy.get('justify-right-btn.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click().type('test')
    cy.get('.ProseMirror > :nth-child(1)').click().wait(3000).click()
    cy.get('italic-btn.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click({ force: true }).type('test')
    cy.get('italic-btn.ng-star-inserted > .mat-focus-indicator').type('test')
    cy.get('.ProseMirror > :nth-child(1)').click().wait(3000).click()
    cy.get('underline-btn.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click({ force: true }).type('test')
    cy.get('underline-btn.ng-star-inserted > .mat-focus-indicator') .type('test')
    cy.get('unordered-list-btn.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click().wait(3000).click()
    cy.get('ordered-list-btn.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click().wait(3000).click()
    cy.get('#primary-menu-item-0 > .mat-list-item-content > .menu-item-label > div').click()
    cy.get('#confirm-dialog-confirm-btn > .mat-button-wrapper').click()
    

})


it('Should be Able to Save n Stuff' , () => {
    cy.visit('https://test.unite.ly/#/') .wait(5000)
    cy.get('#home-header-login-btn > .mat-button-wrapper').click()
    cy.get('#login-email-input').click().type('stockton.nielson@unite.ly')
    cy.get('#login-password-input').click().type('Doom0101')
    cy.get('#login-email-submit-btn').click()
    cy.get('.logo').click({force: true}).wait(3000)
    cy.get('#primary-menu-item-5 > .mat-list-item-content').click({force: true})
    cy.get('#new-item-fab-menu').click({force: true}).wait(3000)
    cy.get('#contents-board-menu-item-create-file').click().wait(3000)
    cy.get('#mat-input-4').click().type('test')
    cy.get('.ProseMirror').click().wait(3000).type('test')
    cy.get('#editable-content-save-btn').click() // this is going to create a new note each time need to find a way to delete a note after creating. no longer required to have note in correct postion 
    cy.get('#content-grid-tile-type-icon-17969 > main').dblclick().wait(3000)
    cy.get('#content-view-edit-btn').click()
    cy.get('.ProseMirror').click().type(' @st').wait(3000)
    cy.get('menu-member > .member-container > .ellipsis').click()
    cy.get('#editable-content-save-btn').click()
    cy.visit('https://test.unite.ly/#/') .wait(5000)
    cy.get('#home-header-login-btn > .mat-button-wrapper').click()
    cy.get('.initials').click()
    cy.get('#page-header-avatar-menu-item-logout').click()
    cy.get('#login-email-input').click().type('boomboomjr4@gmail.com')
    cy.get('#login-password-input').click().type('Doom0101')
    cy.get('#login-email-submit-btn').click()
    cy.get('.logo').click({force: true}).wait(3000)
    cy.get('#page-header-notification-icon > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get(':nth-child(2) > .notice > .swipe-to-delete > uni-notification-card > .header') // not a peferct system this is only checking to make sure they have a notification for the correct team can give a false positive.
    cy.get('.arrow-back > .mat-button-wrapper > .mat-icon').click().wait(1500)
    cy.get('#primary-menu-item-5 > .mat-list-item-content').click({force: true})
    cy.get('#content-grid-tile-type-icon-17969 > main > .content > .mat-tooltip-trigger').dblclick()
    cy.get('#content-view-edit-btn > .mat-button-wrapper').click()
    

    cy.get('#editable-content-save-btn > .mat-button-wrapper')
})


});