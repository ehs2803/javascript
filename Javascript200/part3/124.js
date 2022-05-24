const str = "hello";

for (const item of str) {
    console.log(item);
}

const iter = str[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// string 객체는 반복 가능한 객체로써 for---of문을 통해 순회하며 각 요소를 반복 실행할 수 있다.