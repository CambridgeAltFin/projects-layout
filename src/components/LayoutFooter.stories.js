import LayoutFooter from './LayoutFooter.vue';

export default {
  title: 'Example/Footer',
  component: Footer,
  tags: ['autodocs'],
  render: (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {LayoutFooter},
    template: '<layout-footer  v-bind="$props" />'
  }),
  argTypes: {}
};
