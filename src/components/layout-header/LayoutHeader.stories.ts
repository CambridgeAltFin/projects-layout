import {Meta, StoryFn} from '@storybook/vue3';
import LayoutHeader from './LayoutHeader.vue';

export default {
  title: 'Header',
  component: LayoutHeader,
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
} as Meta<typeof LayoutHeader>;

export const DefaultHeader: StoryFn<typeof LayoutHeader> = (args) => ({
  components: {LayoutHeader},
  setup() {
    return {args};
  },

  template: '<div><LayoutHeader v-bind="args" /></div>'
});
