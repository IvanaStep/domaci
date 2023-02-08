
/// <reference types="Cypress"/>



describe("gallery test",()=>{
  it("visit gallery app",()=>{
      cy.visit("/")
  })
  it("login test positive",()=>{
      cy.visit("/");
      cy.get(".nav-link").eq(1).click();
      cy.get("#email").type("testing@gmail.com");
      cy.get("#password").type("nekonesto11");
      cy.get("button").click();
      cy.get(".nav-link").should("have.length",4);
      cy.url().should("not.contain","/login");
      cy.get(".nav-link").eq(3).click();
  })
  it("login test negative without email",()=>{
      cy.visit("/");
      cy.get(".nav-link").eq(1).click();
      cy.get("#password").type('nekonesto11');
  })
  it("login test negative without password ",()=>{
      cy.visit("/");
      cy.get(".nav-link").eq(1).click();
      cy.get("#email").type("testing@mail.com");
  })
  it("login test negative with wrong email",()=>{
      cy.visit("/");
      cy.get(".nav-link").eq(1).click();
      cy.get("#email").type("testing@gail.om");
      cy.get("#password").type("nestoneko11");
      cy.get("button").click();
  })    
  it("login test negative with wrong password",()=>{
      cy.visit("/");
      cy.get(".nav-link").eq(1).click();
      cy.get("#email").type("testing@gmail.com");
      cy.get("#password").type("nestoneko");
      cy.get("button").click();
  }) 
  
  it("login test negative without credentials",()=>{
      cy.visit("/");
      cy.get(".nav-link").eq(1).click();
      cy.get("button").click();
  }) 
  
})