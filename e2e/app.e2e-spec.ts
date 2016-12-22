import { AsyncSoundPage } from './app.po';

describe('async-sound App', function() {
  let page: AsyncSoundPage;

  beforeEach(() => {
    page = new AsyncSoundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
