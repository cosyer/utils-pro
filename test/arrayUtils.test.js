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

  describe("#sum()", function() {
    it(`rook.arrayUtils.sum([1,2,3]) should return 6`, function() {
      assert(rook.arrayUtils.sum([1, 2, 3]) === 6);
    });
  });

  describe("#count()", function() {
    it(`rook.arrayUtils.count([1,1,2,3],1) should return 2`, function() {
      assert(rook.arrayUtils.count([1, 1, 2, 3], 1) === 2);
    });
  });

  describe("#arguments2Arr()", function() {
    it(`rook.arrayUtils.arguments2Arr({0:1,1:2,2:3,length:3}) should return [1,2,3]`, function() {
      assert(
        rook.arrayUtils
          .arguments2Arr({ 0: 1, 1: 2, 2: 3, length: 3 })
          .join("") === "123"
      );
    });
  });

  describe("#contains()", function() {
    it(`rook.arrayUtils.contains([1,2,3],1) should return true`, function() {
      assert(rook.arrayUtils.contains([1, 2, 3], 1) === true);
    });
  });

  describe("#unique()", function() {
    it(`rook.arrayUtils.unique([1,1,2,3]) should return [1,2,3]`, function() {
      assert(rook.arrayUtils.unique([1, 1, 2, 3]).join("") === "123");
    });
  });

  describe("#average()", function() {
    it(`rook.arrayUtils.average([1,2,3]) should return 2`, function() {
      assert(rook.arrayUtils.average([1, 2, 3]) === 2);
    });
  });
});
