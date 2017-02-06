import { Website3Page } from './app.po';

describe('website3 App', function() {
  let page: Website3Page;

  beforeEach(() => {
    page = new Website3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
