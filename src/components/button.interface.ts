import { ReactNode } from "react";

export interface IButton {
    url?: string;
    readonly target: "_blank" | "_self";
    // INVERT IS BAD 
    readonly buttonType?: "empty" | "full" | "invert";
    /**
     * @description If the buttonType is "invert", this property will determine the color of the button.
     */
    readonly invertColorTheme?: "light" | "dark";
    className?: string;
    clickHandler?: () => void;
    children?: ReactNode;
    boxShadow?: string;
    rounded? : 'full' | 'none'
}
