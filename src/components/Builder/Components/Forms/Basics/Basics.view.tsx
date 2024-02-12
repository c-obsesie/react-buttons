import { useBuilderContext } from "@/providers/builder.provider";
import { IoMdCheckmark } from "react-icons/io";
import {
    PiAlignBottomSimple,
    PiAlignLeftSimple,
    PiAlignRightSimple,
    PiAlignTopSimple,
} from "react-icons/pi";
import { TbArrowAutofitHeight, TbArrowAutofitWidth } from "react-icons/tb";
import { useBasicsLogic } from "./Basics.logic";

const BasicsView = () => {
    const {
        state: {
            basics: { width, height, padding, margin },
        },
        setState,
    } = useBuilderContext();

    const { basicState, setBasicState } = useBasicsLogic();

    return (
        <div className="forms-basic-view">
            <div className="border-b border-[#393b3c] pb-4 mb-4">
                <h2 className="text-lg">Basics</h2>
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" className="w-full" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="url">URL</label>
                    <input
                        type="text"
                        id="url"
                        placeholder="http://..."
                        className="w-full"
                    />
                </div>
                <div className="flex">
                    <label
                        htmlFor="openInNewWindow"
                        className="checkbox-input cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="openInNewWindow" />
                            <span className="flex items-center justify-center">
                                <IoMdCheckmark size={25} />
                            </span>
                            Open in new window
                        </div>
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 mb-5 relative">
                    <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                        <TbArrowAutofitWidth size={25} />
                    </div>

                    <label htmlFor="text">Width</label>
                    <input
                        type="number"
                        id="width"
                        min={0}
                        defaultValue={width?.value}
                        className="w-full !pl-[70px] !pr-[70px]"
                    />

                    <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 right-0 rounded-[8px] flex items-center justify-center">
                        px
                    </div>

                    <div className="absolute top-0 right-0 flex items-center gap-1">
                        <button
                            onClick={() => {
                                setState((prev) => ({
                                    ...prev,
                                    basics: {
                                        ...prev.basics,
                                        width: {
                                            ...prev.basics.width,
                                            type: "px",
                                        },
                                    },
                                }));
                            }}
                            className={`w-[30px] h-[25px] rounded-[5px] text-[14px] ${
                                width?.type === "px"
                                    ? "bg-[#0171FF]"
                                    : "bg-[#222325]"
                            }`}
                        >
                            px
                        </button>
                        <button
                            onClick={() => {
                                setState((prev) => ({
                                    ...prev,
                                    basics: {
                                        ...prev.basics,
                                        width: {
                                            ...prev.basics.width,
                                            type: "percent",
                                        },
                                    },
                                }));
                            }}
                            className={`w-[30px] h-[25px] rounded-[5px] text-[14px] ${
                                width?.type === "percent"
                                    ? "bg-[#0171FF]"
                                    : "bg-[#222325]"
                            }`}
                        >
                            %
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mb-5 relative">
                    <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                        <TbArrowAutofitHeight size={25} />
                    </div>

                    <label htmlFor="text">Height</label>
                    <input
                        type="number"
                        id="width"
                        min={0}
                        defaultValue={height?.value}
                        className="w-full !pl-[70px] !pr-[70px]"
                    />

                    <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 right-0 rounded-[8px] flex items-center justify-center">
                        px
                    </div>

                    <div className="absolute top-0 right-0 flex items-center gap-1">
                        <button
                            onClick={() => {
                                setState((prev) => ({
                                    ...prev,
                                    basics: {
                                        ...prev.basics,
                                        height: {
                                            ...prev.basics.height,
                                            type: "px",
                                        },
                                    },
                                }));
                            }}
                            className={`w-[30px] h-[25px] rounded-[5px] text-[14px] ${
                                height?.type === "px"
                                    ? "bg-[#0171FF]"
                                    : "bg-[#222325]"
                            }`}
                        >
                            px
                        </button>
                        <button
                            onClick={() => {
                                setState((prev) => ({
                                    ...prev,
                                    basics: {
                                        ...prev.basics,
                                        height: {
                                            ...prev.basics.height,
                                            type: "percent",
                                        },
                                    },
                                }));
                            }}
                            className={`w-[30px] h-[25px] rounded-[5px] text-[14px] ${
                                height?.type === "percent"
                                    ? "bg-[#0171FF]"
                                    : "bg-[#222325]"
                            }`}
                        >
                            %
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                        <button
                            onClick={() =>
                                setBasicState({ activeTab: "padding" })
                            }
                            className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                                basicState.activeTab === "padding"
                                    ? "border-blue-500 text-white"
                                    : "hover:text-white"
                            }`}
                        >
                            Padding
                        </button>
                    </li>
                    <li className="me-2">
                        <button
                            onClick={() =>
                                setBasicState({ activeTab: "margin" })
                            }
                            className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                                basicState.activeTab === "margin"
                                    ? "border-blue-500 text-white"
                                    : "hover:text-white"
                            }`}
                        >
                            Margin
                        </button>
                    </li>
                </ul>
            </div>

            <div id="default-tab-content">
                <div
                    className={`pt-4 ${
                        basicState.activeTab === "padding" ? "show" : "hidden"
                    }`}
                >
                    <div className="grid grid-cols-4 gap-6">
                        <div className="flex flex-col gap-2 mb-5 relative">
                            <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                                <PiAlignTopSimple size={25} />
                            </div>

                            <label htmlFor="text">Top</label>
                            <input
                                type="number"
                                id="width"
                                min={0}
                                defaultValue={padding.top}
                                onChange={({ currentTarget }) => {
                                    setState((prev) => ({
                                        ...prev,
                                        basics: {
                                            ...prev.basics,
                                            padding: {
                                                ...prev.basics.padding,
                                                top: parseInt(
                                                    currentTarget.value
                                                ),
                                            },
                                        },
                                    }));
                                }}
                                className="w-full !pl-[70px]"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mb-5 relative">
                            <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                                <PiAlignRightSimple size={25} />
                            </div>

                            <label htmlFor="text">Right</label>
                            <input
                                type="number"
                                id="width"
                                min={0}
                                defaultValue={padding.right}
                                onChange={({ currentTarget }) => {
                                    setState((prev) => ({
                                        ...prev,
                                        basics: {
                                            ...prev.basics,
                                            padding: {
                                                ...prev.basics.padding,
                                                right: parseInt(
                                                    currentTarget.value
                                                ),
                                            },
                                        },
                                    }));
                                }}
                                className="w-full !pl-[70px]"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mb-5 relative">
                            <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                                <PiAlignBottomSimple size={25} />
                            </div>

                            <label htmlFor="text">Bottom</label>
                            <input
                                type="number"
                                id="width"
                                min={0}
                                defaultValue={padding.bottom}
                                onChange={({ currentTarget }) => {
                                    setState((prev) => ({
                                        ...prev,
                                        basics: {
                                            ...prev.basics,
                                            padding: {
                                                ...prev.basics.padding,
                                                bottom: parseInt(
                                                    currentTarget.value
                                                ),
                                            },
                                        },
                                    }));
                                }}
                                className="w-full !pl-[70px]"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mb-5 relative">
                            <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                                <PiAlignLeftSimple size={25} />
                            </div>

                            <label htmlFor="text">Left</label>
                            <input
                                type="number"
                                id="width"
                                min={0}
                                defaultValue={padding.left}
                                onChange={({ currentTarget }) => {
                                    setState((prev) => ({
                                        ...prev,
                                        basics: {
                                            ...prev.basics,
                                            padding: {
                                                ...prev.basics.padding,
                                                left: parseInt(
                                                    currentTarget.value
                                                ),
                                            },
                                        },
                                    }));
                                }}
                                className="w-full !pl-[70px]"
                            />
                        </div>
                    </div>
                </div>

                <div
                    className={`pt-4 ${
                        basicState.activeTab === "margin" ? "show" : "hidden"
                    }`}
                >
                    <div className="grid grid-cols-4 gap-6">
                        <div className="flex flex-col gap-2 mb-5 relative">
                            <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                                <PiAlignTopSimple size={25} />
                            </div>

                            <label htmlFor="text">Top</label>
                            <input
                                type="number"
                                id="width"
                                min={0}
                                defaultValue={margin.top}
                                onChange={({ currentTarget }) => {
                                    setState((prev) => ({
                                        ...prev,
                                        basics: {
                                            ...prev.basics,
                                            margin: {
                                                ...prev.basics.margin,
                                                top: parseInt(
                                                    currentTarget.value
                                                ),
                                            },
                                        },
                                    }));
                                }}
                                className="w-full !pl-[70px]"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mb-5 relative">
                            <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                                <PiAlignRightSimple size={25} />
                            </div>

                            <label htmlFor="text">Right</label>
                            <input
                                type="number"
                                id="width"
                                min={0}
                                defaultValue={margin.right}
                                onChange={({ currentTarget }) => {
                                    setState((prev) => ({
                                        ...prev,
                                        basics: {
                                            ...prev.basics,
                                            margin: {
                                                ...prev.basics.margin,
                                                right: parseInt(
                                                    currentTarget.value
                                                ),
                                            },
                                        },
                                    }));
                                }}
                                className="w-full !pl-[70px]"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mb-5 relative">
                            <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                                <PiAlignBottomSimple size={25} />
                            </div>

                            <label htmlFor="text">Bottom</label>
                            <input
                                type="number"
                                id="width"
                                min={0}
                                defaultValue={margin.bottom}
                                onChange={({ currentTarget }) => {
                                    setState((prev) => ({
                                        ...prev,
                                        basics: {
                                            ...prev.basics,
                                            margin: {
                                                ...prev.basics.margin,
                                                bottom: parseInt(
                                                    currentTarget.value
                                                ),
                                            },
                                        },
                                    }));
                                }}
                                className="w-full !pl-[70px]"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mb-5 relative">
                            <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                                <PiAlignLeftSimple size={25} />
                            </div>

                            <label htmlFor="text">Left</label>
                            <input
                                type="number"
                                id="width"
                                min={0}
                                defaultValue={margin.left}
                                onChange={({ currentTarget }) => {
                                    setState((prev) => ({
                                        ...prev,
                                        basics: {
                                            ...prev.basics,
                                            margin: {
                                                ...prev.basics.margin,
                                                left: parseInt(
                                                    currentTarget.value
                                                ),
                                            },
                                        },
                                    }));
                                }}
                                className="w-full !pl-[70px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicsView;
