// 계산기 함수들
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "0으로 나눌 수 없습니다!";
  }
  return a / b;
}

// 버튼 클릭 시 실행되는 함수
function calculate(operation) {
  // 입력값 가져오기
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  // 결과 계산
  let result;
  if (operation === "add") {
    result = add(num1, num2);
  } else if (operation === "subtract") {
    result = subtract(num1, num2);
  } else if (operation === "multiply") {
    result = multiply(num1, num2);
  } else if (operation === "divide") {
    result = divide(num1, num2);
  }

  // 결과 표시
  document.getElementById("result").textContent = "결과: " + result;
}

console.log("계산기 준비 완료!");
