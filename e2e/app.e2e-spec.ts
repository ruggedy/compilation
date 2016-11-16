import { DamishleyPage } from './app.po';

describe('damishley App', function() {
  let page: DamishleyPage;

  beforeEach(() => {
    page = new DamishleyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
