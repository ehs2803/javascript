var obj = {};
for (var i = 0; i < 4; i++) {
  obj['key' + i] = i;
}
console.log(obj);

var profile = 'chloe:30';
var person = {
  [profile] : true,
  [profile.split(':')[0]]: profile.split(':')[1]
};
console.log(person);
// 속성 계산명은 속성이름을 정의하는 다른 방법. 대괄호안에 식을 넣거나 변수를 대입해 동적으로 객체 속성들을 생성.