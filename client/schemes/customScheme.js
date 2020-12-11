import axios from 'axios'
import CryptoJS from 'crypto-js'
import cookies from 'vue-cookies'
import LocalScheme from '@nuxtjs/auth/lib/schemes/local'

export default class CustomScheme extends LocalScheme {
  // Override `fetchUser` method of `local` scheme
  async fetchUser () {
    // const wordpressUser = cookies.keys().find(cookie => /(wordpress_logged_in_)(.*)/.test(cookie))
    const wordpressUser = cookies.get('wordpress_user')
    const hashedWordpressUser = CryptoJS.SHA512(wordpressUser).toString(CryptoJS.enc.Base64)

    console.log(hashedWordpressUser)

    if (wordpressUser) {
      const user = await axios.get(`/api/user/${ hashedWordpressUser }`)
        .then((result) => {
          return result.data
        })

      const {
        _id,
        userWordpressId,
        userWordpressUsername,
        orderForms,
        invoiceAddressTemplates,
        upperTeethFormTemplates,
        lowerTeethFormTemplates
      } = user
      const prepareUser = {
        _id,
        userWordpressId,
        userWordpressUsername,
        orderForms,
        invoiceAddressTemplates,
        upperTeethFormTemplates,
        lowerTeethFormTemplates
      }

      this.$auth.setUser(prepareUser)
    } else {
      this.$auth.setUser({ name: 'emilio' })
    }
  }
}
