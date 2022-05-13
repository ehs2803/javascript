const sentence = 'This will be the end of Wakanda';
console.log(sentence.substring(13));
console.log(sentence.substring(13, 20));
console.log(sentence.substring(0));
console.log(sentence.substring(0, -20));
console.log(sentence.substring(50));
console.log(sentence.substring(20, 13));
// '문자열'.substring(시작인덱스, 종료인덱스)
// substring메소드는 음수 불가능 