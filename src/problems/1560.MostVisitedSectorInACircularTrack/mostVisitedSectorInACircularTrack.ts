function mostVisited(n: number, rounds: number[]): number[] {
  let res: number[] = [];
  let first = rounds[0];
  let last = rounds[rounds.length - 1];
  if (first <= last) {
    for (let i: number = first; i <= last; i++) {
      res.push(i);
    }
  } else {
    for (let i: number = 1; i <= last; i++) {
      res.push(i);
    }
    for (let i: number = first; i <= n; i++) {
      res.push(i);
    }
  }
  return res;
}

// Test
import { expect } from "chai";

describe("1560. Most Visited Sector in a Circular Track", () => {
  it("can find most visited", () => {
    expect(mostVisited(4, [1, 3, 1, 2])).to.eql([1, 2]);
    expect(mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2])).to.eql([2]);
    expect(mostVisited(7, [1, 3, 5, 7])).to.eql([1, 2, 3, 4, 5, 6, 7]);
    expect(mostVisited(3, [3, 2, 1, 2, 1, 3, 2, 1, 2, 1, 3, 2, 3, 1])).to.eql([
      1,
      3,
    ]);
  });
});
