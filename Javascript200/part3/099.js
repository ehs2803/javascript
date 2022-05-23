const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, el) => {
	return acc + el
}, 0);

console.log(result);
/*
reduct는 배열 요소를 순환하면서 정의된 callback 함수에 의해 단일 값으로 누적시킬 수 있다.

배열.reduct(누적된값, 현재요소값, 현재인덱스, 원본배열)=>{
	return 누적값으로 변환되는 값
}, 초기값);
*/