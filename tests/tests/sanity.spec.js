describe('This is a test scenario',function () {

  beforeAll(function(){
    browser.get('http://ptcu:80')
  });
  it('Validate the title',function () {

   expect(browser.getTitle()).toBe('RoutingIntro');
  });
});
