import { HttpservicePage } from './app.po';

describe('httpservice App', function() {
  let page: HttpservicePage;

  beforeEach(() => {
    page = new HttpservicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
