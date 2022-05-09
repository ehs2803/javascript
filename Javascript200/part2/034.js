var greeting_expression = function(name) {
	console.log('Hi, ' + name);
}// 함수 표현식

function greeting_declaration(name) {
    console.log('Hi, ' + name);
}// 함수 선언문

greeting_expression('Chloe');
greeting_declaration('Chloe');