// // 연습문제 1번 : 배열 요소 합계 구하기
// const numbers = [1, 2, 3, 4, 5];

// // your code here
// let sum = 0;
// for (number of numbers) {
//   sum += number;
// }

// console.log(sum); // 출력: 15

// 연습문제 2번 : 문자열의 각 문자 출력하기
// const str = 'Hello, World!';

// // your code here
// for (string of str) {
//   console.log(string);
// }

// // 연습문제 3번 : 객체의 값들 출력하기
// const person = {
//   name: 'Alice',
//   age: 30,
//   city: 'Wonderland',
// };

// // your code here
// for (value of Object.values(person)) {
//   console.log(value);
// }

// 연습문제 4번 : 배열의 짝수 요소만 출력하기
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // your code here
// for (num of numbers) {
//   if (num % 2 != 0) continue;
//   else console.log(num);
// }

// 연습문제 8번 : 배열의 문자열 길이 출력하기
// const words = ['apple', 'banana', 'cherry'];

// // your code here
// for (fruit of words) {
//   console.log(fruit.length);
// }

// // 연습문제 9번 : 숫자 배열의 제곱 출력하기
// const numbers = [1, 2, 3, 4, 5];

// for (num of numbers) {
//   console.log((num *= num));
// }
// // your code here

// // 연습문제 10번 : 문자열 배열에서 특정 문자 포함 여부 출력하기
// const words = ['apple', 'banana', 'cherry', 'date'];

// for (word of words) {
//   if (word.includes('a')) console.log(true);
//   else console.log(false);
// }

// // your code here

// 연습문제 11번 : 객체 배열의 특정 속성 값 출력하기
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
// ];

// // your code here
// for (user of users) {
//   console.log(user.age);
// }

// 연습문제 12번 : 1부터 n까지의 합 구하기
// const n = 10;

// let sum = 0;
// for (i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log(sum);

// your code here

// forEach 구문 연습
// forEach : 배열의 각 요소에 대해 한 번씩 주어진 함수를 실행합니다.
// 문제1 : 배열의 모든 요소 출력하기
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (number) {
//   console.log(number);
// });

// 문제2 : 배열 요소의 제곱 계산하기
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = [];

// numbers.forEach(function (number) {
//   squaredNumbers.push(number ** 2);
// });

// 출력: [1, 4, 9, 16, 25]

// 문제3 : 문자열 배열 대문자로 변환하기
// const words = ['apple', 'banana', 'cherry'];
// const upperWords = [];

// words.forEach(function (word) {
//   upperWords.push(word.toUpperCase());
// });
// 출력: ['APPLE', 'BANANA', 'CHERRY']

// 문제4 : 배열 요소의 합 계산하기
// const numbers = [10, 20, 30, 40, 50];

// let sum = 0;
// numbers.forEach(function (num) {
//   sum += num;
// });
// 출력: 150

// 문제5 : 배열의 특정 조건을 만족하는 요소 필터링하기
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const even = [];

// numbers.forEach(function (num) {
//   if (num % 2 == 0) even.push(num);
// });
// 출력: [2, 4, 6, 8, 10]

// 문제6 : 객체 배열에서 특정 속성 추출하기
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
// ];
// const personName = [];

// people.forEach(function (person) {
//   personName.push(person.name);
// });

// 출력: ['Alice', 'Bob', 'Charlie']

// map
// 문제1: 배열 요소에 2 곱하기
// const numbers = [1, 2, 3, 4, 5];

// let squaredNum = numbers.map(function (num) {
//   return num ** 2;
// });

// 출력: [2, 4, 6, 8, 10]

// 문제2 : 문자열 배열 소문자로 변환하기
// const words = ['APPLE', 'BANANA', 'CHERRY'];

// const smallWords = words.map(function (word) {
//   return word.toLowerCase();
// });
// 출력: ['apple', 'banana', 'cherry']

// 문제3 : 객체 배열에서 특정 속성 값 추출하기
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
// ];

// let peopleAge = people.map(function (person) {
//   return person.age;
// });
// 출력: [25, 30, 35]

// 문제 4: 배열 요소를 문자열로 변환하기
// const numbers = [1, 2, 3, 4, 5];
// // 출력: ['1', '2', '3', '4', '5']

// let str = numbers.map(function (num) {
//   return '' + num;
// });

// 문제 6 : 문자열 배열의 길이 구하기
// const words = ['apple', 'banana', 'cherry'];
// // 출력: [5, 6, 6]

// let length = words.map(function (word) {
//   return word.length;
// });

// 문제7 : 배열 요소를 객체로 변환하기
// const numbers = [1, 2, 3, 4, 5];
// // 출력: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }]

// const objects = numbers.map(function (num) {
//   return { value: num };
// });
// console.log(objects);

// reduce
// 문제 1: 배열 요소의 합 계산하기
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(function (acc, cur) {
//   return acc + cur;
// }, 0);

// 출력: 15

// 문제2 : 배열 요소의 곱 계산하기
// const numbers = [1, 2, 3, 4, 5];

// const multiple = numbers.reduce(function (acc, cur) {
//   return acc * cur;
// });

// console.log(multiple);
// 출력: 120

// 문제3 : 문자열 배열을 하나의 문자열로 결합하기
// const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
// // 출력: 'Hello world this is JavaScript'

// const sentence = words.reduce(function (acc, cur) {
//   return acc + ' ' + cur;
// }, '');

// console.log(sentence);

// 문제4 : 배열에서 최대값 찾기
// const numbers = [10, 5, 20, 30, 50];
// // 출력: 30
// const maxNum = numbers.reduce(function (acc, cur) {
//   return acc > cur ? acc : cur;
// });

// console.log(maxNum);

// 문제5 : 객체 배열에서 특정 속성의 합 계산하기
// const items = [
//   { name: 'apple', price: 50 },
//   { name: 'banana', price: 30 },
//   { name: 'cherry', price: 20 },
// ];
// // 출력: 100
// const totalPrice = items.reduce(function (acc, cur) {
//   return acc + cur.price;
// }, 0);

// console.log(totalPrice);

// 문제6 : 배열의 중복 요소 제거하기
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// // 출력: [1, 2, 3, 4, 5]
// const uniqueNumbers = numbers.reduce(function (acc, cur) {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);

// console.log(uniqueNumbers);

// 문제7 : 문자열에서 각 문자의 빈도 수 세기
// const str = 'banana';
// // 출력: { b: 1, a: 3, n: 2 }
// const frequency = str.split('').reduce(function (acc, cur) {
//   if (acc[cur]) {
//     acc[cur]++;
//   } else acc[cur] = 1;
//   return acc;
// }, {});

// console.log(frequency);
