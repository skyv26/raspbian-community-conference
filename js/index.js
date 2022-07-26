const hamburgurIcon = document.querySelector('.mobile-header--hamburgur_icon');

hamburgurIcon.addEventListener('click', function menuHandler() {
  this.parentNode.classList.toggle('active');
});