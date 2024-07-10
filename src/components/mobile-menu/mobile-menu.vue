<template>
  <v-card>
    <slot name="switcher" />
    <slot />
    <v-list-item :href="`https://${props.env === 'demo' || props.env === 'develop' ? 'demo.' : ''}ccaf.io/`">
      <v-list-item-title class="list__title"> CCAF Home </v-list-item-title>
    </v-list-item>
    <v-divider />
    <v-list-item :href="`https://${props.env === 'demo' || props.env === 'develop' ? 'demo.' : ''}ccaf.io/about_ccaf`">
      <v-list-item-title class="list__title"> CCAF About </v-list-item-title>
    </v-list-item>
    <v-divider />
    <v-list-item :href="`https://${props.env === 'demo' || props.env === 'develop' ? 'demo.' : ''}ccaf.io/contact?topic=cbeci`">
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
        :class="{'chips__item-active': !index}"
        :href="!index ? undefined : `https://${props.env === 'demo' || props.env === 'develop' ? 'demo.' : ''}ccaf.io/${project.link}`"
      >
        {{ project.tag || project.title }}
      </v-chip>
      <v-chip class="chips__item"> Atlas </v-chip>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import {defineProps, computed, PropType} from 'vue';
import {ActiveProject} from './mobile-menu.type';

const props = defineProps({
  env: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  activeProject: {
    type: String as PropType<ActiveProject>,
    default: ''
  }
});

const projects = computed(() => {
  const projects = [
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
      link: 'suptechlab/vendor_database',
      tag: ''
    },
    {
      title: 'SupTech Solutions Tracker',
      id: 'ssr',
      link: 'suptechlab/solutions_tracker',
      tag: ''
    }
  ];

  if (!props.activeProject) {
    return projects;
  }

  return projects.filter((project) => project.link === props.activeProject);
});
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
