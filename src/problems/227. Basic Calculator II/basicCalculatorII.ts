function lastIndexOfAnyOp(s: string) {
  let index = -1;
  let plusIndex = s.lastIndexOf("+");
  if (plusIndex > -1 && (plusIndex > index || index === -1)) {
    index = plusIndex;
  }
  let minusIndex = s.lastIndexOf("-");
  if (minusIndex > 0 && (minusIndex > index || index === -1)) {
    index = minusIndex;
  }
  let multIndex = s.lastIndexOf("*");
  if (multIndex > -1 && (multIndex > index || index === -1)) {
    index = multIndex;
  }
  let divIndex = s.lastIndexOf("/");
  if (divIndex > 0 && (divIndex > index || index === -1)) {
    index = divIndex;
  }
  return index;
}
function indexOfAnyOp(s: string) {
  let index = -1;
  let plusIndex = s.indexOf("+");
  if (plusIndex > -1 && (plusIndex < index || index === -1)) {
    index = plusIndex;
  }
  let minusIndex = s.indexOf("-", 1);
  if (minusIndex > -1 && (minusIndex < index || index === -1)) {
    index = minusIndex;
  }
  let multIndex = s.indexOf("*");
  if (multIndex > -1 && (multIndex < index || index === -1)) {
    index = multIndex;
  }
  let divIndex = s.indexOf("/");
  if (divIndex > -1 && (divIndex < index || index === -1)) {
    index = divIndex;
  }
  return index;
}
function indexOfMultDivOp(s: string) {
  let index = -1;
  let multIndex = s.indexOf("*");
  if (multIndex > -1 && (multIndex < index || index === -1)) {
    index = multIndex;
  }
  let divIndex = s.indexOf("/");
  if (divIndex > -1 && (divIndex < index || index === -1)) {
    index = divIndex;
  }
  return index;
}

function plusMinusOperation(s: string): string {
  while (true) {
    let index = indexOfAnyOp(s);
    if (index < 0) {
      break;
    }
    let sub1 = s.substring(0, index);
    let sub2 = s.substring(index + 1);
    let sub1sub = "";
    let sub1OpIndex = lastIndexOfAnyOp(sub1);
    if (sub1OpIndex >= 0) {
      sub1sub = sub1.substring(0, sub1OpIndex + 1);
      sub1 = sub1.substring(sub1OpIndex + 1);
    }
    let sub2sub = "";
    let sub2OpIndex = indexOfAnyOp(sub2);
    if (sub2OpIndex >= 0) {
      sub2sub = sub2.substring(sub2OpIndex);
      sub2 = sub2.substring(0, sub2OpIndex);
    }
    let ans: number;
    let op = s.substring(index, index + 1);
    if (op === "+") {
      ans = parseInt(sub1) + parseInt(sub2);
    } else {
      ans = parseInt(sub1) - parseInt(sub2);
    }
    s = sub1sub + ans + sub2sub;
  }
  return s;
}

function multDivOperation(s: string): string {
  while (true) {
    let index = indexOfMultDivOp(s);
    if (index < 0) {
      break;
    }
    let sub1 = s.substring(0, index);
    let sub2 = s.substring(index + 1);
    let sub1sub = "";
    let sub1OpIndex = lastIndexOfAnyOp(sub1);
    if (sub1OpIndex >= 0) {
      sub1sub = sub1.substring(0, sub1OpIndex + 1);
      sub1 = sub1.substring(sub1OpIndex + 1);
    }
    let sub2sub = "";
    let sub2OpIndex = indexOfAnyOp(sub2);
    if (sub2OpIndex >= 0) {
      sub2sub = sub2.substring(sub2OpIndex);
      sub2 = sub2.substring(0, sub2OpIndex);
    }
    let ans: number;
    let op = s.substring(index, index + 1);
    if (op === "*") {
      ans = parseInt(sub1) * parseInt(sub2);
    } else {
      ans = parseInt(sub1) / parseInt(sub2);
      if (ans > 0) {
        ans = Math.floor(ans);
      } else if (ans < 0) {
        ans = Math.ceil(ans);
      }
    }
    s = sub1sub + ans + sub2sub;
  }
  return s;
}

function calculate(s: string): number {
  s = multDivOperation(s);
  s = plusMinusOperation(s);
  return parseInt(s);
}

// Test
import { expect } from "chai";

describe("calculate", () => {
  it("can add", () => {
    expect(calculate("1+2")).to.equal(3);
    expect(calculate("1+2+3")).to.equal(6);
  });
  it("can subtract", () => {
    expect(calculate("3-2")).to.equal(1);
    expect(calculate("1+3-2")).to.equal(2);
    expect(calculate("7-2+3")).to.equal(8);
    expect(calculate("1-2+3")).to.equal(2);
    expect(calculate("2-3-4")).to.equal(-5);
  });
  it("can multiply", () => {
    expect(calculate("2*3")).to.equal(6);
    expect(calculate("3+2*2")).to.equal(7);
  });
  it("can divide", () => {
    expect(calculate(" 3/2 ")).to.equal(1);
    expect(calculate(" 3+5 / 2 ")).to.equal(5);
  });
});
