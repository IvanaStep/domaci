/// <reference types="Cypress"/>

describe("gallery test",()=>{
it("registration test positive",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#first-name").type("neko");
    cy.get("#last-name").type("nesto");
    cy.get("#email").type("uvjekisto@gmail.com");
    cy.get("#password").type("zastozato12");
    cy.get("#password-confirmation").type("zastozato12");
    cy.get(".form-check-input").check();
    cy.get("form").find("input[type='checkbox']").should("be.checked").and("not.be.disabled");
    cy.get("button").click();
})
it("registration test negative only pressing submit button",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("button").click();
})
it("registration test negative without first name",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#last-name").type("nesto");
    cy.get("#email").type("uvjekisto@gmail.com");
    cy.get("#password").type("zastozato12");
    cy.get("#password-confirmation").type("zastozato12");
    cy.get(".form-check-input").check();
    cy.get("form").find("input[type='checkbox']").should("be.checked").and("not.be.disabled");
    cy.get("button").click();
})
it("registration test negative without last name",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#first-name").type("neko");
    cy.get("#email").type("uvjekisto@gmail.com");
    cy.get("#password").type("zastozato12");
    cy.get("#password-confirmation").type("zastozato12");
    cy.get(".form-check-input").check();
    cy.get("form").find("input[type='checkbox']").should("be.checked").and("not.be.disabled");
    cy.get("button").click();
})
it("registration test negative without email",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#first-name").type("neko");
    cy.get("#last-name").type("nesto");
    cy.get("#password").type("zastozato12");
    cy.get("#password-confirmation").type("zastozato12");
    cy.get(".form-check-input").check();
    cy.get("form").find("input[type='checkbox']").should("be.checked").and("not.be.disabled");
    cy.get("button").click();
})
it("registration test negative without password",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#first-name").type("neko");
    cy.get("#last-name").type("nesto");
    cy.get("#email").type("uvjekisto@gmail.com");
    cy.get("#password-confirmation").type("zastozato12");
    cy.get(".form-check-input").check();
    cy.get("form").find("input[type='checkbox']").should("be.checked").and("not.be.disabled");
    cy.get("button").click();
})
it("registration test negative without password confirmation",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#first-name").type("neko");
    cy.get("#last-name").type("nesto");
    cy.get("#email").type("uvjekisto@gmail.com");
    cy.get("#password").type("zastozato12");
    cy.get(".form-check-input").check();
    cy.get("form").find("input[type='checkbox']").should("be.checked").and("not.be.disabled");
    cy.get("button").click();
})
it("registration test negative without accepting terms and conditions",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#first-name").type("neko");
    cy.get("#last-name").type("nesto");
    cy.get("#email").type("uvjekisto@gmail.com");
    cy.get("#password").type("zastozato12");
    cy.get("#password-confirmation").type("zastozato12");
    cy.get("button").click();
})
it("registration test negative without first and last name",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#email").type("uvjekisto@gmail.com");
    cy.get("#password").type("zastozato12");
    cy.get("#password-confirmation").type("zastozato12");
    cy.get(".form-check-input").check();
    cy.get("form").find("input[type='checkbox']").should("be.checked").and("not.be.disabled");
    cy.get("button").click();
})
it("registration test negative with wrong first and last name",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#first-name").type("n");
    cy.get("#last-name").type("n");
    cy.get("#email").type("uvjekisto@gmail.com");
    cy.get("#password").type("zastozato12");
    cy.get("#password-confirmation").type("zastozato12");
    cy.get(".form-check-input").check();
    cy.get("form").find("input[type='checkbox']").should("be.checked").and("not.be.disabled");
    cy.get("button").click();
})
it("registration test negative with wrong email",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#first-name").type("neko");
    cy.get("#last-name").type("nesto");
    cy.get("#email").type("uvjekisto@gmail.om");
    cy.get("#password").type("zastozato12");
    cy.get("#password-confirmation").type("zastozato12");
    cy.get(".form-check-input").check();
    cy.get("form").find("input[type='checkbox']").should("be.checked").and("not.be.disabled");
    cy.get("button").click();
})
it("registration test negative with wrong password",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#first-name").type("n");
    cy.get("#last-name").type("n");
    cy.get("#email").type("uvjekisto@gmail.com");
    cy.get("#password").type("zastozato");
    cy.get("#password-confirmation").type("zastozato12");
    cy.get(".form-check-input").check();
    cy.get("form").find("input[type='checkbox']").should("be.checked").and("not.be.disabled");
    cy.get("button").click();
})
it("registration test negative with wrong confirmation of the password",()=>{
    cy.visit("/");
    cy.get("a[href='/register").click();
    cy.get("#first-name").type("n");
    cy.get("#last-name").type("n");
    cy.get("#email").type("uvjekisto@gmail.com");
    cy.get("#password").type("zastozato12");
    cy.get("#password-confirmation").type("zastozato");
    cy.get(".form-check-input").check();
    cy.get("form").find("input[type='checkbox']").should("be.checked").and("not.be.disabled");
    cy.get("button").click();
})


})