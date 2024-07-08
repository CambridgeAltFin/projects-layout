<template>
  <v-card>
    <slot name="switcher" />
    <slot />
    <v-list-item :href="`https://${env}ccaf.io/`">
      <v-list-item-title class="list__title"> CCAF Home </v-list-item-title>
    </v-list-item>
    <v-divider />
    <v-list-item :href="`https://${env}ccaf.io/about_ccaf`">
      <v-list-item-title class="list__title"> CCAF About </v-list-item-title>
    </v-list-item>
    <v-divider />
    <v-list-item :href="`https://${env}ccaf.io/contact?topic=cbeci`">
      <v-list-item-title class="list__title"> CCAF Contact </v-list-item-title>
    </v-list-item>
    <v-divider />
    <v-list-item>
      <v-list-item-title class="list__title">
        CCAF Digital Tools:
      </v-list-item-title>
    </v-list-item>
    <div class="chips">
      <v-chip
        class="chips__item"
        v-for="(project, index) in projects"
        :key="project.id"
        :class="{
          'chips__item-active': projectLoc && project.title === projectLoc.title
        }"
        :href="
          !index
            ? undefined
            : `https://${env === 'demo' ? 'demo.' : ''}ccaf.io/${project.link}`
        "
      >
        {{ project.tag || project.title }}
      </v-chip>
    </div>
  </v-card>
</template>

<script>
import {VCard, VListItem, VListItemTitle, VDivider, VChip} from 'vuetify';

export default {
  name: 'MobileMenu',
  components: {
    VCard,
    VListItem,
    VListItemTitle,
    VDivider,
    VChip
  },
  props: {
    env: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    activeProject: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    projects: []
  }),
  computed: {
    projectLoc() {
      const active = this.projects.find((project) => {
        return (
          project.title === this.activeProject ||
          (!!project.tag && project.tag === this.activeProject)
        );
      });

      return active;
    }
  },
  async beforeMount() {
    const {data} = await fetch(`${this.url}/projects`).then((data) => {
      return data.json();
    });
    this.projects = data;
  }
};
</script>

<style lang="scss" scoped>
.list {
  &__title {
    font-family: MyriadProSemiBold, sans-serif;
    height: 66px;
    padding: 24px 8px;
  }
  &__link {
    &-active {
      background-color: #f7f8fa !important;
    }
    a {
      text-decoration: none;
    }
  }
}
.chips {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 0 24px 24px;
  &__item {
    flex: 0 0 auto;
    height: 48px;
    padding: 16px 24px;
    border-radius: 24px;
    background-color: #0f1434 !important;
    color: white !important;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    &-active {
      background: rgba(255, 184, 28, 0.16) !important;
      border: 2px solid #ffb81c !important;
      color: #ffb81c !important;
    }
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>
