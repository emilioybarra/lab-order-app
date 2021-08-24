import Vue from 'vue'

let handleOutsideClick

Vue.directive('click-outside', {
  bind (el, binding, vnode) {
    handleOutsideClick = (e) => {
      e.stopPropagation()
      const { handler, exclude } = binding.value
      let clickedOnExcludedEl = false
      if (exclude) {
        exclude.forEach((ref) => {
          if (!clickedOnExcludedEl) {
            const excludedEl = vnode.context.$refs[ref]
            clickedOnExcludedEl = excludedEl.contains(e.target)
          }
        })
      }
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        vnode.context[handler]()
      }
    }
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
  },

  unbind () {
    document.removeEventListener('click', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  }
})
