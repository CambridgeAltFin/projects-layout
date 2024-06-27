declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    dialog: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    activeSelect: {
        type: StringConstructor;
        default: string;
    };
    env: {
        type: StringConstructor;
        default: string;
    };
    topic: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    changeDialog: (value: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    dialog: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    activeSelect: {
        type: StringConstructor;
        default: string;
    };
    env: {
        type: StringConstructor;
        default: string;
    };
    topic: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChangeDialog?: ((value: boolean) => any) | undefined;
}, {
    env: string;
    dialog: boolean;
    title: string;
    activeSelect: string;
    topic: string;
    url: string;
}, {}>, {
    default?(_: {
        close: () => boolean;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
