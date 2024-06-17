import {Meta, StoryFn} from '@storybook/vue3';
import Loader from './loader.vue';

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {}
} as Meta<typeof Loader>;

export const DefaultLoader: StoryFn<typeof Loader> = (args) => ({
  components: {Loader},
  setup() {
    return {args};
  },

  template:
    '<div style="position: relative; width: 200px; height: 200px;"><Loader v-bind="args" :visible="true"/></div>'
});
