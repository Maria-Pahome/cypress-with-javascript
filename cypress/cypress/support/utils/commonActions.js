class CommonActions{
  /**
   * clicks on element
   */
  clickElement(locator){
    return cy.get(locator).click();
  }
  
  /**
   * checks visibility of a locator 
   */
  checkElementIsVisible(locator){
    return cy.get(locator).should('be.visible');
  }
  
  /**
   * checks locator is visible and has text
   */
  checkElementIsVisibleAndContainsText(locator, textToCheck){
    return cy.get(locator).and('contain', textToCheck)
  }

  /***
   * checks length 
   */
  checkNumberOfElems(locator,length){
    cy.get(locator).should('have.length',length);
  }
  /**
   * checks  
   **/ 
  checkElementIsVisibleAndContainsTextAtIndex(locator, index,textToCheck) {
    return cy
      .get(locator)
      .eq(index)
      .should('be.visible')
      .and('contain', textToCheck);
  }

  clickOnElementAtIndex(locator, index, option = {}) {
    return cy
      .get(locator)
      .eq(index)
      .click(option);
  }

}

export const commonActions =  new CommonActions();