export interface StyleVariant {
    [key: string]: string;
}

export interface StyledVariantDict {
    [key: string]: StyleVariant & { file: string };
}
export interface VariantDict {
    [key: string]: {
        [key: string]: string;
    };
}
export interface IconDict {
    'icon-name': string;
    'variants'?: string[];
}
