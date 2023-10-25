var arr = [10, 20, 30];

// 각 요소의 제곱값으로 구성된 새로운 배열 생성
var arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i] * arr[i]);
}

// ECMA5
var arr2 = [];
arr.forEach(function el() {
  arr2.push(el ** 2);
});

// ECMA6
var arr2 = arr.map(el => el ** 2); // 매개변수 하나면 괄호 생략 가능

// ECMA6 arrow function
var arr2 = [];
arr.forEach((el) => arr2.push(el ** 2));

console.log(arr2);
