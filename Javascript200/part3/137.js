let count = 0;

const timer = setInterval(() => {
	console.log(`${count++} 번째 함수가 실행됩니다.`);
}, 1000);

clearInterval(timer);
/*
setInterval도 setTimeout과 동일하게 글로벌 객체에 내장됨.
인자로 callback 함수와 지연시간을 받는다.
지연 시간을 두고 일정한 간격으로 callback 함수가 계속 실행.

setInterval 메소드를 실행하면 결과값으로 id 값을 반환한다. id를 clearInterval 메소드 인자에 넣으면, 해당 id의 타이머 작업을 취소할 수 있다.
*/