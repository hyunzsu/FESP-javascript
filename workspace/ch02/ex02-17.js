// ex02-14.js 복사
var name = 'global';
function returnName() {
  return this.name;
}

// 일반적인 함수로 호출(함수명())
console.log(returnName());

// 객체의 메소드로 호출(객체.메소드명())
var kim = new Object();
kim.name = '김철수';
kim.age = 30;
kim.getName = returnName;

var lee = {
  name: '이영희',
  age: 40,
  getName: returnName,
};

// 객체를 생성해서 반환하는 함수 (생성자)
function person() {
  
}

console.log(kim.age, kim.getName());
console.log(lee.age, lee.getName());

console.log(kim.getName(), kim.getName.call(window)); // 내부의 this는 kim이 됨, call 메서드로 this 가스라이팅 시킴
console.log(lee.getName(), lee.getName.apply(kim)); // 내부의 this는 lee가 됨, , apply 메서드로 this 가스라이팅 시킴
console.log(returnName(), returnName.call(lee)); // 그냥 호출하면 window, 하지만 위에 전역변수 있으니 global

// call(), apply() -> 내가 원하는 this를 넘겨 줄 수 있음