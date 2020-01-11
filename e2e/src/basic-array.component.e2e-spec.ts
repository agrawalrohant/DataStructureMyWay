import { AppPage } from './app.po';
import { browser, logging, protractor, element, by } from 'protractor';

describe('basic array operations working', () => {
    let page: AppPage;

    beforeEach(() => {
      page = new AppPage();
    });

    /*it('should warn on simple click of Insert button', () => {
        page.navigateTo();
        page.getArrayInsertButton().click();
        //var more = element(by.css('div.warningMsg'));
        //var EC = protractor.ExpectedConditions;
        //browser.wait(EC.presenceOf(more),1000);
        expect(page.getWarningMessageText()).toEqual('Warning : Choose a number to insert.');
      });*/

      it('should insert element on entering a number and click of Insert button', () => {
        page.navigateTo();
        page.getInsertInputElement().sendKeys(10);
        page.getArrayInsertButton().click();
        expect(page.getArrayRepresesntation()).toEqual('10');
      });

      /*it('should warn if the Array is full and trying to indert a new element');

      it('should warn on simple click of Delete button when no elements in Array');*/

      it('should delete the last element on click of Delete button', () => {
        page.navigateTo();
        // Insert an element 
        page.getInsertInputElement().sendKeys(10);
        page.getArrayInsertButton().click();

        page.getArrayDeleteButton().click();
        expect(page.getArrayRepresesntation()).toEqual('0');
      });
});