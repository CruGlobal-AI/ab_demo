const PWA_APP_ID = "c355634c-42ca-4317-a086-3aeb4f750d8b";

export default () => {
   describe("Test PWA (mobile) app", () => {
      beforeEach(() => {
         cy.viewport("iphone-6");
      });

      it("Opens First Page", () => {
         cy.visit(`/mobile/app/admin/${PWA_APP_ID}?route=First_Page`);
         cy.get("#app").should("exist");
         cy.get(".title-large-text", { timeout: 30000 })
            .should("be.visible")
            .contains("First Page");
         cy.get(".page-content")
            .contains("Example Text in a custom widget")
            .should("be.visible");
      });

      it("Opens item list", () => {
         cy.visit(`/mobile/app/admin/${PWA_APP_ID}?route=item_list`);
         cy.get(".page-content", { timeout: 30000 })
            .contains("item_list.mobile-list")
            .should("be.visible");
      });
   });
};
