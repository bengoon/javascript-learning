1️⃣ DOM이란?
DOM = Document Object Model
→ HTML을 JavaScript가 이해할 수 있는 객체로 만든 것
html<!-- HTML -->

<h1 id="title">안녕하세요</h1>
↓ 브라우저가 변환 ↓
javascript// JavaScript에서 이렇게 접근 가능!
document.getElementById("title")
비유:

HTML = 집의 설계도
DOM = 실제로 지어진 집
JavaScript = 집을 리모델링하는 사람

2️⃣ getElementById로 요소 찾기
javascript// HTML에서 id="title"인 요소를 찾기
const titleElement = document.getElementById("title");

console.log(titleElement);
// 결과: <h1 id="title">안녕하세요</h1>
핵심 포인트:

document = 전체 HTML 문서
getElementById() = id로 요소 찾기
찾은 요소를 변수에 저장 (재사용 가능!)

⚠️ 주의:

id는 대소문자를 구분해요!
getElementById("Title") ≠ getElementById("title")

3️⃣ textContent로 내용 바꾸기
javascriptconst title = document.getElementById("title");

// 내용 읽기
console.log(title.textContent); // "안녕하세요"

// 내용 바꾸기
title.textContent = "반갑습니다!";
// 화면에 즉시 반영됨!
비교:
javascript// ❌ 이렇게 하면 안 됨
title = "새 내용"; // 요소 자체를 바꾸려고 함

// ✅ 이렇게 해야 함
title.textContent = "새 내용"; // 요소의 텍스트만 바꿈

💻 프로젝트 #2-1: 텍스트 체인저
목표: 버튼 없이 페이지 로딩 시 텍스트가 자동으로 변경되는 프로그램 만들기
Step 1: 폴더 만들기
bash# 터미널 또는 파일 탐색기에서
week-01-hello-javascript/
└── day2-1-dom-basics/
├── index.html
├── script.js
└── README.md
