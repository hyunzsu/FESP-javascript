// ex02-15.js 복사 -> 화살표 함수에서 this는 상위 this를 가리킴
var count = 0;
var counter = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가시킨다.
    this.count++; // this = counter
    var visit2 = () => {
      this.count++; // this = counter
    };
    visit2();
  },
};

counter.visit();
counter.visit();
console.log('합계', counter.count);

// 화살표함수에는 this가 없음, this를 보다 상위 레벨에서 찾아씀