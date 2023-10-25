// 전개 연산자
var colors = ['two', 'three', 'four'];
var newColors = ['one', ...colors, 'five'];
console.log(newColors);

var user = { name: '김철수', age: 30 };
var newUser = { ...user, phone: '01012345678', age: user.age + 1 };
console.log(newUser);

// 함수에서 사용
function sum(x, y) {
  console.log(x + y);
}
var numbers = [10, 20];
sum(numbers[0], numbers[1]);
sum(...numbers);

// 배열 결합

// 객체 결합
