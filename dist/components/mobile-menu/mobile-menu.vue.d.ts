import { PropType } from 'vue';
import { ActiveProject } from './mobile-menu.type';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    env: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    topic: {
        type: StringConstructor;
        default: string;
    };
    activeProject: {
        type: PropType<ActiveProject>;
        default: string;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    env: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    topic: {
        type: StringConstructor;
        default: string;
    };
    activeProject: {
        type: PropType<ActiveProject>;
        default: string;
    };
}>>, {
    env: string;
    title: string;
    topic: string;
    activeProject: ActiveProject;
}, {}>, {
    switcher?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
