// 이전 혹은 다음 단계 페이지로 이동하기 위한 선언
const steps = ['set', 'single', 'drink', 'fry', 'payment'];
// 페이지의 tag 클래스를 통해 현재 단계를 index값으로 획득
var tmp = document.querySelector(".tag").id;


window.onload= function(){
  // 뒤로 왔을때 기존 저장된 값이 존재하면 안됨
  // => 현재 페이지의 값을 삭제함
  // 존재하지 않으면 아무런 작동 X
  sessionStorage.removeItem(`${tmp}Type`);

  // 현재 단계가 세트 선택 단계이면 아무 값도 존재해서는 안됨
  if(tmp=="set") sessionStorage.clear();

  // 다음 선택지에서 이전 위치를 알 수 있게 bfr에 현재 위치를 저장
  sessionStorage.setItem("bfr",tmp);
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".select");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // 버튼의 data-set 값을 저장
      const data = button.dataset.set;

      // 선택한 정보를 sessionStorage에 저장
      sessionStorage.setItem(`${tmp}Type`, data);

      // 현재 단계가 최종단계인지 아닌지 판단
      if(sessionStorage.getItem("setType") == tmp) window.location.href = "payment.html";
      else{
        window.location.href = `order_${steps[steps.indexOf(tmp)+1]}.html`;}
    });
  });
});