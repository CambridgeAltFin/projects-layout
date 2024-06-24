import {Meta, StoryFn} from '@storybook/vue3';
import MobileMenu from './mobile-menu.vue';

export default {
  title: 'MobileMenu',
  component: MobileMenu,
  argTypes: {}
} as Meta<typeof MobileMenu>;

export const DefaultMobileMenu: StoryFn<typeof MobileMenu> = (args) => ({
  components: {MobileMenu},
  setup() {
    return {args};
  },

  template:
    '<div><MobileMenu v-bind="args" title="Cambridge Digital Money Dashboard" style="max-width: 420px" /></div>'
});
