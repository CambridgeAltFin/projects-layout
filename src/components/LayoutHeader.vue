<template>
  <v-app-bar
    id="header"
    class="header noselect"
    color="#FFB71A"
    height="72"
    clipped-right
    clipped-left
    flat
    app
  >
    <v-row align="center" justify="start" class="header__logo">
      <a title="CCAF.io" :href="`https://${env}ccaf.io/`">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ccaf-afea-test.appspot.com/o/logo.webp?alt=media&token=f4da887e-96cf-4325-b67b-5afd938250bf"
          width="179"
          height="52"
          alt="Cambridge Centre for Alternative Finance (CCAF.io)"
        />
      </a>
      <h4
        class="ma-0 ml-8 d-none d-sm-flex"
        style="font-family: MyriadProSemiBold !important"
      >
        {{ title }}
      </h4>
      <v-spacer />
      <div class="project-selector">
        <v-select
          v-if="$vuetify.breakpoint.mdAndUp"
          value="cbnsi"
          :items="projects"
          item-value="id"
          item-text="tag"
          :menu-props="{
            offsetY: true,
            offsetX: true,
            nudgeBottom: '10px',
            nudgeLeft: '355px',
            maxHeight: 500,
            contentClass: 'my-custom-select'
          }"
          background-color="rgba(255, 183, 26, 0.32);"
          color="#333333"
          height="40"
          append-icon="mdi-chevron-down"
          hide-details
          solo
          flat
          @change="linkTo"
        >
          <template v-slot:selection>
            <strong style="font-size: 14px; font-weight: 600">CBNSI</strong>
          </template>
          <template v-slot:item="{item}">
            {{ item.title }}
            <v-spacer />
            <div v-if="item.tag" class="ml-4 chips">
              {{ item.tag }}
            </div>
          </template>
        </v-select>
      </div>
    </v-row>
    <v-dialog v-model="dialog" fullscreen>
      <template #activator="{on}">
        <div class="header__nav-icon hidden-lg-and-up" v-on="on">
          <v-icon color="#000">
            {{ dialog ? 'mdi-close' : 'mdi-menu' }}
          </v-icon>
        </div>
      </template>
      <slot />
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      dialog: false,
      env: '',
      projects: [
        {
          title: 'Alternative Finance Benchmarks',
          id: 'cafb',
          tag: 'CAFB',
          link: 'cafb'
        },
        {
          title: 'Blockchain Network Sustainability Index',
          id: 'cbnsi',
          tag: 'CBNSI',
          link: 'cbnsi'
        },
        {
          title: 'Digital Money Dashboard',
          id: 'dmd',
          tag: 'DMD',
          link: 'cdmd'
        },
        {
          title: 'Fintech Ecosystem Atlas',
          id: 'atlas',
          tag: 'Atlas',
          link: 'atlas'
        },
        {
          title: 'Global Regulatory Innovation Dashboard',
          id: 'grid',
          tag: 'GRID',
          link: 'grid'
        },
        {
          title: 'SupTech Vendor Database',
          id: 'svd',
          link: 'suptechlab/vendor_database'
        },
        {
          title: 'SupTech Solutions Tracker',
          id: 'ssr',
          link: 'suptechlab/solutions_tracker'
        }
      ],
      project: {
        title: 'Cambridge Blockchain Network Sustainability Index',
        id: 'cbnsi',
        tag: 'CBNSI',
        link: 'cbnsi'
      }
    };
  },
  computed: {
    topic() {
      return this.$route.path.includes('ethereum')
        ? 'cbnsi_eth'
        : this.$route.path.includes('cbeci')
        ? 'cbnsi_btc'
        : 'cbnsi';
    },
    title() {
      return this.$route.path.includes('ethereum')
        ? 'Cambridge Blockchain Network Sustainability Index'
        : 'Cambridge Bitcoin Electricity Consumption Index';
    }
  },
  mounted() {
    this.env = process.env.ENV === 'demo' ? 'demo.' : '';
  },
  methods: {
    setDialog(v) {
      this.dialog = v;
    },
    linkTo(project) {
      let link = '';
      switch (project) {
        case 'CBECI':
          link = 'cbeci/cbeci';
          break;
        case 'Benchmarks':
          link = 'cafb';
          break;
        case 'Atlas':
          link = 'atlas';
      }
      window.location.href = `https://${this.env}ccaf.io/${link}`;
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  .v-dialog--fullscreen {
    border-radius: 0;
    margin: 0;
    height: 100%;
    position: fixed;
    overflow-y: auto;
    @include header-top;
    padding-bottom: 40px;
    left: 0;
  }
}
.header {
  width: 100vw;
  @include header-height;
  z-index: $header-index;
  &__nav-icon {
    position: absolute;
    right: 16px;
  }
  &__navigation a {
    text-decoration-line: none !important;
    color: #000000 !important;
    font-size: 15px !important;
    letter-spacing: 0;
    line-height: 18px;
    padding: 2px 8px 2px 16px;
    margin-left: 30px;
    border-left: 2px solid transparent;
    &.active {
      border-left: 2px solid #000000;
      text-shadow: -0.2px -0.2px 0 black, 0.2px 0.2px black;
    }
    &:hover {
      text-shadow: -0.2px -0.2px 0 black, 0.2px 0.2px black;
    }
  }
  &__logo {
    height: 52px;
    width: 179px;
    a {
      height: 52px;
      width: 179px;
    }
  }
}
@media screen and (min-width: 960px) and (max-width: 1366px) {
  .header {
    &__navigation a {
      font-size: 14px !important;
      line-height: 18px;
      padding: 2px 2px 2px 6px;
      margin-left: 8px;
    }
  }
}

.project-selector {
  ::v-deep {
    .v-input {
      width: 100px;
      height: 40px;
      border-radius: 8px;
      background-color: #fccf65 !important;
    }
    .v-text-field.v-text-field--solo .v-input__control {
      min-height: 40px;
      background-color: #fccf65 !important;
    }
    .theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
      background-color: #fccf65 !important;
    }
  }
}
</style>
