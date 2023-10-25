<<<<<<< HEAD
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));
=======
// TODO: hoisting 단원.
function sum(a, b = 0) {
  return a + b;
}
console.log(sum(10, 20));
console.log(sum(30));

// TODO: IIFE pattern
(function(){
  // 구조 분해 할당과 같이 사용
  function sum([x=0, y=0] = []){
    return x + y;
  }

  console.log(sum([1, 2]));
  console.log(sum());
  console.log(sum([]));
  console.log(sum([1]));
})();

(function(){
  function sum({x=0, y=0} = {}){
    return x + y;
  }
  
  console.log(sum());
  console.log(sum({}));
  console.log(sum({x: 4}));
  console.log(sum({x: 5, y: 6}));
})();



>>>>>>> 92a99dc3b086b31f87070bb06927da5ea02f840d
