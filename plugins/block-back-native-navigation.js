document.addEventListener('backbutton', function () {}, false)

const element = document.getElementById('__nuxt')

element.addEventListener('touchstart', (e) => {
  // prevent swipe to navigate gesture
  e.preventDefault()
})
