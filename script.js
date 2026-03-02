document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterClass = this.getAttribute('data-class');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      projects.forEach(project => {
        const projectClass = project.getAttribute('data-class');
        
        if (filterClass === 'all' || projectClass === filterClass) {
          project.classList.remove('hidden');
        } else {
          project.classList.add('hidden');
        }
      });
    });
  });

  const slideshows = document.querySelectorAll('.slideshow');

  slideshows.forEach(slideshow => {
    const video = slideshow.querySelector('video');

    if (video) {
      video.addEventListener('ended', () => {
        video.style.opacity = '0';
        video.style.zIndex = '0';
        
        slideshow.classList.add('video-ended');
      });
    }
  });

});

document.querySelectorAll('.video-last').forEach(slideshow => {
  const images = slideshow.querySelectorAll('img');
  const video = slideshow.querySelector('video');

  if (!video || images.length === 0) return;

  let currentIndex = 0;

  images.forEach((img, index) => {
    img.style.opacity = index === 0 ? '1' : '0';
    img.style.position = 'absolute';
  });

  function showNextImage() {
    images[currentIndex].style.opacity = '0';
    currentIndex++;

    if (currentIndex < images.length) {
      images[currentIndex].style.opacity = '1';
      setTimeout(showNextImage, 2000);
    } else {
      startVideo();
    }
  }

  function startVideo() {
    video.style.opacity = '1';
    video.style.pointerEvents = 'auto';
    video.style.position = 'relative';
    video.play();
  }

  setTimeout(showNextImage, 2000);
});