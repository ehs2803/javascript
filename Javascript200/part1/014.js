var store = { snack: 1000, flower: 5000, beverage: 2000 };

for (var item in store) {
  if (!store.hasOwnProperty(item)) continue;

  console.log(item + ' 는 가격이 ' + store[item] + ' 입니다.')
}
// 각 요소의 키 정보가 for in에서 정의한 속성명으로 선언과 동시에 할당