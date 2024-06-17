/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 객체의 프로토타입 [[Prototype]] => __proto__
const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) {
    //setter
    this.stomach.push(food);
  },
  get eat() {
    //getter
    return this.stomach;
  },
};

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다. `;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger,
};

const 한라산호랑이 = {
  color: 'orange',
  name: '한돌이',
  __proto__: tiger,
};
// animal.setEat('고기');
// 생성자 함수

// 객체를 찍어낼 생성자 함수 만들기
function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.stomach.push(food);
  };
}

const a1 = new Animal();

// 객체를 찍어낼 생성자 함수
function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.patter = '호랑이무늬';
  this.hunt = function (target) {
    return `${target}에게 조용히 접근한다. `;
  };
}

Tiger.bark = function (sound) {
  return sound;
};

// Tiger.prototype = a1;
// Animal로 생성된 객체를 인스턴스에 넣어줘야 함. 생선된 객체의 능력을 가져다 씀.
// 그러니까 함수를 넣으면 안됨. 객체의 능력을 쓰는 거니까.
const 금강산호랑이 = new Tiger('금순이');

const 시베리아호랑이 = Tiger('시순이');

// 함수의 메서드 (함수의 능력)
// call
// apply
// bind

const arr = [1, 2, 3, 4];

function sum(a, b, c) {
  console.log(this);
  return a + b + c;
}

sum.call('hello', 1, 2, 3); // this를 전달함 인수를 개별로 받음 => 함수 실행 o
// sum.apply('hello', 1, 2, 3); // this를 전달함 인수를 배열로 받음 => 함수 실행 o

const b = sum.bind('hello', 1, 2, 3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함

// sum.call(this) // this를 전달함 인수를 개별로 받음 => 함수 실행 o
// sum.apply('hello',1,2,3) // this를 전달함 인수를 배열로 받음 => 함수 실행 o

// const b = sum.bind('hello',1,2,3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함

// first.addEventListener('click',b)

const user = {
  sayHi() {
    function sayBye(a, b, c) {
      console.log(this);
    }
    sayBye.call(this, 1, 2, 3);
  },
};
