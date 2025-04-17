const prices = {
  set: { single: 3500, drink: 4200, fry: 6000 },
  single: { beef: 500, chicken: 0, mixed: 0, spicyChicken: 500, cutlet: 1000, tender: 1000 },
  drink: { coke: 0, zerocoke: 0, sprite: 0, beer: 1500, cafri: 2000, budweiser:2500 },
  fry: { frenchfries: 0, onionfries: 0, seaweed: 0 }
};

const map = {
  set: {single : "단품 부리또", drink : "음료세트" , fry : "튀김세트"},
  single: { beef: "소고기", chicken: "닭고기", mixed: '믹스', spicyChicken: '닭갈비', cutlet: '돈가스', tender: '치킨텐더' },
  drink: { coke: '콜라', zerocoke: '제로콜라', sprite: '스프라이트', beer: '맥주', cafri: '카프리', budweiser:'버드와이저' },
  fry: { frenchfries: '감자튀김', onionfries: '양파튀김', seaweed: '김말이튀김' }
}

const steps = ['set', 'single', 'drink', 'fry', 'payment'];

// var price = 0;
// var ment = "";

window.onload= function(){
  if(sessionStorage.getItem("setType") == null){
    window.location.href = "out_of_session.html";  
  }


  let price = 0;
  let ment = "";
  for(const step of steps){ // 단계별 선택한 메뉴 + 가격
    var val = sessionStorage.getItem(`${step}Type`);
    if(val == null){
      ment += '미선택 X ';
    }else{
      ment += map[step][sessionStorage.getItem(`${step}Type`)] + ' X ';
      price += prices[step][sessionStorage.getItem(`${step}Type`)];
    }
    if(sessionStorage.getItem("setType")==step) {break;}
  }
  ment = ment.substring(0,ment.length-3);

  document.querySelector("#menuname").innerText = ment;
  document.querySelector("#price p").innerText = `${price.toLocaleString()}원`;

  document.querySelector("#payment img").src = `메뉴/${sessionStorage.getItem("setType")}.png`;
}

