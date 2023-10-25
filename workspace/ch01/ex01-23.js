// 함수의 매개변수에 적용 (마지막 매개변수 하나만 사용 가능!)
function fn(a, b, ...args) {
  console.log(a, b, args);
}

fn();
fn(1);
fn(2, 3);
fn(4, 5, 6);
fn(7, 8, 9, 10, 11);

// 구조 분해 할당에서 사용
// 배열
var [first, second, ...args] = [100, 200, 300, 400, 500];
console.log(first, second, args);

// 객체
var user = {
  name: '김철수',
  age: 30,
  phone: 01012345678,
  address: '서울특별시 종로구 종로3길 17',
};

var { name, age, ...args } = user;
console.log(name, age, args);
