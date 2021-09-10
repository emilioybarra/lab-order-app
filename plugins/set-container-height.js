export default ({ app }, inject) => {
  const setContainerHeight = () => {
    const vh = window.innerHeight * 0.01
    document.getElementById('lof').style.setProperty('--vh', `${ vh }px`)
  }

  window.addEventListener('resize', setContainerHeight)
  window.addEventListener('orientationchange', setContainerHeight)

  inject('setContainerHeight', setContainerHeight)
}
