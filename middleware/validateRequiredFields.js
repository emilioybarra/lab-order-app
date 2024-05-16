export default ({ route, redirect, store }) => {
  const hasRequiredField = store.getters['notes/getNonTransparent']() ||
    store.getters['notes/getTrayTrimmed33']() ||
    store.getters['notes/getTransparent']()

  if (!hasRequiredField && /(step-4)/s.test(route.path)) {
    redirect(200, '/start')
  }
}
