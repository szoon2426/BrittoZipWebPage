const home = document.getElementById("home");
home.addEventListener("click", () => {
  // 지금까지 선택된 모든 값을 삭제
  sessionStorage.clear();
  window.location.href = "order_set.html";
});

// 세션에 저장된 bfr의 페이지로 전환
const back = document.getElementById("back");
back.addEventListener("click",()=>{
    window.location.href = `order_${sessionStorage.getItem("bfr")}.html`
});