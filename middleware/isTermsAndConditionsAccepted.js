import cookies from 'vue-cookies'

export default ({ app, route, redirect }) => {
  const hasCookie = cookies.isKey('lof__termsAndConditions')

  if (!hasCookie && route.path !== '/') {
    redirect(200, '/')
  }

  if (hasCookie && route.path === '/') {
    redirect(200, '/start')
  }
}
