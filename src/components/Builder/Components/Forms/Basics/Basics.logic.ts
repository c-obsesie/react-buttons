import { useState } from "react";

export const useBasicsLogic = () => {
    const [basicState, setBasicState] = useState<{
        activeTab: "padding" | "margin";
    }>({
        activeTab: "padding",
    });

    return {
        basicState,
        setBasicState,
    };
};
