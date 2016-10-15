import { PsPlayersPage } from './app.po';

describe('ps-players App', function() {
  let page: PsPlayersPage;

  beforeEach(() => {
    page = new PsPlayersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
