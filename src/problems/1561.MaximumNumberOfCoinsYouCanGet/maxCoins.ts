function maxCoins(piles: number[]): number {
    let rounds = piles.length / 3;
    let result = 0;
    var sortedPiles: number[] = piles.sort((n1, n2) => n1 - n2);
    for (let i = 0; i < rounds; i++) {

      sortedPiles.pop();
      result += sortedPiles.pop()||0;
      sortedPiles.shift();
    }
    return result;
  }

  // Test
  import { expect } from "chai";

  describe("1561. Maximum Number of Coins You Can Get", () => {
    it("can get max coins", () => {
      expect(maxCoins([2, 4, 1, 2, 7, 8])).to.eql(9);
      expect(maxCoins([2, 4, 5])).to.eql(4);
      expect(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])).to.eql(18);
    });
  });