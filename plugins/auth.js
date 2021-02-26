// import cookies from 'vue-cookies'
import axios from 'axios'
import CryptoJS from 'crypto-js'

export default async function (ctx) {
  if (ctx.params.id) { return }
  // const wordpressUser = ctx.isDev ? 'webdev_1' : cookies.get('wordpress_user')
  const wordpressUser = 'webdev_1'
  const hashedWordpressUser = CryptoJS.SHA512(wordpressUser).toString(CryptoJS.enc.Base64)

  if (wordpressUser) {
    const user = await axios.get(`/api/auth/user/${ hashedWordpressUser }`).then(result => result.data)

    const {
      _id,
      wordpressUser,
      orderForms,
      invoiceAddressTemplates,
      upperTeethTemplates,
      lowerTeethTemplates
    } = user

    const prepareUser = {
      _id,
      wordpressUser,
      orderForms,
      invoiceAddressTemplates,
      upperTeethTemplates,
      lowerTeethTemplates
    }

    ctx.$auth.setUser(prepareUser)
  }
}
