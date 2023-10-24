// TODO: hoisting 단원. 함수 선언보다 먼저 사용이 가능한 이유
add();

// 10 + 100의 결과를 출력한다.
function add() {
  let n1 = 10;
  let n2 = 100;
  console.log(n1 + n2);
}

// 전달받은 숫자와 100의 합계를 반환한다.
function add100(n1) {
  return n1 + 100;
}

// 전달받은 두 수의 합계를 반환한다.
function sum(n1, n2) {
  return n1 + n2;
}

// 전달받은 두 수의 합계를 반환한다.
function sum2(n1, n2) {
  return n1 + n2;
}

add();
console.log(add100(20));
console.log(add100(30));
console.log(sum(30, 40));
console.log(sum(40, 50));
console.log(sum2(40, 50));
console.log(sum2(50, 60));