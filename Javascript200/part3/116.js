const testStringify = {
    stringifiedNum: JSON.stringify(13.1),
    stringifiedStr: JSON.stringify('Kiss Carnival'),
    stringifiedBln: JSON.stringify(false),
    stringifiedArr: JSON.stringify([2003, 2017])
};
/*
JSON.stringify(값, 리플레이서, 공백 개수)
첫번째 인자는 json 문자열로 변환할 대상.
두번째 인자 리플레이서는 json 문자열로 변화하기 전에 값을 변경하는 인자. 이때 리플레이서로 콜백함수를 넣거나, 특정 키 정보를 담은 배열을 넣어 값을 변경
세번째 인자 공백 개수는 json 문자열의 들여쓰기 시 공백 개수를 의미. 1부터10까지 지정 가능. null이나 0 또는 음수인 경우 공백을 사용하지 않음.
*/
for (let key in testStringify) {
    console.log(`----------${key}-----------`);
    console.log(typeof testStringify[key]);
    console.log(testStringify[key]);
}

console.log(`------------stringifyObj------------`);
const obj = {
    drama: 'PET',
    season: 2017,
    casting: ['koyuki', 'matsumoto jun'],
    character: ['sumire', 'momo']
};
console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, ['drama', 'season']));
console.log(JSON.stringify(obj, null, 4));
console.log(JSON.stringify(obj, (key, val) => {
    if (key === 'season') return 2003;
    return val;
}, 4));
// json을 문자열로 변환하기 