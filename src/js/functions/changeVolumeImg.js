export const changeVolumeImg = (optClass, srcImg) => {
  let button = document.querySelector(optClass);
  button.addEventListener('click', () => {
  document.querySelector('.volume__option--active').classList.remove('volume__option--active');
  button.classList.add('volume__option--active');
  document.querySelector('.volume__img').src = srcImg;
  });
}
