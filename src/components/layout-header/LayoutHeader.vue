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
        class="ma-0 ml-8 d-none d-sm-flex header__title"
        style="font-family: MyriadPro"
      >
        {{ title }}
      </h4>

      <v-spacer />
      <div class="project-selector">
        <v-select
          v-if="mdAndUp"
          variant="solo"
          class="project-selector__select"
          :class="{'is-long': !!project && !project.tag}"
          :model-value="project"
          :items="projects"
          :loading="!projects.length"
          :menu-props="{
            contentClass: 'project-selector__menu'
          }"
          item-value="title"
          item-title="tag"
          background-color="rgba(255, 183, 26, 0.32);"
          color="#333333"
          height="40"
          menu-icon="mdi-chevron-down"
          hide-details
          flat
          @update:modelValue="linkTo"
        >
          <template #selection="{item}">
            <strong style="font-size: 14px; font-weight: 600">{{
              item.title || item.value
            }}</strong>
          </template>
          <template #item="{item, props}">
            <v-list-item
              v-bind="props"
              :title="item.value"
              :subtitle="item.title || undefined"
            ></v-list-item>
          </template>
        </v-select>
      </div>
    </v-row>
    <v-dialog
      class="header-overlay"
      :scrim="false"
      :model-value="dialog"
      @update:modelValue="(value) => $emit('changeDialog', value)"
      fullscreen
    >
      <template #activator="{props: activatorProps}">
        <v-btn
          v-if="!mdAndUp"
          v-bind="activatorProps"
          flat
          :ripple="false"
          class="dialog-button"
        >
          <v-icon color="#000">
            {{ dialog ? 'mdi-close' : 'mdi-menu' }}
          </v-icon>
        </v-btn>
        <div class="hidden-lg-and-up"></div>
      </template>
      <template v-slot:default="{isActive}">
        <slot :close="() => (isActive.value = false)" />
      </template>
    </v-dialog>
  </v-app-bar>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, ref, onMounted} from 'vue';
import {useDisplay} from 'vuetify';
import type {Project} from './LayoutHeader.type';

const {mdAndUp} = useDisplay();

const props = defineProps({
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
  }
});

defineEmits<{(e: 'changeDialog', value: boolean): void}>();

const projects = ref<Project[]>([]);

const project = ref();

const linkTo = (projectTitle: {title: string; tag: string; link: string}) => {
  const project = projects.value.find(
    (project: {title: string; tag: string; link: string}) => {
      if (typeof projectTitle === 'string') {
        return project.title === projectTitle;
      }
    }
  );

  if (!project) {
    return;
  }
  window.location.href = `https://${props.env}ccaf.io/${project.link}`;
};

onMounted(async () => {
  const {data}: {data: Project[]} = await fetch(
    'https://demo-api.ccaf.io/v1/projects'
  ).then((data) => {
    return data.json();
  });
  projects.value = data;

  project.value =
    projects.value.find(
      (project: Project) =>
        project.title === props.activeSelect ||
        (!!project.tag && project.tag === props.activeSelect)
    ) || projects.value[0];
});
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  @include header-height;
  z-index: $header-index;
  &__title {
    font-size: 1.3rem;
    line-height: 1.4rem;
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
      text-shadow:
        -0.2px -0.2px 0 black,
        0.2px 0.2px black;
    }
    &:hover {
      text-shadow:
        -0.2px -0.2px 0 black,
        0.2px 0.2px black;
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
.dialog-button {
  position: absolute;
  right: 16px;
  padding: 0;
  height: auto;
  width: auto;
  min-width: auto;
  .v-ripple__container {
    display: none;
  }
  .v-btn__overlay {
    opacity: 1;
  }
}
</style>

<style lang="scss">
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
      text-shadow:
        -0.2px -0.2px 0 black,
        0.2px 0.2px black;
    }
    &:hover {
      text-shadow:
        -0.2px -0.2px 0 black,
        0.2px 0.2px black;
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

@media screen and (max-width: 960px) {
  header .v-toolbar__content {
    padding: 4px 20px;
  }
}

.project-selector {
  height: 40px;
  &__select {
    &.is-long {
      width: auto !important;
    }
  }
  .v-input__control {
    width: 100%;
  }
  .v-field {
    background-color: #fccf65;
  }
  .v-field__input {
    height: 40px;
    box-sizing: border-box;
    min-height: auto;
  }
  .v-input {
    width: 100px;
    height: 40px;
    border-radius: 8px;
    background-color: #fccf65 !important;
  }
  .v-field__field {
    height: 40px;
  }
  .v-field__input {
    padding: 8px;
    padding-left: 12px;
  }
  .v-text-field.v-text-field--solo .v-input__control {
    min-height: 40px;
    background-color: #fccf65 !important;
  }
  .theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
    background-color: #fccf65 !important;
  }
}
.project-selector__menu {
  max-height: none !important;

  .v-list-item--active {
    caret-color: #ffb71a !important;
    color: #ffb71a !important;
  }
  .v-list-item__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .v-list-item-subtitle {
      padding: 4.5px 4px;
      margin-left: 16px;
      font-size: 12px;
      opacity: 1;
      line-height: 8px;
      color: #ffb71a;
      border: 1px solid #ffb71a;
      border-radius: 5px;
    }
  }
}
</style>
