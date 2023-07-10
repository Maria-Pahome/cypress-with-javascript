import { travellerHeaderLocators } from "../../../support/pages/traveller-header/traveller-header-locators.cy";
import { commonActions } from "../../../support/utils/commonActions";

describe('header tests', () => {
  beforeEach(() => {
    cy.login();
    commonActions.clickElement(travellerHeaderLocators.dismissSignInInfo);
  });

  it('check visibility of logo', ()=>{
    commonActions.checkElementIsVisible(travellerHeaderLocators.logo);
  })
  
})