import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('app Routing Navigation', () => {
    let page: AppPage;

    beforeEach(() => {
      page = new AppPage();
    });

    it('should have default route to Arrays', () => {
        page.navigateTo();
        expect(page.getArrayContentAreaHeading()).toEqual('Arrays');
      });

    /*it('should route to Stack', () => {
        page.navigateTo();
        page.getStackButtonOnLeftNav("Stack").click();
        expect(page.getStackContentAreaHeading()).toEqual('basic-stack works!');
      });*/
});