declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    dialog: {
        type: BooleanConstructor;
        default: boolean;
    };
    env: {
        type: StringConstructor;
        default: string;
    };
    topic: {
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
    env: {
        type: StringConstructor;
        default: string;
    };
    topic: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChangeDialog?: ((value: boolean) => any) | undefined;
}, {
    env: string;
    dialog: boolean;
    topic: string;
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
