import { useState } from "react";

export const useButtonHoverAnimation = () => {
    const [isHovered, setIsHovered] = useState(false);

    const opacity = isHovered ? 1 : 0;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return {
        isHovered,
        setIsHovered,
        opacity,
        handleMouseEnter,
        handleMouseLeave,
    };
};

export const invertedButtonThemeToHex = (
    invertColorTheme: "light" | "dark",
    invert: boolean
) => {
    if (invertColorTheme === "dark") {
        if (invert) {
            return "#fff";
        }

        return "#000";
    }

    if (invertColorTheme === "light") {
        if (invert) {
            return "#000";
        }

        return "#fff";
    }

    return "#fff";
};
