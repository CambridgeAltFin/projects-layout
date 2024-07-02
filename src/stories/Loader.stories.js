import Loader from '../components/Loader.vue';

export default {
  title: 'Example/Loader',
  component: Loader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {
      Loader
    },
    template:
      '<div style="position: relative; width: 400px; height: 400px;"><loader v-bind="$props" env="demo" url="https://demo-api.ccaf.io/v1" /></div>'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
};

export const Default = {
  args: {visible: true}
};
