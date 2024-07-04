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
      <a title="CCAF.io" :href="`https://${env_project}ccaf.io/`">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ccaf-afea-test.appspot.com/o/logo.webp?alt=media&token=f4da887e-96cf-4325-b67b-5afd938250bf"
          width="179"
          height="52"
          alt="Cambridge Centre for Alternative Finance (CCAF.io)"
        />
      </a>
      <h4
        class="d-none d-sm-flex header__title"
        style="font-family: MyriadProSemiBold !important"
      >
        {{ title }}
      </h4>
      <v-spacer />
      <ul
        class="header-links"
        :class="{'is-long-title': !!project && !project.tag}"
      >
        <li class="header-links__element">
          <a
            class="header-links__element-link"
            title="Home"
            href="https://ccaf.io/"
            >Home
          </a>
        </li>
        <li class="header-links__element">
          <a
            class="header-links__element-link"
            title="Home"
            href="https://ccaf.io/about_ccaf"
            >About CCAF
          </a>
        </li>
        <li class="header-links__element">
          <a
            class="header-links__element-link"
            title="Home"
            :href="`https://ccaf.io/contact?topic=${topic}`"
            >Contact
          </a>
        </li>
      </ul>
      <div
        class="project-selector"
        :class="{'is-title': !!project && !project.tag}"
      >
        <v-select
          v-if="$vuetify.breakpoint.mdAndUp"
          :value="project"
          :items="projects"
          item-value="title"
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
          <template v-slot:selection="{item}">
            <strong class="project-selector__active-element">{{
              item.tag || item.title
            }}</strong>
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
    <v-dialog
      v-if="!$vuetify.breakpoint.mdAndUp"
      :value="dialog"
      @input="(value) => $emit('changeDialog', value)"
      fullscreen
      content-class="header__dialog"
    >
      <template #activator="{on, value}">
        <div class="header__nav-icon" v-on="on">
          <v-icon color="#000">
            {{ value ? 'mdi-close' : 'mdi-menu' }}
          </v-icon>
        </div>
      </template>
      <slot :close="() => (isActive.value = false)" />
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  name: 'layout-header',
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    activeSelect: {
      type: String,
      default: ''
    },
    env: {
      type: String,
      default: ''
    },
    topic: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      env_project: '',
      projects: [],
      project: null
    };
  },
  async beforeMount() {
    const {data} = await fetch(`${this.url}/projects`).then((data) => {
      return data.json();
    });
    this.projects = data;
    console.log(data);
    this.project =
      this.projects.find(
        (project) =>
          project.title === this.activeSelect ||
          (!!project.tag && project.tag === this.activeSelect)
      ) || this.projects[0];
  },
  mounted() {
    this.env_project = this.env === 'demo' ? 'demo.' : '';
  },
  methods: {
    linkTo(projectTitle) {
      const project = this.projects.find(
        (project) => project.title === projectTitle.title
      );
      if (project) {
        window.location.href = `https://${this.env_project}ccaf.io/${project.link}`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  .v-dialog--fullscreen {
    border-radius: 0;
    margin: 0;
    height: calc(100% - 72px);
    position: fixed;
    overflow-y: auto;
    top: 72px;
    left: 0;
  }
}
.header {
  width: 100vw;
  height: 72px;
  z-index: $header-index;
  &__nav-icon {
    position: absolute;
    right: 16px;
  }
  &__title {
    margin-left: 24px;
    font-size: 1.3rem;
    line-height: 1.4rem;
    @media (width < 1230px) {
      margin-left: 11px;
    }
  }
  &__dialog {
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
  &__active-element {
    font-size: 14px;
    font-weight: 600;
  }
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
  .v-select {
    margin-left: 15px;
  }
  &.is-title {
    .project-selector__active-element {
      font-size: 12px;
      font-weight: 600;
    }
    ::v-deep {
      .v-input__slot {
        padding: 5px !important;
      }
      .v-input {
        width: 190px;
        font-size: 12px;
      }
      .v-select {
        margin-left: 5px;
      }
    }
  }
}

.header-links {
  padding: 0;
  margin-left: -30px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  &__element {
    list-style-type: none;

    padding: 2px 2px 2px 6px;
    margin-left: 30px;
    @media (width < 1230px) {
      margin-left: 8px;
    }
  }
  &__element-link {
    font-size: 14px !important;
    line-height: 18px;
    color: #000 !important;
    letter-spacing: 0;
    text-decoration: none;
    transition: 0.33 cubic-bezier(0.25, 0.8, 0.5, 1) text-shadow;
    &:hover {
      text-shadow: -0.2px -0.2px 0 #000, 0.2px 0.2px #000;
    }
  }
  &.is-long-title {
    margin-right: 10px;
    @media (width < 1230px) {
      margin-right: 5px;
    }
  }
  @media (width < 1230px) {
    margin-left: -5px;
  }
  @media (width < 970px) {
    display: none;
  }
}
</style>

<style lang="scss">
.header-overlay {
  .v-overlay__content {
    border-radius: 0;
    margin: 0;
    height: calc(100% - 72px) !important;
    max-height: calc(100% - 72px) !important;
    display: block !important;
    overflow-y: auto !important;
    top: 72px !important;
    position: fixed;
    overflow-y: auto;
    padding-bottom: 40px;
    left: 0;
  }
}
header .v-toolbar__content {
  padding: 4px 75px;

  .v-select {
    display: inline-flex;
    width: 100px;
    margin-left: 30px;
    border-radius: 6px;
  }
  a.logo {
    height: 52px;
    img.logo {
      height: 52px;
    }
  }
  .navigation a {
    text-decoration-line: none !important;
    color: #000000 !important;
    font-size: 15px !important;
    letter-spacing: 0;
    line-height: 18px;
    padding: 2px 8px 2px 16px;
    margin-left: 15px;
    border-left: 2px solid transparent;
    &.active {
      border-left: 2px solid #000000;
      text-shadow: -0.2px -0.2px 0 black, 0.2px 0.2px black;
    }
    &:hover {
      text-shadow: -0.2px -0.2px 0 black, 0.2px 0.2px black;
    }
  }
  .mobile-menu a {
    border-radius: 0 !important;
    background-color: #ffffff !important;
    height: 40px !important;
    text-transform: none !important;
    font-family: 'MyriadProSemiBold', sans-serif;
    &.v-btn--active {
      background-color: black !important;
      color: white !important;
    }
  }
}

@media screen and (width < 1200px) {
  header .v-toolbar__content {
    padding: 4px 24px;
  }
}

@media screen and (max-width: 960px) {
  header .v-toolbar__content {
    padding: 4px 20px;
  }
}
</style>
