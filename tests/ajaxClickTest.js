describe("test that the button is clickable once the ajax loader completes loading", function(done) {
  it.skip("Attemp to click the button asap", function(done) {
    browser.url("/Ajax-Loader/index.html");
    browser.click('#button1');

  });

  it.only("Attemp to click the button after 7 seconds", function(done) {
    browser.url("/Ajax-Loader/index.html");
    this.timeout(20000);
    browser.pause(7000);
    browser.click('#button1');
    browser.pause(7000);
  });
});
