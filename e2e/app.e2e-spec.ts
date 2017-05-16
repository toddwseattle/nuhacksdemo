import { Live2Page } from './app.po';

describe('live2 App', () => {
  let page: Live2Page;

  beforeEach(() => {
    page = new Live2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
