// 메인 이미지 스크롤 등장 효과 (모바일 최적화)
const photos = document.querySelectorAll('.photo-reveal');

function revealPhotos() {
  const triggerBottom = window.innerHeight * 0.88;

  photos.forEach(photo => {
    const photoTop = photo.getBoundingClientRect().top;

    if (photoTop < triggerBottom) {
      photo.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealPhotos);
window.addEventListener('load', revealPhotos);
