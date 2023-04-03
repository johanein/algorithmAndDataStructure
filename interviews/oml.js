const updatesKey = (key) => {
  let updatedKey = key;
  switch (key) {
    case "{":
      updatedKey = "}";
      break;
    case "(":
      updatedKey = ")";
      break;
    case "[":
      updatedKey = "]";
      break;
    default:
      break;
  }
  return updatedKey;
};
const findCompleteBrackets = (stringParam) => {
  const arrayOfParamString = stringParam.split("");

  const startBracketsArray = ["{", "(", "["];
  const bracketObj = {};
  let lastMerged = [];
  let total = 0;
  for (let i = 0; i < arrayOfParamString.length; i++) {
    const each = arrayOfParamString[i];
    const eachUpdated = updatesKey(arrayOfParamString[i]);
    const isAlreadyInObject =
      bracketObj[eachUpdated] || bracketObj[eachUpdated] === 0;
    if (startBracketsArray.includes(each)) {
      // if it is a starting bracket
      if (isAlreadyInObject) {
        // when it comes again
        lastMerged.push(eachUpdated);
      } else {
        // when it first comes
        bracketObj[eachUpdated] = 0;
        lastMerged.push(eachUpdated);
      }
      //
    } else {
      // if it is a closing bracket
      if (isAlreadyInObject) {
        // if it's already in object
        if (lastMerged[lastMerged.length - 1] === eachUpdated) {
          // if it's ready to be added
          bracketObj[eachUpdated] += 1;
          total += 1;
          lastMerged.pop();
        } else {
          lastMerged.pop();
        }
      } else {
        lastMerged = [];
      }
    }
  }

  return total;
};

console.log(findCompleteBrackets("{}()[]({})"));
console.log(findCompleteBrackets("{}({]()"));
console.log(findCompleteBrackets("((){)[)}"));
console.log(findCompleteBrackets("({}])()"));
console.log(findCompleteBrackets("({])"));
console.log(findCompleteBrackets("(){)}"));

// {}()[]({}) // 5
// {}({]() // 2
// ((){)[)} // 1
// ({}])() // 2
// ({]) // 0
// (){)} // 1

// praveen@oml.in
