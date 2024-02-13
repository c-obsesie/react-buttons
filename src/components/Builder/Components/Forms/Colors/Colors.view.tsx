import { Fragment, useCallback, useRef, useState } from "react";
import { useColorsLogic } from "./Colors.logic";
import { HexColorPicker } from "react-colorful";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useBuilderContext } from "@/providers/builder.provider";
import useClickOutside from "@/utils/clickOutside";

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

    const popover = useRef();
    const [isOpen, toggle] = useState(false);

    const close = useCallback(() => toggle(false), []);
    useClickOutside(popover, close);

    if (!colors) {
        return;
    }

    console.log(popover?.current);

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
                                className="bg-colors-wrapper h-[50px] w-full relative rounded-lg mb-5"
                                data-test={`linear-gradient(
                                    90deg,
                                    ${colors
                                        .map(
                                            ({ hex, stop }) => `${hex} ${stop}%`
                                        )
                                        .join(", ")}
                                    )`}
                                style={{
                                    background: `linear-gradient(
                                    to right,
                                    ${colors
                                        .map(
                                            ({ hex, stop }) => `${hex} ${stop}%`
                                        )
                                        .join(", ")}
                                    )`,
                                }}
                            >
                                {colors.map((color, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            background: color.hex,
                                            left: `${
                                                color.stop > 98
                                                    ? 99
                                                    : color.stop
                                            }%`,
                                        }}
                                        className={`color-handle w-[15px] top-1/2 -translate-y-1/2 absolute bg-[${color.hex}] h-[60px] border border-[rgba(0, 0, 0, 0.5)] rounded-full cursor-pointer`}
                                    ></div>
                                ))}
                            </div>

                            <div className="grid grid-cols-5 gap-6 mb-5 border-b pb-5 border-[#393B3C] items-end">
                                {colors.map((color, index) => (
                                    <Fragment key={index}>
                                        <div className="flex flex-col gap-2 relative col-span-2">
                                            <button
                                                style={{
                                                    background: color.hex,
                                                }}
                                                onClick={() => toggle(true)}
                                                className={`absolute h-[54px] w-[54px] bottom-0 right-0 rounded-[8px] flex items-center justify-center`}
                                            >
                                                {isOpen ? (
                                                    <div
                                                        className="popover"
                                                        ref={popover as any}
                                                    >
                                                        <HexColorPicker
                                                            key={index}
                                                            color={color.hex}
                                                            onChange={(
                                                                hexColor
                                                            ) => {
                                                                setState(
                                                                    (prev) => ({
                                                                        ...prev,
                                                                        colors: {
                                                                            ...prev.colors,
                                                                            background:
                                                                                {
                                                                                    ...prev
                                                                                        .colors
                                                                                        .background,
                                                                                    colors: prev.colors.background.colors.map(
                                                                                        (
                                                                                            color,
                                                                                            i
                                                                                        ) => {
                                                                                            if (
                                                                                                i ===
                                                                                                index
                                                                                            ) {
                                                                                                return {
                                                                                                    ...color,
                                                                                                    hex: hexColor,
                                                                                                };
                                                                                            }

                                                                                            return color;
                                                                                        }
                                                                                    ),
                                                                                },
                                                                        },
                                                                    })
                                                                );
                                                            }}
                                                            className="!absolute bottom-full right-0"
                                                        />
                                                    </div>
                                                ) : null}
                                            </button>
                                            <label htmlFor="color">HEX</label>
                                            <input
                                                type="text"
                                                id="color"
                                                readOnly
                                                value={color.hex}
                                                className="w-full"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2 relative col-span-2">
                                            <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                                                <FaArrowsLeftRight size={25} />
                                            </div>

                                            <label htmlFor="text">STOP</label>
                                            <input
                                                type="number"
                                                id="width"
                                                min={0}
                                                max={100}
                                                defaultValue={color.stop}
                                                onChange={({
                                                    currentTarget,
                                                }) => {
                                                    setState((prev) => ({
                                                        ...prev,
                                                        colors: {
                                                            ...prev.colors,
                                                            background: {
                                                                ...prev.colors
                                                                    .background,
                                                                colors: prev.colors.background.colors.map(
                                                                    (
                                                                        color,
                                                                        i
                                                                    ) => {
                                                                        if (
                                                                            i ===
                                                                            index
                                                                        ) {
                                                                            return {
                                                                                ...color,
                                                                                stop: Number(
                                                                                    currentTarget.value
                                                                                ),
                                                                            };
                                                                        }

                                                                        return color;
                                                                    }
                                                                ),
                                                            },
                                                        },
                                                    }));
                                                }}
                                                className="w-full !pl-[70px]"
                                            />
                                        </div>

                                        <button className="h-[54px] w-[54px] bg-[#393B3C] flex items-center justify-center rounded-lg">
                                            <IoClose
                                                size={30}
                                                color="rgba(255, 255, 255, 0.5)"
                                            />
                                        </button>
                                    </Fragment>
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
                                            { hex: "#FFFFFF", stop: 30 },
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
