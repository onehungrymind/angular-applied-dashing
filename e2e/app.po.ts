import { browser, element, by } from 'protractor';

export class DashingAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.tagName('md-toolbar')).element(by.css('.title')).getText();
  }
}
