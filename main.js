const love = document.querySelector('.rectangle-love')
const wrapper = document.querySelector('.rectangle-wrapper')
const close = document.querySelector('.close')
love.addEventListener('click', () => {
  if (wrapper.classList.contains('animation')) {
    wrapper.classList.remove('animation')
  } else {
    wrapper.classList.add('animation')
  }
})
close.addEventListener('click', () => {
  wrapper.classList.remove('animation')
})
