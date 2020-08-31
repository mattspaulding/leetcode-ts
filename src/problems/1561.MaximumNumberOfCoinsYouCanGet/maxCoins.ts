function maxCoins(piles: number[]): number {
  let rounds = piles.length / 3;
  let result = 0;
  var sortedPiles: number[] = piles.sort((n1, n2) => n1 - n2);
  for (let i = 0; i < rounds; i++) {
    sortedPiles.pop();
    result += sortedPiles.pop() || 0;
    sortedPiles.shift();
  }
  return result;
}

import { expect } from "chai";
describe("1561. Maximum Number of Coins You Can Get", () => {
  it("can get max coins", () => {
    expect(maxCoins([3, 3, 4])).to.eql(3);
  });
});
