// session에 저장된 변수를 값으로 변환하기 위한 선언
const prices = {
  set: { single: 3500, drink: 4200, fry: 6000 },
  single: { beef: 500, chicken: 0, mix: 0, spicyChicken: 500, cutlet: 1000, tender: 1000 },
  drink: { coke: 0, zerocoke: 0, sprite: 0, beer: 1500, cafri: 2000, budweiser:2500 },
  fry: { frenchfries: 0, onionfries: 0, seaweed: 0 }
};

const map = {
  set: {single : "단품 부리또", drink : "음료세트" , fry : "튀김세트"},
  single: { beef: "소고기", chicken: "닭고기", mix: '믹스', spicyChicken: '닭갈비', cutlet: '돈가스', tender: '치킨텐더' },
  drink: { coke: '콜라', zerocoke: '제로콜라', sprite: '스프라이트', beer: '맥주', cafri: '카프리', budweiser:'버드와이저' },
  fry: { frenchfries: '감자튀김', onionfries: '양파튀김', seaweed: '김말이튀김' }
}

const steps = ['set', 'single', 'drink', 'fry', 'payment'];

// 페이지가 로드됨과 동시에 실행
window.onload= function(){
  // 잘못된 방식으로 접근하거나 세션이 만료됐을때
  if(sessionStorage.getItem("setType") == null){
    window.location.href = "out_of_session.html";  
  }

  let price = 0;
  let ment = "";
  for(const step of steps){ // 단계별 선택한 메뉴 + 가격
    var val = sessionStorage.getItem(`${step}Type`);
    if(val == null){  // 세션에 저장되지 않은 단계
      ment += '미선택 X ';
    }else{            // 세션에 저장된(진행된) 단계
      ment += map[step][sessionStorage.getItem(`${step}Type`)] + ' X ';
      price += prices[step][sessionStorage.getItem(`${step}Type`)];
    }
    // 선택한 세트까지 도달하면 종료
    if(sessionStorage.getItem("setType")==step) {break;}
  }

  // 출력할 문구가 ' X ' 로 끝나기 때문에 마지막은 삭제
  ment = ment.substring(0,ment.length-3);

  // 계산한 값과 문구를 각 id의 텍스트로 삽입
  document.querySelector("#menuname").innerText = ment;
  document.querySelector("#price p").innerText = `총 ${price.toLocaleString()}원`;

  // 선택한 세트의 사진 출력
  document.querySelector("#payment img").src = `메뉴/${sessionStorage.getItem("setType")}.png`;
}

document.getElementById("select").addEventListener("click",()=>{
  alert("결제창으로 이동하는중 ...");
  alert("결제되었습니다!\n메인페이지로 이동합니다.");
  window.location.href = "main.html";
})