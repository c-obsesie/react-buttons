import { useState } from "react";
import { IButtonBuilder } from "./builder.interface";

export const useButtonBuilderLogic = () => {
    const [state, setState] = useState<IButtonBuilder>({
        basics: {
            label: "Button",
            url: "",
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
    } as IButtonBuilder);

    return {
        state,
        setState,
    };
};
