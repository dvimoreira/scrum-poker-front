<template>
  <div id="identification">
    <div id="identification__logo">
      <img src="../assets/logo.png">
    </div>

    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <div id="identification__form">
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

        <ValidationProvider
          v-slot="{ errors, valid }"
          rules="required"
        >
          <b-field
            label="Código da sala*"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input v-model="form.room_code" placeholder="Informe o código da sala" />
          </b-field>
        </ValidationProvider>

        <b-button
          type="is-primary"
          expanded
          @click="handleSubmit(onSubmit)"
        >
          Entrar na sala
        </b-button>
      </div>
    </ValidationObserver>

    <hr class="identification__line identification__line--opacity">

    <b-button class="identification__ghost--warning" tag="nuxt-link" to="/create-room" type="is-ghost" expanded>
      Criar uma sala
    </b-button>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'IndexPage',
  components: {
    ValidationObserver,
    ValidationProvider
  },

  data () {
    return {
      form: {}
    }
  },

  mounted () {
    this.socket = this.$nuxtSocket({
      name: 'main'
    })
  },

  methods: {
    onSubmit () {
      //
    }
  }
}
</script>

<style lang="scss">
  #identification {
    padding: 4rem 2.5rem 0 2.5rem;
    #identification__logo {
      margin-bottom: 4rem;
      text-align: center;
    }

    #identification__form {
      .field {
        .label {
          color: #FFFFFF;
          text-transform: uppercase;
          font-size: 0.75rem;
        }
      }
    }

    .identification__line {
      height: 0.063rem;
      &.identification__line--opacity { opacity: 0.3; }
    }

    .identification__ghost--warning {
      color: #ffbf1f;
    }
  }
</style>
