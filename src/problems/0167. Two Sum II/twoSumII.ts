// Two pointers
// Time complexity: O(n)
// Space complexity: O(n)
function twoSum(numbers: number[], target: number): number[] {
  let low: number = 0;
  let high: number = numbers.length - 1;
  while (low < high) {
    let sum = numbers[low] + numbers[high];
    if (sum == target) return [low + 1, high + 1];
    else if (sum < target) ++low;
    else --high;
  }
  return [];
}

// Test
import { expect } from "chai";

describe("167. Two Sum II - Input array is sorted", () => {
  it("can sum", () => {
    expect(twoSum([2, 7, 11, 15], 9)).to.eql([1, 2]);
  });
});
