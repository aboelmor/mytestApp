import { MytestAppPage } from './app.po';

describe('mytest-app App', function() {
  let page: MytestAppPage;

  beforeEach(() => {
    page = new MytestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
