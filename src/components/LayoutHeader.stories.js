import LayoutHeader from './LayoutHeader.vue';

export default {
  title: 'Example/Header',
  component: LayoutHeader,
  tags: ['autodocs'],
  render: (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {LayoutHeader},
    template: '<layout-header  v-bind="$props" />'
  }),
  argTypes: {}
};
