import cookies from 'vue-cookies'

export default async function (app) {
  const adminToken = cookies.get('auth_token')
  const isAdmin = cookies.get('auth_role') === 'admin'
  let prepareUser = {
    loggedIn: false,
    isAdmin: false,
    user: {}
  }

  if (!adminToken || !isAdmin) {
    cookies.remove('auth_role')
    cookies.remove('auth_token')
    app.store.commit('auth/setAuth', prepareUser)
    return app.route.path !== '/admin' ? app.redirect('/admin') : null
  }

  if (adminToken && app.route.path === '/admin') { app.redirect('/admin/order-forms') }

  await app.$axios.get('/api/auth/admin').then((response) => {
    const admin = response.data
    prepareUser = {
      loggedIn: true,
      isAdmin: true,
      user: { ...admin }
    }

    app.store.commit('auth/setAuth', prepareUser)
    app.$axios.setHeader('Authorization', `Bearer ${ admin.token }`)
    return admin
  }).catch((error) => {
    console.error(error)
    cookies.remove('auth_role')
    cookies.remove('auth_token')
    app.store.commit('auth/setAuth', prepareUser)
    return app.route.path !== '/admin' ? app.redirect('/admin') : null
  })
}
