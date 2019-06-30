describe("ArrayUtils API:", function() {
  describe("#equal()", function() {
    it(`rook.arrayUtils.equal([0, 2, 3, 4], [1, 2, 3]) should return false`, function() {
      assert.notEqual(rook.arrayUtils.equal([0, 2, 3, 4], [1, 2, 3]), true);
    });
    it(`rook.arrayUtils.equal([0, 2, 3], [1, 2, 3]) should return false`, function() {
      assert.notEqual(rook.arrayUtils.equal([0, 2, 3], [1, 2, 3]), true);
    });
    it("rook.arrayUtils.equal([1, 2, 3], [1, 2, 3]) should return true", function() {
      assert(rook.arrayUtils.equal([1, 2, 3], [1, 2, 3]));
    });
    const arr = [8, 2, 3, 4, 7, 8];
    it(`rook.arrayUtils.equal([${arr}],[${arr}]) should return true`, function() {
      assert(rook.arrayUtils.equal(arr, arr));
    });
  });

  describe("#max()", function() {
    it(`rook.arrayUtils.max([1,2,3]) should return 3`, function() {
      assert(rook.arrayUtils.max([1, 2, 3]) === 3);
    });
  });

  describe("#min()", function() {
    it(`rook.arrayUtils.min([1,2,3]) should return 1`, function() {
      assert(rook.arrayUtils.min([1, 2, 3]) === 1);
    });
  });
});
