export default ({ app }, inject) => {
  const generateRandomKey = () => {
    return Math.floor(Math.random() * 8999) + 1000
  }

  inject('generateRandomKey', generateRandomKey)
}
