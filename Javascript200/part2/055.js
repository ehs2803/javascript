var namespaceA = (function(){
  var privateVariable = '비공개 변수';
  return {
    publicApi: function() {
      console.log(privateVariable + '를 접근할 수 있습니다.');
    }
  }
})();

namespaceA.publicApi();
// EXMAScript 5.x 버전까지는 모듈에 대한 정의를 자바스크립트 표준으로 제공하지 않았다. 그래서 네임스페이스 패턴을 통해 모듈을 정의했다.