<template>
  <v-card>
    <slot name="switcher" />
    <slot />
    <div class="list-line"></div>
    <div class="list-wrapper">
      <p class="list-title">CCAF:</p>
      <ul class="list">
        <li class="list__link">
          <a
            :href="`https://${props.env === 'demo' || props.env === 'develop' ? 'demo.' : ''}ccaf.io/`"
            >Home
          </a>
        </li>
        <li class="list__link">
          <a
            :href="`https://${props.env === 'demo' || props.env === 'develop' ? 'demo.' : ''}ccaf.io/about_ccaf`"
            >About
          </a>
        </li>
        <li class="list__link">
          <a
            :href="`https://${props.env === 'demo' || props.env === 'develop' ? 'demo.' : ''}ccaf.io/contact${topic ? `?topic=${topic}` : ''}`"
            >Contact
          </a>
        </li>
      </ul>
    </div>
    <div class="chips">
      <v-chip
        class="chips__item"
        v-for="(project, index) in projects"
        :key="project.id"
        :class="{'chips__item-active': !index}"
        :href="
          !index
            ? undefined
            : `https://${props.env === 'demo' || props.env === 'develop' ? 'demo.' : ''}ccaf.io/${project.link}`
        "
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
  topic: {
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
.list-wrapper{
  margin-top: 28px;
  padding: 8px 24px;
}
.list-line {
  width: 87.7%;
  margin: 0 auto;
  margin-top: 28px;
  height: 1px;
  background-color: #b1b4bf;
}
.list-title {
  font-family: 'MyriadPro', sans-serif;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
}

.list {
  display: flex;
  margin-bottom: 16px;
  &__title {
    font-family: 'MyriadPro', sans-serif;
    height: 66px;
    padding: 24px 8px;
  }
  &__link {
    list-style-type: none;
    width: 67.7px;
    margin-right: 10px;

    &-active {
      background-color: #f7f8fa !important;
    }
    a {
      color: #0e1436;
      text-decoration: none;
      &:hover {
        color: #ffb81c !important;
      }
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
    padding: 8px 12px;
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
