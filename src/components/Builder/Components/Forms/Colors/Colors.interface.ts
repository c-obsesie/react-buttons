export interface IBuilderColors {
    background: {
        colors: IBuilderProps[];
        type: "linear" | "radial" | null;
        angle: number | null;
    };
    border: {
        colors: IBuilderProps[];
    } | null;
    shadow: {
        blur: number;
        spread: number;
        offsetX: number;
        offsetY: number;
        colors: IBuilderProps[];
    } | null;
}

export interface IBuilderProps {
    hex: string;
    stop: number;
}
