if (true) {
  var functionScopeValue = 'global';
  let blockScopeValue = 'local';
}
console.log(functionScopeValue); // global
console.log(blockScopeValue); // error
//ES6에서 let 키워드 나옴. 변수 선언 시 변수의 유효 범위를 블록 범위로 지정 가능