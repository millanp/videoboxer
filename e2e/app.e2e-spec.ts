import { VideoboxerPage } from './app.po';

describe('videoboxer App', function() {
  let page: VideoboxerPage;

  beforeEach(() => {
    page = new VideoboxerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
