import { CambridgeMuseumPage } from './app.po';

describe('cambridge-museum App', function() {
  let page: CambridgeMuseumPage;

  beforeEach(() => {
    page = new CambridgeMuseumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
