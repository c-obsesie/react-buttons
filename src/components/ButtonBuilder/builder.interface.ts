import { CSSProperties } from "react";

export interface IBuilderAttributes {
    value: string | number;
    defaultValue: string | number;
    type?: "px" | "percent";
    cssProperty: string;
}

export interface IBuilderBasics {
    label: string;
    url: string;

    // done
    openInNewWindow: boolean;

    // done
    width: {
        value: number;
        type: "px" | "percent";
    } | null;

    // done
    height: {
        value: number;
        type: "px" | "percent";
    } | null;

    // done
    padding: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
}

export interface IBuilderText {
    fontFamily: IBuilderAttributes;
    fontSize: IBuilderAttributes;
    fontWeight: IBuilderAttributes;
    fontStyle: IBuilderAttributes;
    color: string;
    hoverColor: string;
}
export interface IBuilderBackground {}

export interface IButtonBuilder {
    basics: IBuilderBasics;
    text: IBuilderText;
    // background: IBuilderBackground;
    // icons: unknown;
    // hoverEffects: unknown;
}
