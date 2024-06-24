import {Meta, StoryFn} from '@storybook/vue3';
import LayoutFooter from './LayoutFooter.vue';

export default {
  title: 'Footer',
  component: LayoutFooter,
  argTypes: {
    env: {
      control: {
        type: 'select',
        options: ['demo', 'prod'],
        default: 'prod'
      }
    }
  }
} as Meta<typeof LayoutFooter>;

export const DefaultFooter: StoryFn<typeof LayoutFooter> = (args) => ({
  components: {LayoutFooter},
  setup() {
    const mock = {
      webLink: 'https://www.jbs.cam.ac.uk/ccaf',
      email: 'ccaf@jbs.cam.ac.uk',
      location: '25 Trumpington Street Cambridge CB2 1AG, UK',
      locationLink: 'https://www.google.com/maps/place/25+Trumpington+St,+Cambridge+CB2+1QA,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0+%D0%91%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%96%D1%8F/@52.2000333,0.1181878,17z/data=!3m1!4b1!4m6!3m5!1s0x47d870bd2111f061:0xbe75ca06f92bb082!8m2!3d52.2000333!4d0.1207627!16s%2Fg%2F11cshnt_gx?hl=uk-UK&entry=ttu',
      supportedBy: [],
      linkedinLink: 'https://www.linkedin.com/company/cambridge-centre-for-alternative-finance/',
      twitterLink: 'https://x.com/CambridgeAltFin?mx=2',
      facebookLink: '',
    };

    return {args: {...args, ...mock}};
  },

  template: '<div><LayoutFooter v-bind="args" /></div>'
});
