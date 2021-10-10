export interface LinkType {
    to: string;
    text: string;
    disabled?: boolean;
    index?: number;
    section?: string;
    callback?: () => void;
    icon?: any;
}
