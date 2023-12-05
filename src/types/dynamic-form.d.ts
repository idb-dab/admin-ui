// Props unique to text input
export type TextInputData = {
    validator?: (e: string) => boolean;
    placeholder?: string;
    secret?: boolean;
};

// Props unique to dropdown select input
export type DropSelectInputData = {
    selectLabel?: string;
    options?: { option: string; value: string }[];
};

// Props unique to multi select input
export type MultiSelectInputData = {
    gridTemplate?: string;
    checkboxColor?: boolean;
    selectables?: string[];
};

// Props needed for each form input
export type FormData = {
    type: 'text' | 'drop-select' | 'multi-select' | 'switch';
    id: string;
    label: string;
    disabled?: boolean;
} & (TextInputData & MultiSelectInputData & DropSelectInputData);
