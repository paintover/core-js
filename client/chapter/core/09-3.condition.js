/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 10;

switch (a) {
  case 10:
    console.log('10입니다!');
    break;
  case 11:
    console.log('11입니다!');
    break;
  case 12:
    console.log('12입니다!');
    break;

  default:
    console.log('10, 11, 12가 없습니다. ');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LUNCH;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이나 아마도 꿈나라에 있을 것이다.');
    break;
}

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || DAWN) {
  console.log('한밤 중이거나, 새벽이나 아마도 꿈나라에 있을 것이다.');
}

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */

// 1. 변수에 담는다 => propmt를 통해서 숫자를 입력 받는다. (0~6까지)
// const day = prompt('0부터 6까지의 숫자를 입력하세요', '');

// // 2. switch case 문을 사용해서
// switch (+day) {
//   case 0:
//     console.log('일');
//     break;
//   case 1:
//     console.log('월');
//     break;
//   case 2:
//     console.log('화');
//     break;
//   case 3:
//     console.log('수');
//     break;
//   case 4:
//     console.log('목');
//     break;
//   case 5:
//     console.log('금');
//     break;
//   case 6:
//     console.log('토');
//     break;
// }

// 3. 0~6까지의 랜덤수를 받아서

// 함수는 하나의 기능만을 수행하는 것

// Separation of concerns (관심사의 분리)
// 매개변수 parameter

function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay(value) {
  switch (value) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

function weekend() {
  // getDay 실행해서 요일을 받아옴 일 ~ 월
  // 해당 요일을 가지고 토, 일 => 주말입니다.
  // 평일입니다.

  const today = getDay(getRandom(7));
  //   switch (today) {
  //     case '토':
  //     case '일':
  //       return '주말입니다!';

  //     default:
  //       return '평일입니다!';
  //   }

  // const day = today.includes('토')
  //   ? '토요일'
  //   : today.includes('일')
  //     ? '일요일'
  //     : '평일';
  // return day;

  // 이것도 가능 (변수에 담지 않고, 바로 return으로 반환하는 거.)
  // 애초에 삼항어쩌고는 값을 반환하니까 그걸 바로 return으로 반환.
  return today.includes('토')
    ? '토요일'
    : today.includes('일')
      ? '일요일'
      : '평일';
}

// getDay()
