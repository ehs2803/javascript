const sentence = 'Wakanda Forever!!!';
console.log(sentence.substr(8));
console.log(sentence.substr(8, 7));
console.log(sentence.substr(0));
console.log(sentence.substr(-10));
console.log(sentence.substr(0, -3));
console.log(sentence.substr(30));
console.log(sentence.substr(0, 30));
// '문자열'.substr(시작인덱스, 길이)
// 첫번째 인자에 음수를 넣으면 문자열의 뒤에서부터 위치를 결정.
// 두번째 인자에 음수를 넣으면 정상적으로 수행 x