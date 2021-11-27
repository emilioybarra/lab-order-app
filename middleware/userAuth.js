// import cookies from 'vue-cookies'
import CryptoJS from 'crypto-js'

export default async ({ $axios, redirect, store }) => {
  // const wordpressUser = cookies.get('wordpress_user')
  const wordpressUser = 'webdev_1'
  const hashedWordpressUser = CryptoJS.SHA512(wordpressUser)

  if (!wordpressUser) {
    return redirect('/unauthorized')
  } else {
    const user = await $axios.get(`/api/auth/user/${ hashedWordpressUser }`).then(result => result.data)

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

    $axios.setToken(token, 'Bearer')
    store.commit('auth/setAuth', prepareUser)
  }
}
