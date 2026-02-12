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