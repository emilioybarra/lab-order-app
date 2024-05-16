import cookies from 'vue-cookies'

export const navigationBackController = (route) => {
  if (route.path === '/start') {
    cookies.remove('lof__termsAndConditions')
    return '/'
  }
  if (route.path === '/sent-forms') { return '/start' }
  if (route.path === '/steps/step-1') { return '/start' }
  if (route.path === '/steps/step-2') { return '/steps/step-1' }
  if (route.path === '/steps/step-3') { return '/steps/step-2' }
  if (route.path === '/steps/step-4') { return '/steps/step-3' }
  if (route.path === '/templates') {
    if (route.query.template === 'invoice-address') { return '/steps/step-1' }
    if (route.query.template === 'upper-teeth') { return '/steps/step-2' }
    if (route.query.template === 'lower-teeth') { return '/steps/step-2' }
    if (route.query.template === 'upper-archwires') { return '/steps/step-3' }
    if (route.query.template === 'lower-archwires') { return '/steps/step-3' }
  }
}
