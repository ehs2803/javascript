const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let i=0; i < 5; i++) {
    console.log(generateRandom(1, 10));
}

for (let i=0; i < 5; i++) {
    console.log(generateRandom(10, 100));
}
// Math 객체의 random은 무작위의 실수형 값을 반환