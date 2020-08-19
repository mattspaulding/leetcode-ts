function twoSumII(nums: number[], i: number, res: number[][]): void {
  let lo: number = i + 1;
  let hi: number = nums.length - 1;
  while (lo < hi) {
    let sum: number = nums[i] + nums[lo] + nums[hi];
    if (sum < 0) {
      ++lo;
    } else if (sum > 0) {
      --hi;
    } else {
      res.push([nums[i], nums[lo++], nums[hi--]]);
      while (lo < hi && nums[lo] == nums[lo - 1]) ++lo;
    }
  }
}

function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  let res: number[][] = [];
  for (let i = 0; i < nums.length && nums[i] <= 0; ++i)
    if (i == 0 || nums[i - 1] != nums[i]) {
      twoSumII(nums, i, res);
    }
  return res;
}

// Test
import { expect } from "chai";

describe("15. 3Sum", () => {
  it("can sum", () => {
    setTimeout(function () {
      expect(threeSum([-1, 0, 1, 2, -1, -4])).to.eql([
        [-1, -1, 2],
        [-1, 0, 1],
      ]);
  }, 5000);
  
  });
});
