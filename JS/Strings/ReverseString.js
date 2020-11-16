var reverseString = function(s) {
  let ch = '';
  for (let i = 0; i < Math.floor(s.length/2); i++) {
      ch = s[s.length - 1 - i];
      s[s.length - 1 - i] = s[i];
      s[i] = ch;
  }
  return s;
};

var reverseString2 = function(s) {
  for (let i = 0; i < Math.floor(s.length/2); i++) {
      [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
  return s;
};

console.log(["h","e","l","l","o"]);