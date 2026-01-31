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
});