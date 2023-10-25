// 구조 분해 할당
var colors = ['yellow', 'green', 'blue'];
var [one, two, three, four] = colors;
console.log(colors[0], colors[1], colors[2]); // 구조분해할당 안했을 때
console.log(one, two, three, four); // 구조분해 할당 했을 때

// React
/* const countState = useState(0)
console.log([countState[0]]);
countState[1](countState[0] + 1) */

// React 구조 분해 할당
/* const [count, setCount] = useState(0)
console.log(count);
setCount(count + 1) */

var kim = { userName: '김철수', userAge: 35 };
console.log(kim.userName, kim.userAge); // 구조분해할당 안했을 때
var { userName, userAge: age } = kim;
console.log(userName, age); // 구조분해할당 했을 때

// 선언된 변수에 적용
// 배열
var first, second;
[first, second] = [100, 200, 300];
console.log(first, second);
// 객체 () 로 감싸줘야 함
({ first, second } = { first: 'orange', second: 'green', third: 'yellow' });
console.log(first, second);

// 기본값 할당(undefined 대체)
var { userName, userAge } = { userName: '이영희', userAge: 25 };
var { userName, userAge = 20 } = { userName: '이영희' }; // 기본값으로 줘서 undefined 안나오게

console.log(userName, userAge);

// 변수명 변경과 기본값 할당
var { userName: accountName = '게스트', userAge: age = 20 } = { userAge: 30 };
console.log(accountName, age);

// 변수값 교환
var a = 100;
var b = 200;
var temp = a;
a = b;
b = temp;
console.log(a, b);

// 변수값 교환(구조 분해 할당)
[a, b] = [b, a]; // [a, b] = [100, 200]
console.log(a, b);

// 복합 객체에서 사용
var userList = [
  {
    name: '김철수',
    age: 30,
    course: {
      name: '멋사 6기',
    },
  },
  {
    name: '이영희',
    age: 35,
    course: {
      name: '멋사 8기',
    },
  },
];

// 이름과 코스명만 출력
for (var el of userList) {
  console.log(el.name, el.course.name);
}

// 구조 분해 할당
for (var {
  name,
  course: { name: courseName },
} of userList) {
  console.log(name, courseName);
}
