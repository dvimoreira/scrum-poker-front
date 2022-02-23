<template>
  <div id="voting">
    <div id="voting__navigation">
      <div class="columns is-vcentered is-mobile">
        <div class="column is-6">
          <div id="voting__navigation__code">
            <span>Código: <b>{{ $route.params.index }}</b></span>
          </div>
        </div>

        <div class="column is-6">
          <div id="voting__navigation__dropdown">
            <b-dropdown aria-role="list">
              <template #trigger>
                <font-awesome-icon :icon="['fa', 'ellipsis-vertical']" />
              </template>

              <b-dropdown-item aria-role="listitem" @click="finishRound()">
                Finalizar Round
              </b-dropdown-item>
              <b-dropdown-item aria-role="listitem" @click="finishSession()">
                Finalizar Sessão
              </b-dropdown-item>
              <b-dropdown-item aria-role="listitem" @click="aboutDialog()">
                Sobre
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </div>

    <div id="voting__users__voted">
      <ul>
        <li>
          <span>
            <font-awesome-icon class="crown-icon" :icon="['fa', 'crown']" />
            DM
          </span>
        </li>

        <li class="voting__users__voted--active">
          <span>AB</span>
        </li>

        <li v-for="item in 14" :key="item">
          <span>AB</span>
        </li>
      </ul>
    </div>

    <div id="voting__buttons">
      <div class="columns is-vcentered is-mobile">
        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="0"
            type="is-primary"
          >
            <span>0</span>
          </b-radio-button>
        </div>

        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="1"
            type="is-primary"
          >
            <span>1</span>
          </b-radio-button>
        </div>

        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="2"
            type="is-primary"
          >
            <span>2</span>
          </b-radio-button>
        </div>
      </div>

      <div class="columns is-vcentered is-mobile">
        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="3"
            type="is-primary"
          >
            <span>3</span>
          </b-radio-button>
        </div>

        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="4"
            type="is-primary"
          >
            <span>4</span>
          </b-radio-button>
        </div>

        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="6"
            type="is-primary"
          >
            <span>6</span>
          </b-radio-button>
        </div>
      </div>

      <div class="columns is-vcentered is-mobile">
        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="8"
            type="is-primary"
          >
            <span>8</span>
          </b-radio-button>
        </div>

        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="12"
            type="is-primary"
          >
            <span>12</span>
          </b-radio-button>
        </div>

        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="16"
            type="is-primary"
          >
            <span>16</span>
          </b-radio-button>
        </div>
      </div>

      <div class="columns is-vcentered is-mobile">
        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="24"
            type="is-primary"
          >
            <span>24</span>
          </b-radio-button>
        </div>

        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="32"
            type="is-primary"
          >
            <span>32</span>
          </b-radio-button>
        </div>

        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="40"
            type="is-primary"
          >
            <span>40</span>
          </b-radio-button>
        </div>
      </div>

      <div class="columns is-vcentered is-mobile">
        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="infinite"
            type="is-primary"
          >
            <span>
              <font-awesome-icon :icon="['fa', 'infinity']" />
            </span>
          </b-radio-button>
        </div>

        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="doubt"
            type="is-primary"
          >
            <span>
              <font-awesome-icon :icon="['fa', 'question']" />
            </span>
          </b-radio-button>
        </div>

        <div class="column is-4">
          <b-radio-button
            v-model="form.card_type"
            native-value="coffe"
            type="is-primary"
          >
            <span>
              <font-awesome-icon :icon="['fa', 'mug-hot']" />
            </span>
          </b-radio-button>
        </div>
      </div>

      <div v-show="form.card_type" class="columns is-centered is-mobile">
        <div class="column is-half">
          <b-button type="is-danger" size="is-small" expanded @click="form.card_type = null">
            Limpar seleção
          </b-button>
        </div>
      </div>
    </div>

    <!-- RESULT MODAL -->
    <b-modal
      :active="resultModal"
      :can-cancel="false"
      has-modal-card
    >
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            Resultado
          </p>
        </header>

        <section class="modal-card-body">
          <div id="voting__modal__average">
            <ul>
              <li>
                <span>4</span>
                <small>Mais Votado</small>
              </li>

              <li>
                <span>4</span>
                <small>Menos Votado</small>
              </li>

              <li>
                <span>4</span>
                <small>Média</small>
              </li>
            </ul>
          </div>

          <b-field grouped group-multiline>
            <div class="control">
              <b-taglist attached>
                <b-tag size="is-medium" type="is-primary">
                  4
                </b-tag>

                <b-tag type="is-info is-light" size="is-medium">
                  DM
                </b-tag>

                <b-tag type="is-info is-light" size="is-medium">
                  AB
                </b-tag>
              </b-taglist>
            </div>
          </b-field>

          <b-field grouped group-multiline>
            <div class="control">
              <b-taglist attached>
                <b-tag size="is-medium" type="is-primary">
                  <font-awesome-icon :icon="['fa', 'mug-hot']" />
                </b-tag>

                <b-tag type="is-info is-light" size="is-medium">
                  GH
                </b-tag>
              </b-taglist>
            </div>
          </b-field>
        </section>

        <footer class="modal-card-foot">
          <b-button type="is-primary">
            Próximo round
            <font-awesome-icon :icon="['fa', 'arrow-right']" />
          </b-button>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'VotingPage',
  data () {
    return {
      navigationOption: '',
      form: {
        card_type: null
      },
      resultModal: false
    }
  },

  methods: {
    finishRound () {
      //
    },

    finishSession () {
      //
    },

    aboutDialog () {
      this.$buefy.dialog.alert({
        title: 'Sobre',
        message: 'Feito com muito carinho por: <br><b>David Moreira</b> e <b>Douglas Ochner</b>.',
        type: 'is-danger',
        confirmText: 'Fechar'
      })
    }
  }
}
</script>

<style lang="scss">
  #voting {
    #voting__navigation__code {
      span {
        color: #FFFFFF;
        font-size: 1rem;
      }
    }

    #voting__navigation {
      padding: 1rem 2rem;
      #voting__navigation__dropdown {
        text-align: right;
        .dropdown {
          .dropdown-menu {
            right: 0;
            left: inherit;
          }
          .dropdown-trigger {
            color: #FFFFFF;
            cursor: pointer;
            font-size: 1.50rem;
          }
          .dropdown-content { text-align: center; }
        }
      }
    }

    @media (max-width: 991px) {
      #voting__users__voted {
        overflow-x: scroll;
      }
    }

    #voting__users__voted {
      max-width: 100%;
      padding-bottom: 1rem;
      ul {
        margin: 0;
        padding: 0 1rem;
        li {
          display: table-cell;
          vertical-align: middle;
          &.voting__users__voted--active { span { background: #CF000F; } }
          span {
            align-content: center;
            align-items: center;
            background: #34495e;
            border-radius: 4px;
            color: #FFFFFF;
            display: flex;
            flex-direction: column;
            height: 50px;
            justify-content: center;
            margin-right: 0.313rem;
            text-align: center;
            width: 50px;
            .crown-icon {
              color: #ffbf1f;
              display: block;
              margin: 0 auto;
            }
          }
        }
      }
    }

    #voting__buttons {
      padding: 2rem 2.5rem 0 2.5rem;
      .b-radio {
        background: #3c0596;
        border: 0;
        color: #FFFFFF;
        font-size: 1.75rem;
        height: 4rem;
        &.is-selected { background: #ffbf1f; }
      }
    }

    .modal-card {
      .modal-card-head {
        .modal-card-title {
          font-size: 1rem;
          font-weight: bold;
          text-transform: uppercase;
        }
      }

      .modal-card-body {
        #voting__modal__average {
          text-align: center;
          ul {
            border-bottom: 1px solid #333333;
            margin: 0 0 2rem 0;
            padding: 0;
            li {
              border-right: 1px solid #333333;
              display: inline-block;
              font-size: 0.875rem;
              padding: 0 1rem;
              &:last-child { border: none; }
              small {
                display: block;
                font-size: 0.75rem;
              }
            }
          }
        }
      }

      .modal-card-foot {
        display: block;
        text-align: center;
      }
    }
  }
</style>
