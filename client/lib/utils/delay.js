import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';
import { insertLast } from '../dom/insert.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(()=>{
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(()=>{
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })
//   })
//  })

const shouldRejected = true;

// const p = new Promise((성공, 실패) => {
//   if (!shouldRejected) {
//     성공('성공!!');
//   } else {
//     실패('실패!');
//   }
// });

// 객체 합성

const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

// const config = Object.assign({},defaultOptions);
// const config = {...defaultOptions};

export function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
    // Object.assign(config,options)
  }

  const { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

// delayP(1000)
//   .then((res) => console.log(res))
//   .then(() => console.log('양정원'))
//   .then(() => console.log('이희승'))
//   .then(() => console.log('박종성'))
//   .then(() => console.log('심재윤'))
//   .then(() => console.log('박성훈'))
//   .then(() => console.log('김선우'))
//   .then(() => console.log('니키'))
//   .then(() => console.log('엔하이픈'));
// async / await

function d() {
  return new Promise((resolve, reject) => {
    resolve('데이터');
  });
}

// async 함수는 무 조 건 Promise object를 반환한다.
// await  2가지 기능 수행
//        1. result 꺼내오기
//        2. 코드 실행 흐름 제어

async function delayA(data) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공!');
    }, 2000);
  });

  // p.then((res) => {
  //   console.log(res);
  // });

  const result = await p;

  console.log(result);
  return;
}

async function 라면끓이기() {
  const a = await delayP({ data: '물' });
  console.log(a);

  const b = await delayP({ data: '스프' });
  console.log(b);

  const c = await delayP({ data: '면' });
  console.log(c);

  const d = await delayP({ data: '그릇' });
  console.log(d);
}

// 엔하이픈 응원법

// async function enhypen() {
//   const one = await delayP({ data: '양정원' });
//   console.log(one);

//   const two = await delayP({ data: '이희승' });
//   console.log(two);

//   const three = await delayP({ data: '박종성' });
//   console.log(three);

//   const four = await delayP({ data: '심재윤' });
//   console.log(four);

//   const five = await delayP({ data: '박성훈' });
//   console.log(five);

//   const six = await delayP({ data: '김선우' });
//   console.log(six);

//   const seven = await delayP({ data: '니키' });
//   console.log(seven);

//   const all = await delayP({ data: '엔하이픈' });
//   console.log(all);
// }

// enhypen();

// 라면끓이기();

// async function getData() {
//   const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/25');

//   console.log(data.sprites.other.showdown['front_default']);

//   insertLast(
//     document.body,
//     `<img src="${data.sprites.other.showdown['front_default']}" alt="" />`
//   );
// }

// getData();
