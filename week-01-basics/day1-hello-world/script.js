// greeting App
console.log("=== Greeting script.js ===");

// 1. 사용자 정보 입력
const userName = prompt("이름을 입력하세요: ");
const userAge = prompt("나이를 입력하세요: ");

// 2. 입력값 검증
if (userName && userAge) {
  // 3. 환영 메시지 생성
  const welcomeMessage = `안녕하세요, ${userName}님! ${userAge}살이시군요!`;

  // 4. 콘솔에 출력
  console.log(welcomeMessage);

  // 5. 알림창에 출력
  alert(welcomeMessage);

  // 6. 추가 정보 출력
  console.log(`입력한 이름: ${userName}`);
  console.log(`입력한 나이는 ${userAge}`);
  console.log(`이름 길이: ${userName.length}글자`);
} else {
  console.log("이름과 나이를 모두 입력해주세요!");
  alert("입력이 취소되었습니다.");
}

console.log("=== Greeting App 종료 ===");

// //1. 콘솔에 메시지 출력
// console.log("JavaScript 파일이 연결되었습니다!");

// //2. 변수 선언
// const greeting = "안녕하세요";
// let count = 0;

// console.log(greeting);
// console.log("카운트: " + count);

// //3. 함수 선언
// function welcome(name) {
//   return `${greeting}, ${name}!`;
// }

// //4. 함수 실행
// console.log(welcome("학습자"));

// //5. 간단한 계산
// function calculate(a, b) {
//   const sum = a + b;
//   const product = a * b;

//   console.log(`${a} + ${b} = ${sum}`);
//   console.log(`${a} * ${b} = ${product}`);
// }

// calculate(5, 3);
