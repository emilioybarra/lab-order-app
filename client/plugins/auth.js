import cookies from 'vue-cookies'
import axios from 'axios'
import CryptoJS from 'crypto-js'

export default async function (ctx) {
  console.log(ctx)
  // const wordpressUser = cookies.get('wordpress_user')

  if (ctx.params.id) { return }
  const wordpressUser = ctx.isDev ? 'webdev_1' : cookies.get('wordpress_user')
  const hashedWordpressUser = CryptoJS.SHA512(wordpressUser).toString(CryptoJS.enc.Base64)

  console.log(wordpressUser)
  console.log(hashedWordpressUser)

  if (wordpressUser) {
    const user = await axios.get(`/api/auth/user/${ hashedWordpressUser }`)
      .then((result) => {
        return result.data
      })

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
    console.log(prepareUser)
    ctx.$auth.setUser(prepareUser)
  }
}
