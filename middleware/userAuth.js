// import cookies from 'vue-cookies'
import CryptoJS from 'crypto-js'

export default async function (app) {
  // const wordpressUser = app.isDev ? 'webdev_1' : cookies.get('wordpress_user')
  const wordpressUser = 'webdev_1'
  const hashedWordpressUser = CryptoJS.SHA512(wordpressUser)

  if (!wordpressUser) {
    return app.redirect('/unauthorized')
  } else {
    const user = await app.$axios.get(`/api/auth/user/${ hashedWordpressUser }`).then(result => result.data)

    const {
      _id,
      token,
      role,
      wordpressUser,
      orderForms,
      invoiceAddressTemplates,
      upperTeethTemplates,
      lowerTeethTemplates
    } = user

    const prepareUser = {
      loggedIn: true,
      isAdmin: false,
      user: {
        _id,
        role,
        wordpressUser,
        orderForms,
        invoiceAddressTemplates,
        upperTeethTemplates,
        lowerTeethTemplates
      }
    }

    app.$axios.setHeader('Authorization', `Bearer ${ token }`)
    app.store.commit('auth/setAuth', prepareUser)
  }
}
