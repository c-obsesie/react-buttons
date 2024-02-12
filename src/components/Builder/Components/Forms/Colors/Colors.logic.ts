import { useState } from "react";

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
