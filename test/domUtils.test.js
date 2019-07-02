describe("DomUtils API:", function() {
  describe("#addClass()", function() {
    let $ele = null;
    before(function() {
      let div = document.createElement("div");
      div.id = "J_addClass";
      document.body.appendChild(div);
      $ele = document.querySelector("#J_addClass");
    });
    it(`rook.domUtils.addClass($ele, 'test') should return true`, function() {
      rook.domUtils.addClass($ele, "test");
      assert(rook.domUtils.hasClass($ele, "test"));
    });
    after(function() {
      document.body.removeChild($ele);
    });
  });

  describe("#hasClass()", function() {
    let $ele = null;
    before(function() {
      let div = document.createElement("div");
      div.id = "J_hasClass";
      document.body.appendChild(div);
      $ele = document.querySelector("#J_hasClass");
      rook.domUtils.addClass($ele, "test");
    });
    it(`rook.domUtils.hasClass($ele, 'test') should return true`, function() {
      assert(rook.domUtils.hasClass($ele, "test"));
    });
    it(`rook.domUtils.hasClass($ele, 'test') should return false`, function() {
      assert(!rook.domUtils.hasClass($ele, "test2"));
    });
    after(function() {
      document.body.removeChild($ele);
    });
  });

  describe("#removeClass()", function() {
    let $ele = null;
    before(function() {
      let div = document.createElement("div");
      div.id = "J_removeClass";
      document.body.appendChild(div);
      $ele = document.querySelector("#J_removeClass");
      rook.domUtils.addClass($ele, "test");
    });
    it(`rook.domUtils.removeClass($ele, 'test') should return false`, function() {
      rook.domUtils.removeClass($ele, "test");
      assert.notEqual(rook.domUtils.hasClass($ele, "test"), true);
      rook.domUtils.addClass($ele, "newTest");
      assert(rook.domUtils.hasClass($ele, "newTest"));
      rook.domUtils.removeClass($ele, "newTest");
      assert.notEqual(rook.domUtils.hasClass($ele, "newTest"), true);
    });
    after(function() {
      document.body.removeChild($ele);
    });
  });

  describe("#getByStyle()", function() {
    let $ele = null;
    before(function() {
      let div = document.createElement("div");
      div.id = "J_getStyle";
      div.style = "display:none";
      document.body.appendChild(div);
      $ele = document.querySelector("#J_getStyle");
    });
    it(`rook.domUtils.getByStyle($ele, 'display') should return none`, function() {
      assert(rook.domUtils.getByStyle($ele, "display") === "none");
    });
    after(function() {
      document.body.removeChild($ele);
    });
  });
});
