import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getArrayContentAreaHeading(){
    return element(by.css('app-basic-array h4 small')).getText() as Promise<string>;
  }

  getStackButtonOnLeftNav(navItem){
    return element(by.css('[ng-reflect-router-link="/'+ navItem +'"]'));
  }

  getStackContentAreaHeading(){
    return element(by.css('app-basic-stack p')).getText() as Promise<string>;
  }

  getArrayInsertButton(){
    return element(by.css('div.operationsContainer form .operation button.insertButton'));
  }

  getWarningMessageText(){
    return element(by.css('app-basic-array div.warningMsg')).getText();
  }

  getInsertInputElement(){
    return element(by.css('div.operationsContainer form .operation input.small-input'));
  }

  getArrayRepresesntation(){
    return element(by.css('div.displayArea div.displayBox span:first-child')).getText();
  }

  getArrayDeleteButton(){
    return element(by.css('div.operationsContainer form button.deleteButton'));
  }
}
