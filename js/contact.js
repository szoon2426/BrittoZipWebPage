//이메일 도메인 선택시 input 입력창에 해당 도메인 입력 기능
const emailSelect = document.querySelector(".email_select");
const inputEmailDomain = document.querySelector(".input_email_domain");

emailSelect.addEventListener('change', function (){
  const domainSelected = emailSelect.value;
  if(domainSelected === "custom"){
      inputEmailDomain.value = "";
      inputEmailDomain.readOnly = false; //수정할 수 있게 함
  }
  else if(domainSelected){
      inputEmailDomain.value = domainSelected;
      inputEmailDomain.readOnly = true; //수정 못하게 함
  }
});


document.querySelector(".submit_button_design").addEventListener("click",()=>{
  const name = document.querySelector(".input_name");
  const phone = document.querySelector(".input_phoneNum");
  const email = document.querySelector(".input_email");
  const emailDomain = document.querySelector(".input_email_domain");
  const title = document.querySelector(".input_title");
  const content = document.querySelector(".input_content");

  if (!name.value.trim()) {
    alert("이름을 입력해주세요.");
    name.focus();
    return;
  }

  if (!phone.value.trim()) {
    alert("연락처를 입력해주세요.");
    phone.focus();
    return;
  }

  if (!email.value.trim()) {
    alert("이메일 아이디를 입력해주세요.");
    email.focus();
    return;
  }

  if (!emailDomain.value.trim()) {
    alert("이메일 도메인을 입력해주세요.");
    emailDomain.focus();
    return;
  }

  if (!title.value.trim()) {
    alert("제목을 입력해주세요.");
    title.focus();
    return;
  }

  if (!content.value.trim()) {
    alert("내용을 입력해주세요.");
    content.focus();
    return;
  }

  alert("문의가 접수되었습니다.");
  window.location.href = "contact.html";
});