const album = {
    name: 'LOVE YOURSELF'
};

album.song = 'Euphoria';
album.singer = 'RM';

console.log(album);

Object.seal(album);

album.comment = 'Answer';
album.singer = 'JK';
delete album.name; // 봉인된 속성은 삭제하지 못한다.

console.log(album);
// 객체에 속성 추가 못하게 만들기