import {Meta, StoryFn} from '@storybook/vue3';
import Header from './header.vue';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    env: {
      control: {
        type: 'select',
        options: ['demo', 'prod'],
        default: 'prod'
      }
    },
    title:{
      default: 'Cambridge Bitcoin Electricity Consumption Index'
    }
  }
} as Meta<typeof Header>;

export const DefaultHeader: StoryFn<typeof Header> = (args) => ({
  components: {Header},
  setup() {
    return {args};
  },

  template: '<div><Header v-bind="args" /></div>'
});
