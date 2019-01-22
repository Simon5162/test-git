import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< hop
    expect(page.getTitleText()).toEqual('Welcome to test-test!');
=======
    expect(page.getTitleText()).toEqual('Welcome to test-git!');
>>>>>>> blbl test
  });
});
