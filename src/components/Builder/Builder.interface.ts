import { CSSProperties } from "react";
import { IBuilderBasics } from "./Components/Forms/Basics/Basics.interface";
import { IBuilderTypography } from "./Components/Forms/Typography/Typography.interface";
import { IBuilderColors } from "./Components/Forms/Colors/Colors.interface";
import { IBuilderBorder } from "./Components/Forms/Border/Border.interface";
import { IBuilderHoverEffects } from "./Components/Forms/Hover/Hover.interface";
import { IBuilderIcons } from "./Components/Forms/Icons/Icons.interface";

export interface IBuilderAttributes {
    value: string | number;
    defaultValue: string | number;
    type?: "px" | "percent";
    cssProperty: string;
}

export interface IButtonBuilder {
    basics: IBuilderBasics;
    typography: IBuilderTypography;
    colors: IBuilderColors;
    border: IBuilderBorder;
    hoverEffects: IBuilderHoverEffects;
    icons: IBuilderIcons;
}

export enum BuilderForms {
    Basics = "Basics",
    Typography = "Typography",
    Colors = "Colors",
    Border = "Border",
    Icons = "Icons",
    HoverEffects = "HoverEffects",
    Animations = "Animations",
}
