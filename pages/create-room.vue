<template>
  <div id="create-room">
    <div id="create-room__logo">
      <img src="../assets/logo.png">
    </div>

    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <div id="create-room__form">
        <ValidationProvider
          v-slot="{ errors, valid }"
          rules="required"
        >
          <b-field
            label="Seu nome*"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input v-model="form.name" placeholder="Informe seu nome" />
          </b-field>
        </ValidationProvider>

        <b-field label="Nome do quarto">
          <b-input v-model="form.room_name" placeholder="(opcional)" />
        </b-field>

        <b-button
          type="is-primary"
          expanded
          @click="handleSubmit(onSubmit)"
        >
          Criar na sala
        </b-button>
      </div>
    </ValidationObserver>

    <hr class="create-room__line create-room__line--opacity">

    <b-button class="create-room__ghost--warning" tag="nuxt-link" to="/" type="is-ghost" expanded>
      Entrar em um sala
    </b-button>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'CreateRoomPage',
  components: {
    ValidationObserver,
    ValidationProvider
  },

  data () {
    return {
      form: {}
    }
  },

  methods: {
    onSubmit () {
      //
    }
  }
}
</script>

<style lang="scss">
  #create-room {
    padding: 4rem 2.5rem 0 2.5rem;
    #create-room__logo {
      margin-bottom: 4rem;
      text-align: center;
    }

    #create-room__form {
      .field {
        .label {
          color: #FFFFFF;
          text-transform: uppercase;
          font-size: 0.75rem;
        }
      }
    }

    .create-room__line {
      height: 0.063rem;
      &.create-room__line--opacity { opacity: 0.3; }
    }

    .create-room__ghost--warning {
      color: #ffbf1f;
    }
  }
</style>
