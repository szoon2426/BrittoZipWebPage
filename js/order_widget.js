document.getElementById("back").addEventListener("click", () => {  
  window.location.href = `order_${steps[steps.indexOf(tmp)-1]}.html`;
});

document.getElementById("shopping_list").addEventListener("click", () => {
  window.location.href = `payment.html`;
});