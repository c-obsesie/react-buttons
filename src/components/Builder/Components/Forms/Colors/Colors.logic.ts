import { useState } from "react";
import { IBuilderProps } from "./Colors.interface";

export const useColorsLogic = () => {
    const [colorState, setColorState] = useState<{
        activeTab: "background" | "border" | "boxShadow";
    }>({
        activeTab: "background",
    });

    return {
        colorState,
        setColorState,
    };
};
