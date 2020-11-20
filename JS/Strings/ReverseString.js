// Reverse string (first split it to array, reverse and than join it to string back) using additional char variable
var reverseString = function(s) {
  if (s === '') return s;
  s = s.split('');
  let ch = '';
  for (let i = 0; i < Math.floor(s.length/2); i++) {
      ch = s[s.length - 1 - i];
      s[s.length - 1 - i] = s[i];
      s[i] = ch;
  }
  return s.join('');
};

// Reverse string (first split it to array, reverse and than join it to string back) using ES6 swipe possibility
var reverseString2 = function(s) {
  if (s === '') return s;
  s = s.split('');
  for (let i = 0; i < Math.floor(s.length/2); i++) {
      [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
  return s.join('');
};

// Reverse each word in the sentence but not the sentence
function reverseSentence(str) {
  if (str === '') return str;
  let sentence = str.split(' ');

  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = reverseString(sentence[i]);
  }

  return sentence.join(' ');
}

// Reverse sentence, but not the words
function reverseSentence1(str) {
  if (str === '') return str;
  let sentence = str.split(' ');

  sentence = sentence.reverse();

  return sentence.join(' ');
}

// console.log(reverseString('hello')); // olleh
// console.log(reverseString2('world')); // dlrow
// console.log(reverseSentence('hello world')); // olleh dlrow
// console.log(reverseSentence1('hello world')); // world hello
