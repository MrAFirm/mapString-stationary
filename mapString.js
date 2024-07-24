console.log('Hello & welcome!');
let stationery = ['pen', 'pencil', 'eraser', 'ruler', 'marker', 'scissors', 'stapler', 'notebook', 'paper', 'tape', 'glue', 'pins', 'calculator', 'highlighter'];


function mapString(array) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      if (map[letter]) {
        map[letter].push(i);
      } else {
        map[letter] = [i];
      }
    }
  }
  return map;
}

console.log(stationery);
let stringMap = mapString(stationery);
for (let letter in stringMap) {
  console.log(letter + ':' + stringMap[letter]);
}
