export default ({ app }, inject) => {
  const validateSelectedLanguage = (...langs) => {
    return langs.includes(app.i18n.locale)
  }

  inject('validateSelectedLanguage', validateSelectedLanguage)
}
