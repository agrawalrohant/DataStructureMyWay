import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to Data Structure my way!!');
  });

  /*it('should have all 4 hyperlinks on left nav for routing', () => {
    page.navigateTo();
    expect(page.getStackButtonOnLeftNav("Array").getText()).toEqual('Array');
    expect(page.getStackButtonOnLeftNav("Stack").getText()).toEqual('Stack');
    expect(page.getStackButtonOnLeftNav("Queue").getText()).toEqual('Queue');
    expect(page.getStackButtonOnLeftNav("Tree").getText()).toEqual('Tree');
  });*/

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
