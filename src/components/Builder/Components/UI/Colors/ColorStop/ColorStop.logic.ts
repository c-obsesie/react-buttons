import { useBuilderContext } from "@/providers/builder.provider";
import { IBuilderProps } from "../../../Forms/Colors/Colors.interface";

export const useColorStoplogic = () => {
    const {
        setState,
        state: {
            colors: {
                background: { colors },
            },
        },
    } = useBuilderContext();

    const changeColorProp = ({
        prop,
        index,
        value,
    }: {
        index: number;
        value: string | number;
        prop: keyof IBuilderProps;
    }) => {
        colors[index] = {
            ...colors[index],
            [prop]: value,
        };

        setState((prev) => ({
            ...prev,
            colors: {
                ...prev.colors,
                background: {
                    ...prev.colors.background,
                    colors,
                },
            },
        }));
    };

    return { changeColorProp };
};
