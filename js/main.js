document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById('slidePopup');
    const showBtn = document.getElementById('showSliderBtn');
    const closeBtn = document.getElementById('closeSliderBtn');
    const images = document.querySelectorAll('.slide-img');
    const prev = document.querySelector('.prev-btn');
    const next = document.querySelector('.next-btn');
  
    let slideIndex = 0;
  
    function updateSlide(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }
  
    showBtn.addEventListener('click', () => {
      popup.style.display = 'block';
      updateSlide(slideIndex);
    });
  
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  
    prev.addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + images.length) % images.length;
      updateSlide(slideIndex);
    });
  
    next.addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % images.length;
      updateSlide(slideIndex);
    });
  });