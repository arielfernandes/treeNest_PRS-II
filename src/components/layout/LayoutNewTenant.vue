<template>
<div class="w-100 d-flex justify-content-center">
    <button
      @click="showModal = true"
      class="btn btn-lg btn-outline-primary w-75 btn-t" 
    >
      <i class="fa fa-plus"></i>
      Tenant
    </button>

    <form @submit.prevent="submit()">
      <div
        class="modal fade"
        :class="{show: showModal}"
        :style="{display: showModal ? 'block' : 'none'}"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add a new tenant</h5>
              <button
                type="button"
                class="close"
                @click="closeModal()"
              >
                <span>×</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="form-group col-8">
                  <label for="">Name:</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-model="form.name"
                  >
                </div>
                <div class="form-group col-4">
                  <label for="">Value (R$):</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-model="form.value"
                  >
                </div>
                <div class="form-group col-4">
                  <label for="">E-mail:</label>
                  <input
                    required
                    type="email"
                    class="form-control"
                    v-model="form.email"
					placeholder="email@example.com"
                  >
                </div>
                <div class="form-group col-4">
                  <label for="">CPF:</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-model="form.cpf"
					v-mask="['###.###.###-##']"
					placeholder="000.000.000-00"
                  >
                </div>
                <div class="form-group col-4">
                  <label for="">Phone:</label>
                  <input
                    required
                    type="text"
                    class="form-control"
					v-mask="['(##) ####-####', '(##) #####-####']"
					placeholder="(00)0000-0000"
					v-model="form.phone"
                  >
                </div>
              </div>
                <div class="form-group col-4">
                  <label for="">APT:</label>
                  <input
                    required
                    type="number"
                    class="form-control"
                    v-model="form.apt"
                  >
                </div>
				<div class="form-group col-4">
					<label for="">Contract:</label>
					<input
						required
						type="number"
						class="form-control"
						v-model="form.contract" 
						placeholder="Month"
					>
				</div>
				<div class="form-group col-12 flex-column d-flex align-items-center">
					<input
					type="file"
					ref="input"
					class="d-none"
					accept="image/*"
					@change="handleFile($event)"
					>

					<button type="button"
					@click="openFileDialog()"
					class="btn btn-outline-secondary">
						Add File
					</button>

					<div class="mt-2" v-if="form.photo">
						{{ form.photo.name }}
						<button
						type="button"
						@click="form.photo = ''"
						class="btn bagde bagde-light"
						>
						<i class="fa fa-trash text-danger"></i>
						</button>
					</div>
				</div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="closeModal()"
              >
                Close
              </button>
              <button class="btn btn-primary" :disabled="loading">
                <template v-if="loading">
                  <i class="fa fa-spin fa-spinner"></i>
                  Saving...
                </template>
                <template v-else>
                  Save tenant
                </template>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div
      :class="{show: showModal}"
      class="modal-backdrop fade"
      :style="{display: showModal ? 'block' : 'none'}"
    />
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
	export default {
		data: () => ({
			loading: false,
			showModal: false,
			form: {
				name: '',
				cpf: '',
				email: '',
				phone: '',
				apt: '',
				contract: '',
				photo: '',
				value: '',
				
			}
		}),
		directives: {mask},
		computed: {
			fileName() {
				const { photo } = this.form
				if (photo) {
					const split = photo.name.split('.')
					return `${split[0]}-${new Date().getTime()}.${split[1]}`
				}else {
					return ''
				}
			}
		},
		methods: {
			openFileDialog() {
				this.$refs.input.value = null
				this.$refs.input.click()
			},
			handleFile ({ target }) {
				this.form.photo = target.files[0]
			},
		
			async submit() {
				let url = ''
				this.loading = true
				try {
					this.$root.$emit('Spinner::show')
					const ref = this.$firebase.database().ref(window.uid)
					const id = ref.push().key
					
					if (this.form.photo) {
						const snapshot = await this.$firebase.storage()
						.ref(window.uid)
						.child(this.fileName)
						.put(this.form.photo)
						
						url = await snapshot.ref.getDownloadURL()
					}

					const formload = {
						id,
						...this.form,
						photo: url,
						createdAt: new Date().getTime(),
					}
					ref.child(id).set(formload, err => {
						if (err) {
							this.$root.$emit('Notification::show', {
								type: 'danger',
								message: 'Não foi possivel inserir.'
							})
							this.loading = false
						}else {
							this.$root.$emit('Notification::show', {
								type: 'success',
								message: 'Success!!'
							})
							this.closeModal()
							this.loading = false
						}
					})
				} catch (err) {
					this.$root.$emit('Notification::show', {
						type: 'danger',
						message: 'Não foi possivel inserir, tente novamente!'
					})
				} finally {
					this.$root.$emit('Spinner::hide')
					this.loading = false
				}				
			},
			closeModal () {
				this.showModal = false
			}
		}
	}
</script>

<style scoped>
.btn-t {
	margin-top: 20px;
	background-color: #58e1ab;
color: black;
	font-size: 12pt;
border:none;
}

.btn-style {
	border: none;
	color: white;
}
#register, .register{
	display: flex;
	justify-content: center;
    flex-direction: column;
	align-items: center;

}
#register {
	line-height: 1.6;
}
.hr-size {
	max-width: 0 auto;
}
.btn-m {
	margin: 20px;
	margin-bottom: 40px;
}
</style>
