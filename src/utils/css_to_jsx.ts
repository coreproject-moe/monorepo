export const css_to_jsx = (css: string) => {
    const r = /(?<=^|;)\s*([^:]+)\s*:\s*([^;]+)\s*/g,
        o = {};
    css.replace(r, (_, p, v) => (o[p] = v));
    return o;
};
