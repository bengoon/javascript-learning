// Html 요소 선택
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDiv = document.getElementById("result");
const btnAdd = document.getElementById("btnAdd");
const btnSubtract = document.getElementById("btnSubtract");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");

// 입력값 가져오기
function getInputValues() {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  return { num1, num2 };
}

// 결과 표시 함수
function showResult(result) {
  resultDiv.textContent = `Result: ${result}`;
  resultDiv.classList.remove("error");
}

// 에러 표시 함수
function showError(message) {
  resultDiv.textContent = message;
  resultDiv.classList.add("error");
}

// 5. 입력값 검증 함수
function validdateInputs(num1, num2) {
  if (num1Input.value === "" || num2Input.value === "") {
    showError("두 숫자를 모두 입력해주세요!");
    return false;
  }

  if (isNaN(num1) || isNaN(num2)) {
    showError("유효한 숫자를 입력해주세요!");
    return false;
  }
  return true;
}

// 6. 덧셈 함수
function add() {
  const { num1, num2 } = getInputValues();

  if (!validdateInputs(num1, num2)) {
    return;
  }

  const result = num1 + num2;
  showResult(result);
}

// 7. 뺄셈 함수
function subtract() {
  const { num1, num2 } = getInputValues();
  if (!validdateInputs(num1, num2)) {
    return;
  }

  const result = num1 - num2;
  showResult(result);
}

// 8. 곱셈 함수
function multiply() {
  const { num1, num2 } = getInputValues();
  if (!validdateInputs(num1, num2)) {
    return;
  }

  const result = num1 * num2;
  showResult(result);
}

// 9. 나눗셈 함수
function divide() {
  const { num1, num2 } = getInputValues();
  if (!validdateInputs(num1, num2)) {
    return;
  }
  if (num2 === 0) {
    showError("0으로 나눌 수 없습니다!");
    return;
  }
  const result = num1 / num2;
  showResult(result);
}

// 10. 이벤트리스너 연결
btnAdd.addEventListener("click", add);
btnSubtract.addEventListener("click", subtract);
btnMultiply.addEventListener("click", multiply);
btnDivide.addEventListener("click", divide);
// 11. 엔터키로 계산하기 (보너스)
num1Input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    add();
  }
});
num2Input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    add();
  }
});
