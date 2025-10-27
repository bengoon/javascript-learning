// ===== 1단계: h1 요소 찾기 =====
const mainTitle = document.getElementById("mainTitle");

// ===== 2단계: 내용 확인(콘솔 출력) =====
console.log(mainTitle.textContent);

// ===== 3단계: 내용 바꾸기 =====
mainTitle.textContent = "JavaScript가 너무 재밌어요!";

// ===== 4단계: p 요소도 바꾸기 =====
const description = document.getElementById("description");
description.textContent = "DOM 조작 성공!";

// ===== 5단계: 결과 확인 (콘솔 출력) =====
console.log("바뀐내용", mainTitle.textContent);

const subtiele = document.getElementById("subtitle");
subtiele.textContent = "DOM 조작이 정말 재미있어요!";

const info = document.getElementById("info");
info.textContent = "JavaScript로 웹 페이지를 동적으로 변경할 수 있어요!";

const fotter = document.getElementById("footer");
fotter.textContent = "모든 권리 보유 © 2025";

// 자기 소개서
document.getElementById("name").textContent = "이름: 홍길동";
document.getElementById("age").textContent = "나이: 25세";
document.getElementById("city").textContent = "도시: 서울";
document.getElementById("hobby").textContent = "취미: 코딩";
