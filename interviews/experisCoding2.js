//write a function to process the back characters ‘<’ in a string. For example: “hell<<o” => “heo”; “<w<orld<<” => “or”; “abc<<<<<” => “”
const eraseCharacter = (str) => {
  const returnArray = [];
  str.split("").forEach((each) => {
    const isCharacterDelete = each === "<";
    if (!isCharacterDelete) {
      returnArray.push(each);
    } else {
      returnArray.pop();
    }
  });
  return returnArray.join("");
};

console.log(eraseCharacter("hell<<o"));
console.log(eraseCharacter("<w<orld<<"));
console.log(eraseCharacter("abc<<<<<"));
