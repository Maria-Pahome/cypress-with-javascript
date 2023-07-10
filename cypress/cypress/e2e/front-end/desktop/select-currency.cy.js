import { manageCookiesLocators } from "../../../support/pages/manage-cookies/manage-cookies-locators.cy";
import { selectCurrencyLocators } from "../../../support/pages/select-currency/select-currency-locators.cy";
import { travellerHeaderLocators } from "../../../support/pages/traveller-header/traveller-header-locators.cy";
import { commonActions } from "../../../support/utils/commonActions";

describe("select currency tests", ()=>{
    beforeEach(()=>{
        cy.login();    
        cy.passPopUp();  
    })

    xit("select currency page is visible", ()=>{
        commonActions.clickElement(travellerHeaderLocators.selectCurrency);
        commonActions.checkElementIsVisible(selectCurrencyLocators.selectCurrencyWindow);
    })

    xit('check currency title text & visibility', ()=>{
        commonActions.clickElement(travellerHeaderLocators.selectCurrency);
        commonActions.checkElementIsVisibleAndContainsText(selectCurrencyLocators.selectCurrencyTitle,"Select your currency");
    })

    xit('check length of the currencies list', ()=>{
      commonActions.clickElement(travellerHeaderLocators.selectCurrency);
      commonActions.checkNumberOfElems(selectCurrencyLocators.selectedCurrency, 57);
    })

    it('check currency value from sugested currencies', ()=>{
        commonActions.clickElement(travellerHeaderLocators.selectCurrency);
        commonActions.checkElementIsVisibleAndContainsTextAtIndex(selectCurrencyLocators.currency, 1,"EUR");
        commonActions.clickOnElementAtIndex(selectCurrencyLocators.currencyBtn,1)
        commonActions.clickElement(manageCookiesLocators.decline);
        commonActions.checkElementIsVisibleAndContainsText(travellerHeaderLocators.selectCurrency,"EUR");
    })
})