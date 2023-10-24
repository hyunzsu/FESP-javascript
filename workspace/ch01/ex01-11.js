var arr = [300, 400];
arr[2] = 500;
arr.unshift(200);
arr.unshift(100);

console.log(arr);

// 배열의 모든 요소 출력(for)
console.log('for');
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// 배열의 모든 요소 출력(for-in)
console.log('for-in');
for (var i in arr) {
  console.log(i, arr[i]);
}

// 배열의 모든 요소 출력(for-of) -> 요소만 출력
console.log('for-of');
for (const el of arr) {
  console.log(el);
}

// 배열의 모든 요소 출력(forEach())
console.log('forEach()');
arr.forEach((el, i) => console.log(i, el));