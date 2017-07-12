import { HelloworldappPage } from './app.po';

describe('helloworldapp App', () => {
  let page: HelloworldappPage;

  beforeEach(() => {
    page = new HelloworldappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
