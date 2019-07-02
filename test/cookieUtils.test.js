describe("CookieUtils API:", function() {
  describe("#getCookie()", function() {
    before(function() {
      rook.cookieUtils.setCookie("test", "getTestValue");
    });
    it(`rook.cookieUtils.getCookie('test', 'getTestValue') should return true`, function() {
      assert(rook.cookieUtils.getCookie("test") === "getTestValue");
    });
    it(`rook.cookieUtils.getCookie('empty', '') should return true`, function() {
      assert(rook.cookieUtils.getCookie("empty") === "");
    });
    after(function() {
      rook.cookieUtils.removeCookie("test");
    });
  });

  describe("#removeCookie()", function() {
    before(function() {
      rook.cookieUtils.setCookie("test", "removeTestValue");
    });
    it(`rook.cookieUtils.removeCookie('test') should return false`, function() {
      rook.cookieUtils.removeCookie("test");
      assert.notEqual(
        rook.cookieUtils.getCookie("test") === "removeTestValue",
        true
      );
    });
  });

  describe("#setCookie()", function() {
    it(`rook.cookieUtils.getCookie('test', 'setCookie') should return true`, function() {
      rook.cookieUtils.setCookie("test", "setCookie");
      assert(rook.cookieUtils.getCookie("test") === "setCookie");
    });
    after(function() {
      rook.cookieUtils.removeCookie("test");
    });
  });
});
