//이메일 도메인 선택시 input 입력창에 해당 도메인 자동 입력 기능
//HTML에서 이메일 도메인 select 박스와 입력창 가져옴
const emailSelect = document.querySelector(".email_select");
const inputEmailDomain = document.querySelector(".input_email_domain");

//값이 변경되었을 때 실행
emailSelect.addEventListener('change', function (){
  const domainSelected = emailSelect.value;

  //직접 입력을 고른 경우
  if(domainSelected === "custom"){
      inputEmailDomain.value = ""; //입력창을 비워두기
      inputEmailDomain.readOnly = false; //수정할 수 있게 함
  }
  // 그 외
  else if(domainSelected){
      inputEmailDomain.value = domainSelected; //선택한 도메인을 입력창에 자동으로 입력
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

  //이름을 입력하지 않은 경우
  if (!name.value.trim()) {
    alert("이름을 입력해주세요.");
    name.focus();
    return;
  }

  //연락처를 입력하지 않은 경우
  if (!phone.value.trim()) {
    alert("연락처를 입력해주세요.");
    phone.focus();
    return;
  }

  //이메일 앞부분을 입력하지 않은 경우
  if (!email.value.trim()) {
    alert("이메일 아이디를 입력해주세요.");
    email.focus();
    return;
  }

  //이메일 도메인을 입력하지 않은 경우
  if (!emailDomain.value.trim()) {
    alert("이메일 도메인을 입력해주세요.");
    emailDomain.focus();
    return;
  }

  //제목을 입력하지 않은 경우
  if (!title.value.trim()) {
    alert("제목을 입력해주세요.");
    title.focus();
    return;
  }

  //내용을 입력하지 않은 경우
  if (!content.value.trim()) {
    alert("내용을 입력해주세요.");
    content.focus();
    return;
  }

  alert("문의가 접수되었습니다.");
  window.location.href = "contact.html";
});