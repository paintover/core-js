/* global gsap */

import {
  tiger,
  delayP,
  getNode,
  changeColor,
  clearContents,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

const ENDPOINT = 'http://localhost:3000/users';

// 1. user 데이터 fetch 해주세요.

// 2. fetch 데이터의 유저 이름만 콘솔 출력

// 3.유저 이름 화면에 렌더링

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  // 로딩 스피너 렌더링
  renderSpinner(userCardInner);

  // 로딩스피너가 점점 투명하게 보임 그리고 완료되면 제거
  try {
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        this._targets[0].remove();
        // getNode('.loadingSpinner').remove()
      },
    });

    const response = await tiger.get(ENDPOINT);

    const data = response.data;

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: 'start',
      },
    });
  } catch {
    console.log('에러가 발생했습니다!');
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const article = button.closest('article');
  const index = article.dataset.index.slice(5);

  tiger.delete(`${ENDPOINT}/${index}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDeleteCard);

const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

function handleCreate() {
  createButton.classList.add('open');
}

function handleCancel(e) {
  e.stopPropagation();
  createButton.classList.remove('open');
}

function handleDone() {
  e.preventDefault();
  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  tiger.post(ENDPOINT, { name, email, website }).then(() => {
    // 1. 팝업 닫기
    createButton.classList.remove('open');
    // 2. 카드 컨텐츠 비우기
    clearContents(userCardInner);
    // 3. 유저카드 렌더링하기
    renderUserList();
  });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
