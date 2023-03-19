const input = 1234567890;

// output= 12*********90

function getStarOutput(param1) {
  const stringedNumber = "" + param1;
  const returnString = stringedNumber
    .split("")
    .map((each, index, org) => {
      const lengthOfArr = org.length;

      if (index > 1 && index < lengthOfArr - 2) {
        return "*";
      }
      return each;
    })
    .join("");

  return returnString;
}

console.log(getStarOutput(input));

const input1 = "albertttt";

function getOccuranceObject(param) {
  return param.split("").reduce((acc, each) => {
    if (acc?.[each]) {
      acc[each] += 1;
    } else {
      acc[each] = 1;
    }
    return acc;
  }, {});
}

console.log(getOccuranceObject(input1));
