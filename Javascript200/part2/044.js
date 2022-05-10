function createCounterClosure() {
	let count = 0;
	return {
		increase: function() {
			count++;
		},
    getCount: function() {
      return count;
    }
	}
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();
console.log('counter 1의 값 : ' + counter1.getCount());
counter2.increase();
console.log('counter 2의 값 : ' + counter2.getCount());
// 위코드에서 conter1과 counter2의 메소드들이 다른 count에 접근하는 것은 다른 렉시컬 환경의 환경 레코드에서 count에 접근하는 것.
// 이러한 현상이 가능한건 클로저 때문...
// 클로저란 함수가 정의될 때 렉시컬 환경을 기억하는 함수를 의미.