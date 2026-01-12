document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.querySelector('.scroll-container');
  const video = document.querySelector('video');
  const scrollSpeed = 50;
  
  // Обробка колесика - горизонтальний скрол
  document.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    // Крутим вгору = скролим вправо, крутим вниз = скролим вліво
    if (scrollContainer) {
      scrollContainer.scrollLeft += (e.deltaY > 0 ? scrollSpeed : -scrollSpeed);
    }
  }, { passive: false });
  
  // Обробка клік на відео - пауза/відтворення
  if (video) {
    video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  }
});
