import {Meta, StoryFn} from '@storybook/vue3';
import Footer from './footer.vue';

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {
    env: {
      control: {
        type: 'select',
        options: ['demo', 'prod'],
        default: 'prod'
      }
    },
  }
} as Meta<typeof Footer>;

export const DefaultFooter: StoryFn<typeof Footer> = (args) => ({
  components: {Footer},
  setup() {
    return {args};
  },

  template: '<div><Footer v-bind="args" /></div>'
});
