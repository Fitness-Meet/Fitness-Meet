import { FitnessMeetPage } from './app.po';

describe('fitness-meet App', function() {
  let page: FitnessMeetPage;

  beforeEach(() => {
    page = new FitnessMeetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
