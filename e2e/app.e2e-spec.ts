import { TaggerPage } from './app.po';

describe('tagger App', function() {
  let page: TaggerPage;

  beforeEach(() => {
    page = new TaggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
