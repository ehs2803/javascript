const timer = {
	run: function() { 
		if (this.t) console.log('이미 실행된 타이머가 있습니다.');

		this.t = setTimeout(function() {
			console.log('1초 뒤에 실행됩니다.')
		}, 1000);
	},
	cancel: function() {
		if (this.t) clearTimeout(this.t);
		this.t = undefined;
	}
};


timer.run();
timer.cancel();
timer.run();

/*
setTimeout은 글로벌 객체에 내장된 메소드. 브라우저에서는 Window전역 객체의 메소드로 정의되고, 서버사이드 노드제이에스 GLOBAL이라 불리는 전역 객체 메소드로 정의되어 있다.
따라서 별도의 객체를 생성하거나 선언하지 않아도 setTimeout 함수 그대로 호출하여 실행할 수 있다.

setTimeout은 두개인자를 받는다. 
첫번째 인자는 일정 시간 후 실행될 함수를 정의.
두번째 인자는 지연 시간으로 ms 단위이다.
*/