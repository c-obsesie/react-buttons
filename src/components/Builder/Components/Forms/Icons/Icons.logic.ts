import { useBuilderContext } from "@/providers/builder.provider";
import { ReactNode, useState } from "react";
import { iconList } from "./Icons.mock.data";

export const useIconsLogic = () => {
    const {
        state: { icons },
        setState,
    } = useBuilderContext();

    const [iconState, setIconState] = useState<ReactNode | null>(null);

    return {
        iconState,
        setIconState,
    };
};
