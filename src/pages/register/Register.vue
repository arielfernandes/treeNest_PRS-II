<template>
  <div class="bk-color">
    <form @submit.prevent="register" class="form-login">
      <div class="card">
        <div class="card-header text-center" style="background-color: #6b61ff;">
          <h1 class="mb-0" style="color: white;">Tree Nest - Register</h1>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="email"
              v-model="email"
              placeholder="e-mail"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              v-model="password"
              placeholder="password"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              v-model="registrationPassword"
              placeholder="password"
              class="form-control"
            />
          </div>
          <button class="btn btn-primary w-100 btn-color" :disabled="loading">
            <template v-if="loading">
              Registrando...
              <i class="fa fa-spinner fa-spin"></i>
            </template>
            <template v-else>
              SignUp
              <i class="fas fa-user-plus"></i>
            </template>
          </button>
          <hr>
              <router-link to="/login" class="link mt-4">Back</router-link>
          </div>
      </div>
    </form>
  </div>
</template>



<script>
export default {
  name: 'Register',
  data: () => {
    return {
      loading: false,
      email: '',
      password: '',
      registrationPassword: ''
    }
  },
  methods: {
    async register () {
      this.loading = true
      const { email, password, registrationPassword } = this
      try {
        if (password === registrationPassword) {
          const res = await this.$firebase.auth()
            .createUserWithEmailAndPassword(email, password)
          window.uid = res.user.uid
          this.$router.push({ name: 'home' })
        } else {
          let message = 'Senhas diferentes, por favor, tente de novo.'
          this.$root.$emit('Notification::show', {
            message,
            type: 'danger'
          })
          this.password = '' // Limpa o input de senha
          this.registrationPassword = '' // Limpa o input de senha
        }
      } catch (err) {
        let message = ''
        switch (err.code) {
          case 'auth/email-already-in-use':
            message = 'O endereço de e-mail já está em uso por outra conta.'
            this.email = '' // Limpa o input de E-mail
            break
          case 'auth/wrong-password':
            message = 'Senha inválida'
            break
          default:
            message = 'Não foi possível criar a conta, tente novamente'
        }
        this.$root.$emit('Notification::show', {
          message,
          type: 'danger'
        })
      }
      this.loading = false
    }
  }
}
</script>
<style  scoped>
.btn-color {
  background-color: #58e1ab;
  border: none;
}
.bk-color {
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8fa2e7, #85aaeb, #7cb1ee, #74b8f3, #6dbff6, #65c5f9, #5fccfb);}
.form-login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1{
    font-size: 18pt;
}
.card {
    width: 20%;
    color: black;
}
.link {
  color: #6b61ff;
  text-decoration: none;
}
.link:hover {
    color: blue;
    text-decoration: underline
}
.link-v {
    display: flex;
    justify-content: center;
    text-align: center;
}
</style>