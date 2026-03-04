/**
 * ============================================
 * CYPRESS E2E TESTING ASSIGNMENT
 * React Router Application
 * ============================================
 *
 * OBJECTIVE:
 * Write 10 Cypress E2E tests to verify the functionality of
 * a React Router application with authentication, navigation,
 * nested routes, and protected routes.
 *
 * SETUP:
 * 1. Run the dev server: npm run dev
 * 2. Run JSON server: npm run server (if needed for products API)
 * 3. Run Cypress: npx cypress open
 *
 * USEFUL CYPRESS COMMANDS:
 * - cy.visit(url)           - Navigate to a URL
 * - cy.get(selector)        - Select element(s)
 * - cy.contains(text)       - Find element containing text
 * - cy.click()              - Click an element
 * - cy.should()             - Make an assertion
 * - cy.url()                - Get current URL
 * - { timeout: ms }         - Wait longer for async operations
 *
 * AVAILABLE DATA-TESTID SELECTORS:
 * - "home"              - Home page container
 * - "brandName"         - Company name in nav
 * - "Home_Link"         - Navigation link to Home
 * - "About_Link"        - Navigation link to About
 * - "Product_Link"      - Navigation link to Products
 * - "login_button"      - Login/Logout button
 * - "loader"            - Loading spinner
 * - "mini_switch"       - Sub-navigation in About page
 * - "info"              - Info page container
 * - "offers"            - Offers page container
 * - "items_offers"      - Individual offer items
 * - "items_offers_title"- Offer item titles
 * - "items_offers_price"- Offer item prices
 * - "product_detail_image" - Product detail image
 *
 * ============================================
 */

describe("React Router Application E2E Tests", () => {
  const BASE_URL = "http://localhost:5173";
  const DELAY = 1500;

  beforeEach(() => {
    cy.visit(BASE_URL);
    cy.wait(DELAY);
  });

  /**
   * TEST 1: Home Page Loading
   *
   * HINT: Verify the home page displays correctly with:
   * - The home container is visible (data-testid="home")
   * - Welcome message is displayed
   * - Brand name "The Clothing Company" appears in navigation
   *
   * ASSERTIONS TO USE: should("be.visible"), should("contain"), contains()
   */
  it("should load the home page with correct content", () => {
    // TODO: Implement test
    cy.get('[data-testid="home"]').should("be.visible");

    cy.get('[data-testid="welcome-message"]').should(
        "contain",
        "Quality Clothing for Quality People",
      );

      cy.get('[data-testid="brandName"]').should(
        "contain",
        "The Clothing Company",
      );

      
  });

  /**
   * TEST 2: Main Navigation
   *
   * HINT: Test that clicking navigation links changes the URL:
   * - Check all 3 nav links are visible (Home, About, Products)
   * - Click About link → URL should include "/about"
   * - Click Products link → URL should include "/products"
   * - Click Home link → URL should be base URL + "/"
   *
   * ASSERTIONS TO USE: cy.url().should("include", ...), should("eq", ...)
   */
  it("should navigate between main routes using nav links", () => {
    // TODO: Implement test

    cy.get('[data-testid="Home_Link"]').should("be.visible");
    cy.get('[data-testid="About_Link"]').should("be.visible");
    cy.get('[data-testid="Product_Link"]').should("be.visible");

    cy.wait(DELAY)
    cy.get('[data-testid="About_Link"]').click()
    cy.wait(DELAY)
    cy.url().should("include", "/about")
    cy.wait(DELAY)
    cy.get('[data-testid="Product_Link"]').click()
    cy.wait(DELAY)
    cy.url().should("include", "/products")
    cy.wait(DELAY)
    cy.get('[data-testid="Home_Link"]').click()

    cy.location("pathname").should("eq", "/");
  });

  /**
   * TEST 3: Login Flow
   *
   * HINT: Test the login authentication flow:
   * - Initially the button shows "Login"
   * - After clicking, a loader appears (data-testid="loader")
   * - After ~1.5s, button text changes to "Logout"
   *
   * NOTE: Use { timeout: 3000 } for assertions that wait for async operations
   */
  it("should login successfully and show logged in state", () => {
    // TODO: Implement test

    cy.contains("button", "Login").should("be.visible");
    cy.wait(DELAY)

    
    cy.contains("button", "Login").click();
    cy.wait(DELAY)

    cy.get('[data-testid="loader"]').should("be.visible");
    cy.wait(DELAY)

    cy.contains("button", "Logout", { timeout: 3000 }).should("be.visible");
  });

  /**
   * TEST 4: Logout Flow
   *
   * HINT: Test logging out after being logged in:
   * - First login (click button, wait for "Logout" text)
   * - Then click again to logout
   * - Loader should appear during logout
   * - Button should return to showing "Login"
   *
   * NOTE: This test requires waiting for two async operations
   */
  it("should logout successfully after being logged in", () => {
    // TODO: Implement test
  });

  /**
   * TEST 5: Protected Route (Not Logged In)
   *
   * HINT: Verify products page shows login message when not authenticated:
   * - Navigate to Products page without logging in
   * - Should display message: "Please Login To See Products"
   *
   * ASSERTIONS TO USE: cy.contains().should("be.visible")
   */
  it("should show login message on Products page when not logged in", () => {
    // TODO: Implement test
  });

  /**
   * TEST 6: Products Display (Logged In)
   *
   * HINT: Verify products display after authentication:
   * - Login first and wait for completion
   * - Navigate to Products page
   * - Should show 3 categories: "Hoodies", "Tees", "Sneakers"
   * - Should have product images (use .products img selector)
   *
   * NOTE: Products are fetched from API, may need timeout
   */
  it("should display products when user is logged in", () => {
    // TODO: Implement test
  });

  /**
   * TEST 7: Nested Routes (About Page)
   *
   * HINT: Test nested routing with About > Info/Offers:
   * - Click About link → should redirect to /about/info
   * - Info page should be visible with "About Us" heading
   * - Sub-navigation (data-testid="mini_switch") should be visible
   * - Click "Offers" in sub-nav → URL should include "/about/offers"
   * - Offers page should show "Latest Offers"
   *
   * KEY CONCEPT: Nested routes use <Outlet /> to render child content
   */
  it("should navigate to About page and display nested routes", () => {
    // TODO: Implement test
  });

  /**
   * TEST 8: Offers Data Display
   *
   * HINT: Verify offers page shows correct product data:
   * - Navigate to About > Offers
   * - Should display exactly 3 offer items
   * - Each item has title and price
   * - Verify specific products: "Hoodie", "Sneakers", "Tee"
   * - Verify prices: €21.99, €34.99, €12.99
   *
   * ASSERTIONS TO USE: should("have.length", 3)
   */
  it("should display offers with title and price", () => {
    // TODO: Implement test
  });

  /**
   * TEST 9: Product Details Navigation
   *
   * HINT: Test dynamic route parameters and back navigation:
   * - Navigate to About > Offers
   * - Click on the first offer item (Hoodie)
   * - URL should include "/about/offers/1/Hoodie"
   * - Product detail image should be visible
   * - Product title "Hoodie - 1" should display
   * - Click "Back" → should return to offers page
   *
   * KEY CONCEPT: Dynamic routes use :id and :type params (useParams hook)
   */
  it("should navigate to product details from offers page", () => {
    // TODO: Implement test
  });

  /**
   * TEST 10: 404 Error Page
   *
   * HINT: Verify unknown routes show error message:
   * - Visit a non-existent route (e.g., /unknown-page)
   * - Should display element with class "error"
   * - Should contain text "Route Not Found"
   *
   * KEY CONCEPT: Catch-all route uses path="*" in React Router
   */
  it("should display 404 error for unknown routes", () => {
    // TODO: Implement test
  });
});