<template>
  <div class="app-loader" :class="{'app-loader--visible': visible}">
    <v-container>
      <v-row align="center" justify="center" class="flex-column">
        <v-col cols="12">
          <h1 class="app-loader__title">
            {{ title }}
          </h1>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <div class="lds-ring">
            <div /><div /><div /><div />
          </div>
        </v-col>
        <v-col cols="12">
          <p class="app-loader__state">
            LOADING
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    title () {
      return ''
    }
  }
}
</script>

<style scoped lang="scss">
.app-loader {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #F7F8FA;
  transition: opacity 0.3s ease;
  opacity: 0;
  z-index: -10;

  &--visible {
    opacity: 1;
    z-index: 10;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  &__title {
    color: #0E1436;
    font-weight: 600;
    font-size: 21px;
    line-height: 100%;
    margin-bottom: 46px;
    font-family: 'MyriadProSemiBold', sans-serif;
  }

  &__state {
    font-size: 21px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.33em;
    color: #828597;
  }
  &__logo {
    position: fixed;
    bottom: 30px;
  }
}

.lds-ring {
  display: flex;
  justify-content: center;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 4px solid #0E1436;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #0E1436 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
