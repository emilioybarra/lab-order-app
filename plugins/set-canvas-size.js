export default ({ app }, inject) => {
  const windowWidth = () => {
    return window.innerWidth
  }

  const teethCanvasSizes = {
    upper: {
      phoneSm: { width: 286, height: 220 },
      phoneLg: { width: 456, height: 350 },
      tablet: { width: 520, height: 400 },
      desktop: { width: 716, height: 550 }
    },
    lower: {
      phoneSm: { width: 286, height: 206 },
      phoneLg: { width: 456, height: 328 },
      tablet: { width: 520, height: 375 },
      desktop: { width: 716, height: 516 }
    }
  }

  const setCanvasSize = (teethImage) => {
    if (windowWidth() < 576) {
      return teethCanvasSizes[teethImage].phoneSm
    }

    if (windowWidth() >= 576 && windowWidth() < 768) {
      return teethCanvasSizes[teethImage].phoneLg
    }

    if (windowWidth() >= 768 && windowWidth() < 1200) {
      return teethCanvasSizes[teethImage].tablet
    }

    if (windowWidth() >= 1200) {
      return teethCanvasSizes[teethImage].desktop
    }
  }

  inject('setCanvasSize', setCanvasSize)
}
