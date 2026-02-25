describe("Testing my counter appp", () => {
  const DELAY = 500; // Fast delay for smoother testing

  beforeEach(() => {
    cy.visit("/");
  });

  describe("Checking the initial state", () => {
    it("should display the counter function", () => {
      cy.get('[data-testid="counter-component"]').should("be.visible");
      // Corrected: lowercase and exact spacing
      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "value of counter: 0"
      );
    });

    it("should have input feilds initialized to 0", () => {
      cy.get('[data-testid="value_inc"]').should("have.value", "0");
      cy.get('[data-testid="value_dec"]').should("have.value", "0");
    });

    it("should not render logs section initially", () => {
      // Corrected: uses underscore to match your Counter.jsx
      cy.get('[data-testid="logs_section"]').should("not.exist");
    });
  });

  describe("Increase Counter", () => {
    it("should increase counter by entered value", () => {
      // Added .clear() to prevent '05'
      cy.get('[data-testid="value_inc"]').clear().type("5");
      cy.get('[data-testid="button_inc"]').click();
      cy.wait(DELAY);

      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "value of counter: 5"
      );
    });

    it("should increase counter multiple times", () => {
      cy.get('[data-testid="value_inc"]').clear().type("10");
      cy.get('[data-testid="button_inc"]').click();
      cy.wait(DELAY);
      cy.get('[data-testid="counter-value"]').should("contain", "value of counter: 10");

      cy.get('[data-testid="value_inc"]').clear().type("25");
      cy.get('[data-testid="button_inc"]').click();
      cy.wait(DELAY);
      cy.get('[data-testid="counter-value"]').should("contain", "value of counter: 35");
    });

    it("should reset input field after increase", () => {
      cy.get('[data-testid="value_inc"]').clear().type("7");
      cy.get('[data-testid="button_inc"]').click();
      cy.get('[data-testid="value_inc"]').should("have.value", "0");
    });
  });

  describe("Decrease Counter", () => {
    it("should decrease counter by entered value", () => {
      cy.get('[data-testid="value_dec"]').clear().type("3");
      cy.get('[data-testid="button_dec"]').click();
      cy.wait(DELAY);
      cy.get('[data-testid="counter-value"]').should("contain", "value of counter: -3");
    });

    it("should decrease counter from a positive value", () => {
      cy.get('[data-testid="value_inc"]').clear().type("20");
      cy.get('[data-testid="button_inc"]').click();
      cy.wait(DELAY);

      cy.get('[data-testid="value_dec"]').clear().type("8");
      cy.get('[data-testid="button_dec"]').click();
      cy.wait(DELAY);
      cy.get('[data-testid="counter-value"]').should("contain", "value of counter: 12");
    });

    it("should reset input field after decrease", () => {
      cy.get('[data-testid="value_dec"]').clear().type("5");
      cy.get('[data-testid="button_dec"]').click();
      cy.get('[data-testid="value_dec"]').should("have.value", "0");
    });
  });

  describe("Logs Functionality", () => {
    it("should show logs section after counter operation", () => {
      cy.get('[data-testid="logs_section"]').should("not.exist");
      cy.get('[data-testid="value_inc"]').clear().type("5");
      cy.get('[data-testid="button_inc"]').click();
      cy.wait(DELAY);
      cy.get('[data-testid="logs_section"]').should("be.visible");
    });

    it("should toggle logs visibility", () => {
      cy.get('[data-testid="value_inc"]').clear().type("10");
      cy.get('[data-testid="button_inc"]').click();
      cy.wait(DELAY);

      // Uses the unique class for the toggle button
      cy.get('.button_info').should("contain", "Show Logs").click();
      cy.get('[data-testid="log_info"]').should("be.visible");
      
      cy.get('.button_info').should("contain", "Hide Logs").click();
      cy.get('[data-testid="log_info"]').should("not.exist");
    });

    it("should display correct log information", () => {
      cy.get('[data-testid="value_inc"]').clear().type("15");
      cy.get('[data-testid="button_inc"]').click();
      cy.wait(DELAY);

      cy.get('.button_info').click();
      cy.get('[data-testid="log_info"]')
        .should("contain", "Previous Value = 0")
        .and("contain", "Value Added = 15")
        .and("contain", "New Value = 15");
    });

    it("should delete log entry on click", () => {
      cy.get('[data-testid="value_inc"]').clear().type("10");
      cy.get('[data-testid="button_inc"]').click();
      cy.get('[data-testid="value_inc"]').clear().type("5");
      cy.get('[data-testid="button_inc"]').click();
      
      cy.get('.button_info').click();
      cy.get('[data-testid="log_info"]').should("have.length", 2);
      
      cy.get('[data-testid="log_info"]').first().click();
      cy.get('[data-testid="log_info"]').should("have.length", 1);
    });

    it("should hide logs section when all logs are deleted", () => {
      cy.get('[data-testid="value_inc"]').clear().type("5");
      cy.get('[data-testid="button_inc"]').click();
      
      cy.get('.button_info').click();
      cy.get('[data-testid="log_info"]').click(); 
      
      cy.get('[data-testid="logs_section"]').should("not.exist");
    });
  });

  describe("Combined Operations", () => {
    it("should handle multiple operations", () => {
      cy.get('[data-testid="value_inc"]').clear().type("50");
      cy.get('[data-testid="button_inc"]').click();
      
      cy.get('[data-testid="value_dec"]').clear().type("20");
      cy.get('[data-testid="button_dec"]').click();

      cy.get('[data-testid="counter-value"]').should("contain", "value of counter: 30");
      
      cy.get('.button_info').click();
      cy.get('[data-testid="log_info"]').should("have.length", 2);
    });
  });

  describe("Edge Cases", () => {
    it("should handle large numbers", () => {
      cy.get('[data-testid="value_inc"]').clear().type("9999");
      cy.get('[data-testid="button_inc"]').click();
      cy.get('[data-testid="counter-value"]').should("contain", "value of counter: 9999");
    });
  });
});