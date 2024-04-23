export default class productsMethods{

    Auth = {
        emailField : '#\\:r0\\:',
        passwordField : '#\\:r1\\:',
        loginButton : '.MuiButton-root'
    }

    enterEmail(email){
        cy.get(this.Auth.emailField)
        .type(email)
    }
    enterPassword(password){
        cy.get(this.Auth.passwordField)
        .type(password)
    }
    clickLogin(){
        cy.get(this.Auth.loginButton)
        .click()
    }
}