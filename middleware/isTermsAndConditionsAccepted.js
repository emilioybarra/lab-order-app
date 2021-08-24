import cookies from 'vue-cookies'

export default ({ app, route, redirect }) => {
  const hasCookie = cookies.isKey('lof__termsAndConditions')

  if (hasCookie) {
    redirect(200, '/start')
  }
}
