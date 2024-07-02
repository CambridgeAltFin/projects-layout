import MobileMenu from '../components/MobileMenu.vue';

export default {
  title: 'Example/MobileMenu',
  component: MobileMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {
      MobileMenu
    },
    template:
      '<mobile-menu v-bind="$props" env="demo" url="https://demo-api.ccaf.io/v1" />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
};

export const Default = {
  args: {
    activeProject: 'SupTech Vendor Database'
  }
};
