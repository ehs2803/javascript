const sentence = 'The sun will shine on us again';
console.log(sentence.slice(13));
console.log(sentence.slice(13, 24));
console.log(sentence.slice(0));
console.log(sentence.slice(0, -23));
console.log(sentence.slice(50));
console.log(sentence.slice(7, 2));
// '문자열'.slice(시작인덱스, 종료인덱스)
// slice 메소드는 음수도 가능.