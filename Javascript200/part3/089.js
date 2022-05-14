const fruits = ['melon', 'lemon', 'source', 'apple', 'juice'];

fruits.splice(4, 1);
fruits.splice(4, 0, 'grape');
fruits.splice(2, 1, 'mandarin', 'strawberry', 'watermelon');
console.log(fruits);

// 배열.splice(시작인덱스, 삭제할요소의개수, 추가될요소들)
/*
 첫번째 인자 시작인덱스는 배열 요소가 변경될 시작 시점.
 두번째 인자 삭제할 요소의 개수는 시작 인덱스의 위치로부터 삭제하고자 하는 개수만큼 요소 제거. 해당 요소가 제거됨과 동시에 메소드 호출 결과로 값을 반환
 세번째 인자 추가될 요소를 지정하면, 시작 인덱스부터 해당 요소들이 추가.
*/