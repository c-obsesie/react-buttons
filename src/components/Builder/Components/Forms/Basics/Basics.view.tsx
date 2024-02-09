import { useBuilderContext } from "@/providers/builder.provider";
import { IoMdCheckmark } from "react-icons/io";
import { TbArrowAutofitWidth } from "react-icons/tb";

const BasicsView = () => {
    const {
        state: {
            basics: { width, height },
        },
        setState,
    } = useBuilderContext();
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
            </div>
        </div>
    );
};

export default BasicsView;
