import { FirebaseChat3Page } from './app.po';

describe('firebase-chat3 App', function() {
  let page: FirebaseChat3Page;

  beforeEach(() => {
    page = new FirebaseChat3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
