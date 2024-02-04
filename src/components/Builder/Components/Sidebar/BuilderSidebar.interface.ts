import { ComponentType } from "react";
import { IconType } from "react-icons";
import { BuilderForms } from "../../Builder.interface";

export type IBuilderSidebar = {
    [key in BuilderForms]: {
        Icon: IconType;
        Component: ComponentType<unknown>;
        metadata: {
            properties: number;
            active?: boolean;
            type?: "in-progress" | "free";
        };
    };
};
