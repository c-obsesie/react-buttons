import { IButtonBuilder } from "@/components/ButtonBuilder/builder.interface";

export const defaultButtonBuilder: IButtonBuilder = {
    basics: {
        label: "Click me",
        url: "#",
        openInNewWindow: false,
        width: null,
        height: null,
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        },
    },
    text: {
        fontFamily: {
            cssProperty: "font-family",
            defaultValue: "Arial",
            value: "",
        },
        fontSize: {
            cssProperty: "font-size",
            defaultValue: "16px",
            value: "",
        },
        fontWeight: {
            cssProperty: "font-weight",
            defaultValue: "normal",
            value: "",
        },
        fontStyle: {
            cssProperty: "font-style",
            defaultValue: "normal",
            value: "",
        },
        color: "#000000",
        hoverColor: "#000000",
    },
};
