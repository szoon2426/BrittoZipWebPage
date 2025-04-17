const steps = ['set', 'single', 'drink', 'fry', 'payment'];
var tmp = document.querySelector(".tag").id;
  
window.onload= function(){
  sessionStorage.removeItem(`${tmp}Type`);
  if(tmp=="set") sessionStorage.clear();
  sessionStorage.setItem("bfr",tmp);
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".select");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const setType = button.dataset.set;

      // 선택한 세트 정보를 sessionStorage에 저장
      sessionStorage.setItem(`${tmp}Type`, setType);

      // 고기 선택 페이지로 이동
      if(sessionStorage.getItem("setType") == tmp) window.location.href = "payment.html";
      else{
        window.location.href = `order_${steps[steps.indexOf(tmp)+1]}.html`;}
    });
  });
});