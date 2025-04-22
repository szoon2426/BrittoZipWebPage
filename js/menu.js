document.querySelectorAll('.flip-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      wrapper.classList.toggle('active');
    });
  });