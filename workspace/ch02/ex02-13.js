function fn(n1, n2) {
  // console.log(n1, n2);
  // 모든 인자값의 합계를 출력
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log('합계', sum);
}

fn();
fn(20);
fn(20, 30);
fn(40, 50, 60);
fn(234, 235, 256, 4546, 4, 453, 4, 5, 343, 5, 4453, 45345);
