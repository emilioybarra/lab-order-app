<template>
  <page>
    <template #headline>
      {{ $t('common.titles.login') }}
    </template>
    <template #body>
      <div class="d-flex justify-content-center position-relative">
        <card class="d-flex align-self-center col-12 col-md-8 col-lg-6 h-auto">
          <form @submit.prevent="login">
            <input-field
              id="username"
              v-model="username"
              :label="$t('common.labels.username')"
              name="username"
              required
            />
            <input-field
              id="password"
              v-model="password"
              :label="$t('common.labels.password')"
              name="password"
              required
              type="password"
            />
            <b-form-text v-if="errorMessage" text-variant="danger" class="my-3" v-html="$t('common.notifications.errorLogin')" />
            <b-button-toolbar class="d-flex mb-3 mt-5 justify-content-center">
              <b-button class="lof-button w-25" variant="primary" type="submit">
                {{ $t('common.buttons.login') }}
              </b-button>
            </b-button-toolbar>
          </form>
        </card>
      </div>
    </template>
  </page>
</template>

<script>
  export default {
    name: 'login',
    layout: 'admin',
    middleware: 'adminAuth',

    data () {
      return {
        username: '',
        password: '',
        errorMessage: false
      }
    },

    methods: {
      async login () {
        this.errorMessage = false
        const loginData = {
          username: this.username,
          password: this.password
        }

        await this.$store.dispatch('auth/login', loginData).then((response) => {
          if (response.success) {
            this.$router.push('/admin/order-forms')
          } else {
            this.errorMessage = true
          }
        })
      }
    }
  }
</script>
