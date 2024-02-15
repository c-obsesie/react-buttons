import { Fragment, useRef } from "react";
import { useColorsLogic } from "./Colors.logic";
import { IoClose } from "react-icons/io5";
import { useBuilderContext } from "@/providers/builder.provider";
import ColorStopView from "../../UI/Colors/ColorStop/ColorStop.view";
import Draggable from "react-draggable";

const ColorsView = () => {
    const {
        colorState: { activeTab },
        setColorState,
    } = useColorsLogic();

    const {
        state: {
            colors: {
                background: { colors },
            },
        },
        setState,
    } = useBuilderContext();

    // const gradientElementRef = useRef<HTMLDivElement>(null);

    if (!colors) {
        return;
    }

    console.log(colors);

    return (
        <div className="forms-basic-view">
            <div className="border-b border-[#393b3c] pb-4 mb-4">
                <h2 className="text-lg">Colors</h2>
            </div>

            <div className="text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                        <button
                            onClick={() =>
                                setColorState((prev) => ({
                                    ...prev,
                                    activeTab: "background",
                                }))
                            }
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                activeTab === "background"
                                    ? "border-blue-500 text-white"
                                    : "hover:text-white border-transparent"
                            }`}
                        >
                            Background
                        </button>
                    </li>
                    <li className="me-2">
                        <button
                            onClick={() =>
                                setColorState((prev) => ({
                                    ...prev,
                                    activeTab: "border",
                                }))
                            }
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                activeTab === "border"
                                    ? "border-blue-500 text-white"
                                    : "hover:text-white border-transparent"
                            }`}
                        >
                            Border
                        </button>
                    </li>
                    <li className="me-2">
                        <button
                            onClick={() =>
                                setColorState((prev) => ({
                                    ...prev,
                                    activeTab: "boxShadow",
                                }))
                            }
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                activeTab === "boxShadow"
                                    ? "border-blue-500 text-white"
                                    : "hover:text-white border-transparent"
                            }`}
                        >
                            Box Shadow
                        </button>
                    </li>
                </ul>
            </div>

            <div id="default-tab-content">
                <div
                    className={`pt-4 ${
                        activeTab === "background" ? "show" : "hidden"
                    }`}
                >
                    {colors.length > 0 ? (
                        <Fragment>
                            <div
                                // ref={gradientElementRef}
                                className="bg-colors-wrapper h-[50px] w-full relative rounded-lg mb-5"
                                style={{
                                    background: `linear-gradient(
                                    to right,
                                    ${colors
                                        .slice()
                                        .sort((a, b) => a.stop - b.stop)
                                        .map(
                                            ({ hex, stop }) => `${hex} ${stop}%`
                                        )
                                        .join(", ")}
                                    )`,
                                }}
                            >
                                {colors.map((color, index) => (
                                    <Draggable
                                        key={index}
                                        axis="x"
                                        bounds="parent"
                                        onDrag={(_, { x }) => {
                                            // if (!gradientElementRef.current) {
                                            //     return;
                                            // }

                                            // const elementWidth =
                                            //     gradientElementRef.current
                                            //         .clientWidth;

                                            console.log(
                                                Math.round((x / 586) * 100) +
                                                    "%"
                                            );
                                        }}
                                    >
                                        <div
                                            style={{
                                                background: color.hex,
                                                top: -4,
                                                left: `${
                                                    color.stop > 98
                                                        ? 99
                                                        : color.stop
                                                }%`,
                                            }}
                                            className={`color-handle handle w-[15px] top-1/2 -translate-y-1/2 absolute bg-[${color.hex}] h-[60px] border border-[rgba(0, 0, 0, 0.5)] rounded-full cursor-pointer`}
                                        ></div>
                                    </Draggable>
                                ))}
                            </div>

                            <div className="grid grid-cols-5 gap-6 mb-5 border-b pb-5 border-[#393B3C] items-end">
                                {colors
                                    .slice()
                                    .sort((a, b) => a.stop - b.stop)
                                    .map((color, index) => (
                                        <ColorStopView
                                            key={index}
                                            {...{ ...color, index }}
                                        />
                                    ))}
                            </div>
                        </Fragment>
                    ) : null}

                    <button
                        onClick={() =>
                            setState((prev) => ({
                                ...prev,
                                colors: {
                                    ...prev.colors,
                                    background: {
                                        ...prev.colors.background,
                                        colors: [
                                            ...prev.colors.background.colors,
                                            { hex: "#FFFFFF", stop: 0 },
                                        ],
                                    },
                                },
                            }))
                        }
                        className="bg-[#222325] h-[50px] w-full rounded-lg"
                    >
                        Add new color
                    </button>
                </div>

                <div
                    className={`pt-4 ${
                        activeTab === "border" ? "show" : "hidden"
                    }`}
                >
                    border
                </div>

                <div
                    className={`pt-4 ${
                        activeTab === "boxShadow" ? "show" : "hidden"
                    }`}
                >
                    boxShadow
                </div>
            </div>
        </div>
    );
};

export default ColorsView;
