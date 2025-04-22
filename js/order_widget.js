// 이전 단계로 이동
// order.js가 먼저 선언되어 steps가 이미 선언되었기에 가능능
document.getElementById("back").addEventListener("click", () => {  
  window.location.href = `order_${steps[steps.indexOf(tmp)-1]}.html`;
});

document.getElementById("shopping_list").addEventListener("click", () => {
  window.location.href = `payment.html`;
});