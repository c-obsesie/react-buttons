import { ReactNode } from "react";

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
    url?: string;
    readonly target: "_blank" | "_self";
    readonly buttonType?: "empty" | "full"
    readonly invertColorTheme?: "light" | "dark";
    className?: string;
    children?: ReactNode;
    boxShadow?: string;
    rounded? : 'full' | 'none'

    variant : 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'

    // This takes care of button background and border color 
    borderColor?: string;
    backgroundColor?: string;
    // TODO : add Hover 

    // TODO : add font color 

    //Button size
    size? : 'sm' | 'md' | 'lg' | 'xl'


}
