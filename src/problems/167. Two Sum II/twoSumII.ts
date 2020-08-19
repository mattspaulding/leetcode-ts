// Brtue force - slow
// Time complexity: O(n2)
// Space complexity: O(1)
// function twoSum(nums: number[], target: number): number[] {
//   for (let i: number = 0; i < nums.length; i++) {
//     for (let j: number = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// Hashmap two pass - fast
// Time complexity: O(n)
// Space complexity: O(n)
// function twoSum(nums: number[], target: number): number[] {
//   var map: Map<number, number> = new Map(nums.map((num, i) => [num, i]));
//   for (let i: number = 0; i < nums.length; i++) {
//     let match: number = map.get(target - nums[i]) || -1;
//     if (i !== match && match > -1) {
//       return [i, match];
//     }
//   }
//   return [];
// }

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
