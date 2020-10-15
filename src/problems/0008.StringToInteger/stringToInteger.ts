function myAtoi(s: string): number {
  let a = s.split("");
  let res = "";
  for (let i = 0; i < a.length; i++) {
    let c = a[i];
    if (c >= "0" && c <= "9") {
      // it is a number
      res += c;
    } else if (c === "-" || c === "+") {
      // it is a minus
      if (res) break;
      res += c;
    } else if (c === " ") {
      // it is a space
      if (res) break;
    } else {
      // it is something else
      break;
    }
  }

  let resnum = Number(res);
  if (Number.isNaN(resnum)) {
    resnum = 0;
  }
  if (resnum > 2147483647) {
    resnum = 2147483647;
  } else if (resnum < -2147483648) {
    resnum = -2147483648;
  }
  return resnum;
}

// Test
import { expect } from "chai";

describe("8. String to Integer (atoi)", () => {
  it("can atoi", () => {
    expect(myAtoi("42")).to.equal(42);
    expect(myAtoi("   -42")).to.equal(-42);
    expect(myAtoi("4193 with words")).to.equal(4193);
    expect(myAtoi("words and 987")).to.equal(0);
    expect(myAtoi("-91283472332")).to.equal(-2147483648);
    expect(myAtoi("3.14159")).to.equal(3);
    expect(myAtoi("-+12")).to.equal(0);
    expect(myAtoi("+1")).to.equal(1);
    expect(myAtoi("-5-")).to.equal(-5);
  });
});
