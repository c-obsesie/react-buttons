import { useBuilderContext } from "@/providers/builder.provider";
import { useState } from "react";

export const useBorderLogic = () => {
    const {
        state: { border },
        setState,
    } = useBuilderContext();

    const [borderState, setBorderState] = useState<{
        locked: boolean;
    }>({
        locked: true,
    });

    const handleBorderRadiusChange = (radius: number, corner?: string) => {
        if (borderState.locked) {
            setState((prev) => ({
                ...prev,
                border: {
                    ...prev.border,
                    borderTopLeftRadius: radius,
                    borderTopRightRadius: radius,
                    borderBottomLeftRadius: radius,
                    borderBottomRightRadius: radius,
                },
            }));
        }

        if (corner) {
            setState((prev) => ({
                ...prev,
                border: {
                    ...prev.border,
                    [corner]: radius,
                },
            }));
        }
    };

    const handleBorderWidthChange = (width: number) => {
        setState((prev) => ({
            ...prev,
            border: {
                ...prev.border,
                borderWidth: width,
            },
        }));
    };

    return {
        border,
        borderState,
        setBorderState,
        handleBorderRadiusChange,
        handleBorderWidthChange,
    };
};
