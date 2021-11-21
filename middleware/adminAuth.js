import cookies from 'vue-cookies'

export default async ({ $axios, redirect, route, store }) => {
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
    store.commit('auth/setAuth', prepareUser)
    return route.path !== '/admin' ? redirect('/admin') : null
  }

  if (adminToken && route.path === '/admin') { redirect('/admin/order-forms') }

  await $axios.get('/api/auth/admin').then((response) => {
    const admin = response.data
    prepareUser = {
      loggedIn: true,
      isAdmin: true,
      user: { ...admin }
    }

    store.commit('auth/setAuth', prepareUser)
    $axios.setHeader('Authorization', `Bearer ${ admin.token }`)
    return admin
  }).catch((error) => {
    console.error(error)
    cookies.remove('auth_role')
    cookies.remove('auth_token')
    store.commit('auth/setAuth', prepareUser)
    return route.path !== '/admin' ? redirect('/admin') : null
  })
}
