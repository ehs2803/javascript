function doJob(name, person) {
  return new Promise((resolve, reject) => {  
    setTimeout(() => {
      if(person.stamina > 50) {        
        person.stamina -= 30;
        resolve({
          result: `${name} success`
        });
      } else {
        reject(new Error(`${name} failed`));
      }
    }, 1000);
  });
};

const harin = { stamina: 100 };

const execute = async function() {
  try {
    let v = await doJob('work', harin);
    console.log(v.result);
    v = await doJob('study', harin);
    console.log(v.result);
    v = await doJob('work', harin);
    console.log(v.result);
    v = await doJob('study', harin);
  } catch (e) {
    console.log(e);
  }
}

execute();
/*
ECMAScript 2017에 소개된 async 함수이다. 함수 안의 awati 구문과 함께 비동기 작업을 제어한다. await 키워드는 반드시 async 함수안에서만 유효

동장방식 : 처음 async 함수가 호출되어 await 키워드가 있는 비동기 작업(promise객체)이 실행되면, 해당 비동기 함수는 이벤트 루프를 통해 비동기 작업을 처리한다.
그동안 async 함수는 이러한 비동기 작업이 완료될 때까지 일시 중지 상태로 비동기 작업(promise객체)의 해결을 기다린다. 이 작업이 완료되면 async함수가 다시 실행되고 함수결과를 반환.

async 함수를 선언하는 방법에는 async 함수 선언문과 표현식이 있다. async 함수는 function 선언 앞에 async 키워드가 붙는다.
*/