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
      socket: {},
      navigationOption: '',
      form: {
        card_type: null
      },
      resultModal: false,
      name: '',
      countdown: 0,
      interval: {}
    }
  },

  mounted () {
    const storedName = localStorage.getItem('name')
    if (storedName) {
      this.enteredName(storedName)
    }

    console.log(this.$store.state.socket)
    if (this.$store.state.socket) {
      this.setupSocketHandlers()
    } else {
      this.socket = this.$nuxtSocket({
        name: 'main',
        query: {
          roomId: this.form.room_code,
          name: this.form.name
        }
      })

      this.$store.commit('SET_SOCKET', this.socket)
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
    },

    resultModalClicked () {
      this.$store.state.socket.emit('show')
    },

    getPlayers () {
      return this.$store.state.players
    },

    performVote (vote) {
      this.$store.state.socket.emit('vote', vote)
    },

    startNewGame () {
      this.$store.state.socket.emit('restart')
    },

    emitName (name) {
      this.$store.state.socket.emit('name', name)
    },

    enteredName (name) {
      this.name = name
      this.emitName(name)
      localStorage.setItem('name', name)
      this.resultModal = false
    },

    playerHasVoted () {
      const players = this.$store.state.players
      if (players.filter(p => p.vote !== null && p.vote !== undefined).length > 0) {
        return true
      }
      return false
    },

    getAverage () {
      const players = this.$store.state.players
      let count = 0
      let total = 0
      for (const player of players) {
        if (player.vote) {
          total += parseInt(player.vote)
          count++
        }
      }

      return (total / count).toFixed(1).replace(/\.0+$/, '')
    },

    getMode () {
      const players = this.$store.state.players
      const scores = {}
      for (const player of players) {
        if (player.vote) {
          if (scores[player.vote]) {
            scores[player.vote] = scores[player.vote] + 1
          } else {
            scores[player.vote] = 1
          }
        }
      }

      let mostSeen = 1
      let mostSeenCard = ''
      for (const key in scores) {
        const value = scores[key]
        if (value > mostSeen) {
          mostSeen = value
          mostSeenCard = key
        }
      }
      if (mostSeen === 1) {
        return 'NA'
      } else {
        return mostSeenCard
      }
    },

    setupSocketHandlers () {
      this.$store.state.socket.on('update', (players) => {
        this.$store.state.players = players
      })
      this.$store.state.socket.on('show', () => {
        this.resultModal = true
        clearInterval(this.interval)
        this.countdown = 3
        this.interval = setInterval(() => {
          this.countdown -= 1
          if (this.countdown === 0) {
            clearInterval(this.interval)
          }
        }, 1000)
      })
      this.$store.state.socket.on('restart', () => {
        this.resultModal = false
      })
      this.$store.state.socket.on('ping', () => {
        this.$store.state.socket.emit('pong')
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
