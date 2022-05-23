const obj1 = { one: 1, two: 2, three: 3 };
const obj2 = { name: '탄이', age: 5, address: 'Seoul' };
const obj3 = { friends: ['혜림', '현아', '현일', '우림'] };

const newObj1 = Object.assign({}, obj1);
const newObj2 = Object.assign({}, obj1, obj2);
newObj1.four = 4;

console.log(obj1);
console.log(newObj1);
console.log(newObj2);

console.log('\n');

const newObj3 = Object.assign(obj1, obj3);

console.log(obj1);
console.log(newObj1);
console.log(newObj2);
console.log(newObj3);

// Object 객체 메소드 assign은 인자로 대입된 객체들을 하나로 병합
// 첫번째 인자로 대입된 객체를 기준으로 병합.
// 즉 첫번째 객체를 기준으로 다른 객체들이 병합되기 때문에 첫번째 인자는 원본이 수정되어 반환.