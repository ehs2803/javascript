function promiseForHomework(mustDo) {
  return new Promise((resolve, reject) => {  
    setTimeout(() => {
      console.log('doing homework');
      if(mustDo) {
        resolve({
          result: 'homework-result'
        });
      } else {
        reject(new Error('Too lazy!'));
      }
    }, 3000);
  });
};

const promiseA = promiseForHomework(true);
console.log('promiseA created', promiseA);

const promiseB = promiseForHomework();
console.log('promiseB created');

promiseA.then(v => console.log(v));
promiseB
  .then(v => console.log(v))
  .catch(e => console.error(e));

  /*
ECMAScript 2015에서 비동기 처리하기 위해 Promise 객체를 소개함.
Pormise객체로 언젠가 완료될 일을 나타낸다. 완료되면 하나의 값을 반환하는데 실패하여 정상적인 값 대신 실패의 이유를 반환할 수 있다.

Promise 객체는 다음과 같은 세가지 상태를 가짐.
대기중(Pending) : 아직 결과가 없는 상태이다. 약속을 했지만 아직 약속에 대한 결과가 나오지 않은 상태이다.
이행됨(Fullfilled) : 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태. 이때 결과로 하나의 값이 전달.
거부됨(Rejected) : 비동기 처리가 실패한 상태. 약속이 거부되고 그 결과로 거절된 이유를 전달.

Promise 객체는 두가지 메소드를 가진다.
then(onFullfilled, onReject) : 약속이 완료됐을 때 호출될 함수를 정의. 이때 첫번째 인자로 전달되는 함수는 약속이 성공적으로 이행됐을 때 호출되고 
두번째 인자로 전달된 함수는 거부됐을 때 호출된다. 두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개벼수를 통해 전달된다.
catch(onReject) : 약속이 거부됐을 때 호출될 함수를 등록한다.
  */