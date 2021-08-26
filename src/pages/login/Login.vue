<template>
  <div class="bk-color">
          <form @submit.prevent="doLogin()" class="form-login">
            <div class="card" >
              <div class="card-header text-center" style="background-color: #6b61ff;">
                <h1>Tree Nest</h1>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <input
                    required
                    type="email"
                    v-model="email"
                    class="form-control"
                    placeholder="E-mail"
                  />
                </div>
                <div class="form-group">
                  <input
                    required
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <button class="btn btn-primary btn-block btn-color" :disabled="loading">
                  <template v-if="loading">
                    Logando
                    <i class="fa fa-spinner fa-spin"></i>
                  </template>
                  <template v-else>
                    Sing in
                    <i class="fa fa-sign-in-alt"></i>
                  </template>
                </button>
                <hr>
                sign up
              <router-link to="/register" class="link mt-4">Click here to register</router-link>
              </div>
            </div>
          </form>
        </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    loading: false,
    email: "",
    password: "",
  }),
  methods: {
    async doLogin() {
      this.loading = true;
      const { email, password } = this;
      try {
        const res = await this.$firebase
          .auth()
          .signInWithEmailAndPassword(email, password);

        window.uid = res.user.uid;
        this.$router.push({ name: "home" });
      } catch (err) {
        let message = "";
        switch (err.code) {
          case "auth/user-not-found":
            message = "Não foi possível localizar o usuário.";
            break;
          case "auth/wrong-password":
            message = "Senha inválida";
            break;
          default:
            message = "Não foi possível fazer login, tente novamente";
        }
        this.$root.$emit("Notification::show", {
          message,
          type: "danger",
        });
      }
      this.loading = false;
    },
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (window.uid) {
        vm.$router.push({ name: "home" });
      }
    });
  },
  computed: {
    routerLinks() {
      return this.$router.options.routes.filter((r) => r.name == "signUp");
    },
  },
};
</script>

<style scoped>

h1 {
  font-size: 30pt;
  color: white;
}
.btn-color {
  background-color: #58e1ab;
  border: none;
}
.bk-color {
background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8fa2e7, #85aaeb, #7cb1ee, #74b8f3, #6dbff6, #65c5f9, #5fccfb);}
.form-login {
  height: 100vh;
}
.form-login,
.btn-singUp {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cards {
  width: ;
}
.btn-singUp {
  padding: 10px;
}
.link {
  color: #6b61ff;
}

</style>

