const items = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
const seq = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        const value = items[i];
        i++;
        const done = i > items.length;
        return { value, done };
      }
    }
  }
};

for (let s of seq) console.log(s);
const [a, b, c, ...arr] = seq;
console.log('a >>> ', a);
console.log('b >>> ', b);
console.log('c >>> ', c);
console.log('arr >>> ', arr);

/*
자바스크립트에서는 반복 동작에 대한 규약으로 반복 가능한과 반복자를 정의한다.

The Iterable Protocol(반복 가능한 규약) : 반복 가능한 규약은 객체 안의 값들을 반복할 수 있도록, 반복 동작을 정의하는 것을 허용한다.
즉 반복 동작에 대한 정의란 for-loop 처럼 단순 반복 작업이기도 하며, 이와 다르게 어떻게 반복하고, 반복하면서 어떤 동작을 수행하는지 직접 정의하는 것도 해당.
우선 객체가 반복 가능하려면, 객체 내부에 @ @iteraotr 메소드를 구현해야 한다. 구현할때 속성 키는 반드시 symbol.iterator이어야 하고, 속성값은 매개변수가 없는 함수가 대입된다.
그리고 이 함수는 반복자 규약을 따르는 객체를 반환한다.

The Iteraotr Protocol(반복자 규약) : 반복자 규약은 연속된 값을 만드는 방법을 정의한다. 객체가 반복자 규약을 충족하려면, next 메소드를 가지고 있어야 한다.
이때 객체 속성 키는 next()이고, 속성값은 매개변수가 없는 함수로 정의.
여기서 함수는 value, done 속성을 가진 객체를 반환한다. 따라서 반복자의 next 메소드를 호출하면, 속성 키 이름이 value와 done인 객체가 반환된다. 이러한 반복자 규약을 충족하는 객체를 iterator라고 한다.

*/