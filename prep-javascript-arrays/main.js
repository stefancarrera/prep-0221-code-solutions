var languagesArray = [
  'html',
  'css',
  'javascript',
  'react',
  'node.js'
];

console.log(languagesArray);
console.log(languagesArray.length);

languagesArray.push('C#', 'php');
console.log(languagesArray);

languagesArray.pop();
console.log(languagesArray);

languagesArray.unshift('C++');
console.log(languagesArray);

languagesArray.shift();
console.log(languagesArray);

var thirdElement = languagesArray[2];
console.log(thirdElement);

var arrayLength = languagesArray.length;
console.log(arrayLength);

var lastItem = languagesArray[arrayLength - 1];
console.log(lastItem);
