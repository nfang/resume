import { browser, element, by } from 'protractor/globals';

export class ResumePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rsm-root h1')).getText();
  }
}
