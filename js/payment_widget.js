const home = document.getElementById("home");
home.addEventListener("click", () => {
  sessionStorage.clear();
  window.location.href = "order_set.html";
});

const back = document.getElementById("back");
back.addEventListener("click",()=>{
    window.location.href = `order_${sessionStorage.getItem("bfr")}.html`
});