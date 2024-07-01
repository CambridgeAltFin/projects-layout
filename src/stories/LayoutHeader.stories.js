import LayoutHeader from '../components/LayoutHeader.vue';

export default {
  title: 'Example/LayoutHeader',
  component: LayoutHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {
      LayoutHeader
    },
    template: '<layout-header env="demo" url="https://demo-api.ccaf.io/v1" />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
};

export const Default = {
  args: {}
};
