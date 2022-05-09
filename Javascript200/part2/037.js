function drawChart(width = 200, height = 400) {
  console.log(`${width} X ${height} 차트를 그립니다.`);
}
drawChart(100);
drawChart();

function drawChart2(width = 200, height = width / 2) {
  console.log(`${width} X ${height} 차트를 그립니다.`);
}
drawChart2(300);
drawChart2();
//arguments 객체와 유사하나 arguments 객체는 함수에 전달되는 모든 전달 인자를 포함하는 반면 나머지 매개변수는 정해지지 않은 나머지를 의미.
// 나머지 매개변수는 arguments 객체와 다르게 매개변수를 작성하는 곳에서 작성하고, 다른 매개변수와의 차이점을 두기 위해 ... 연산자오 함께 사용.