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

// Hashmap one pass - fast and clean
// Time complexity: O(n)
// Space complexity: O(n)
// function threeSum(nums: number[], target: number): number[] {
//   let map: Map<number, number> = new Map<number, number>();
//   for (let i: number = 0; i < nums.length; i++) {
//     const complement: number = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement) || 0, i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// }

function threeSum(nums: number[]): number[][] {
  let map: Map<number, number> = new Map<number, number>(
    nums.map((num: number, i: number) => [i, num])
  );



  return;
}

// Test
import { expect } from "chai";

describe("threeSum", () => {
  // it("can sum", () => {
  //   expect(threeSum([-1, 0, 1, 2, -1, -4])).to.eql([
  //     [-1, 0, 1],
  //     [-1, -1, 2],
  //   ]);
  // });
});
