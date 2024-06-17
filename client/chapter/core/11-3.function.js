let calcAllMoney = (...rest) => {
  let total = 0;

  // for 문
  // for(let i = 0; i < rest.length; i++){
  //   total += rest[i];
  // }

  // for...of 문
  // for(let value of rest){
  //   total += value;
  // }

  // forEach  => arrow function
  // rest.forEach(function(item){
  //   total += item;
  // })

  // rest.forEach(item => total += item)

  // reduce => arrow function

  // const result = rest.reduce(function(acc,cur){
  //   return acc + cur
  // },0)

  return rest.reduce((acc, cur) => acc + cur, 0);
};

const calc = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);
const result = calcAllMoney(1000, 5000, 4500, 13000);

// 화살표 함수와 this

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */
// pow(numeric: number, powerCount: number): number;
// let pow = (numeric,powerCount)=>{

//   let result = 1;

//   for(let i = 0; i < powerCount; i++){
//     result *= numeric
//   }
//   return result;
// };

// 표현식

// const pow = (numeric,powerCount) => {

//   return Array(powerCount).fill(null).reduce((acc)=>{
//     return acc *= numeric
//   },1)

// }

// const pow = (numeric, powerCount) =>
//   Array(powerCount)
//     .fill(null)
//     .reduce((acc) => (acc *= numeric), 1);

// repeat(text: string, repeatCount: number): string;
// let repeat = (text, repeatCount) => {
//   let result = '';
//   for (let i = 0; i < repeatCount; i++) {
//     result += text;
//   }

//   return result;
// };

// const repeat = (text, repeatCount) =>
//   Array(repeatCount)
//     .fill(null)
//     .reduce((acc) => {
//       return acc + text;
//     }, '');

// 자바스크립트의 함수는 양면의 얼굴 => 생성자(constructor)

function button(text) {
  return text;
}

const a = button('more');
const b = new button('more');

// new String()
// new Number()
// new Object()
// new Array()

// 일반함수
// -constructor 내장 (concise method는 예외. 일반함수처럼 작용하지만
// constructor는 내장하지 않음 / 하지만 this를 잘 찾음)
// - this : 나를 호출한 대상을 this
// 객체의 메서드로 사용이 많이 됨 -> this를 찾기 위해

// 화살표함수
// -constructor 내장 x
// - this : 바인딩하지 않음. (가지지 않음) -> 상위 컨텍스트에서 찾음.
// - 메서드 안의 함수를 작성해야 할 때 // 내 상위 this를 가져오기 때문에.

const user = {
  name: `박새롬`,
  sayHi: function () {
    console.log(this);
  },
  sayHi2: () => {
    console.log(this);
  },
  sayHi3() {
    console.log(this);
  },
};

// user.sayHi() -> sayHi()를 user가 호출했으니까 user가 this

// 객체의 메서드를 정의하는 방법
