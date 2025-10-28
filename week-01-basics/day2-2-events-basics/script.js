// ===== 1단계: 필요한 요소들 찾기 =====
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("count");
const resetBtn = document.getElementById("resetBtn");

console.log("버튼: ", countBtn);
console.log("숫자 표시: ", countDisplay);

// ===== 2단계: 숫자를 저장할 변수 만들기 =====
let count = 0;
console.log("초기 count: ", count);

// ===== 3단계: 버튼에 이벤트 리스너 등록 =====
countBtn.addEventListener("click", function () {
  console.log("버튼이 클릭됐어요.!");
});

// // ===== 5단계: 화면에 count 표시하기 =====
// countBtn.addEventListener("click", function () {
//   count = count + 1;

//   // 화면에 표시
//   countDisplay.textContent = count;

//   console.log("현재 count: ", count);
// });

// ===== RESET 버튼을 눌러 다시 초기화 =====
resetBtn.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
  console.log("Reset 후 숫자: ", count);
});

// ===== 6단계: 10번까지만 클릭 가능 =====
countBtn.addEventListener("click", function () {
  if (count < 10) {
    count = count + 1;
    countDisplay.textContent = count;
    console.log("현재 수: ", count);
  } else {
    alert("최대 10까지 입니다.");
  }

  if (count % 5 === 0) {
    countDisplay.style.color = "Red";
  } else {
    countDisplay.style.color = "#4CAF50";
  }
});

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", function () {
  if (count < 10) {
    count = count + 1;
    countDisplay.textContent = count;
    console.log("현재 수: ", count);

    countDisplay.classList.add("pulse");

    setTimeout(function () {
      countDisplay.classList.remove("pulse");
    }, 300);
  } else {
    alert("10까지만 입력하세요");
  }
});

decreaseBtn.addEventListener("click", function () {
  if (count > 0) {
    count = count - 1;
    countDisplay.textContent = count;
    console.log("감소 수: ", count);
  } else {
    alert("0이 최소값입니다.");
  }
});
