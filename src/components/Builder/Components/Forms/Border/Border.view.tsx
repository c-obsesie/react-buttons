import { CiLock, CiUnlock } from "react-icons/ci";
import {
    TbRadiusBottomLeft,
    TbRadiusBottomRight,
    TbRadiusTopLeft,
    TbRadiusTopRight,
} from "react-icons/tb";
import { useBorderLogic } from "./Border.logic";
import { CgBorderStyleSolid } from "react-icons/cg";

const BorderView = () => {
    const {
        border: {
            borderWidth,
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,
        },
        borderState: { locked },
        setBorderState,
        handleBorderRadiusChange,
        handleBorderWidthChange,
    } = useBorderLogic();

    return (
        <div className="forms-border-view">
            <div className="border-b border-[#393b3c] pb-4 mb-4">
                <h2 className="text-lg">Border</h2>
            </div>

            <div className="flex flex-col gap-2 relative mb-5">
                <label htmlFor="text">Border radius</label>

                <div className="grid grid-cols-2 gap-6">
                    <div className="relative">
                        <input
                            type="number"
                            id="width"
                            min={0}
                            value={borderTopLeftRadius}
                            className="w-full !pr-[70px]"
                            onChange={({ currentTarget }) =>
                                handleBorderRadiusChange(
                                    +currentTarget.value,
                                    "borderTopLeftRadius"
                                )
                            }
                        />
                        <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 right-0 rounded-[8px] flex items-center justify-center">
                            <TbRadiusTopLeft size={25} />
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="number"
                            id="width"
                            min={0}
                            value={borderTopRightRadius}
                            className="w-full !pl-[70px]"
                            onChange={({ currentTarget }) =>
                                handleBorderRadiusChange(
                                    +currentTarget.value,
                                    "borderTopRightRadius"
                                )
                            }
                        />
                        <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                            <TbRadiusTopRight size={25} />
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="number"
                            id="width"
                            min={0}
                            value={borderBottomLeftRadius}
                            className="w-full !pr-[70px]"
                            onChange={({ currentTarget }) =>
                                handleBorderRadiusChange(
                                    +currentTarget.value,
                                    "borderBottomLeftRadius"
                                )
                            }
                        />
                        <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 right-0 rounded-[8px] flex items-center justify-center">
                            <TbRadiusBottomLeft size={25} />
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="number"
                            id="width"
                            min={0}
                            value={borderBottomRightRadius}
                            className="w-full !pl-[70px]"
                            onChange={({ currentTarget }) =>
                                handleBorderRadiusChange(
                                    +currentTarget.value,
                                    "borderBottomRightRadius"
                                )
                            }
                        />
                        <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                            <TbRadiusBottomRight size={25} />
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 flex items-center gap-1">
                    <button
                        onClick={() => {
                            setBorderState({
                                locked: true,
                            });
                        }}
                        className={`w-[30px] h-[25px] rounded-[5px] text-[14px] flex items-center justify-center ${
                            locked ? "bg-[#0171FF]" : "bg-[#222325]"
                        }`}
                    >
                        <CiLock size={20} />
                    </button>
                    <button
                        onClick={() => {
                            setBorderState({
                                locked: false,
                            });
                        }}
                        className={`w-[30px] h-[25px] rounded-[5px] text-[14px] flex items-center justify-center ${
                            !locked ? "bg-[#0171FF]" : "bg-[#222325]"
                        }`}
                    >
                        <CiUnlock size={20} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-2 relative">
                <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                    <CgBorderStyleSolid size={25} />
                </div>

                <label htmlFor="text">Border width</label>
                <input
                    type="number"
                    id="width"
                    min={0}
                    defaultValue={borderWidth}
                    onChange={({ currentTarget }) =>
                        handleBorderWidthChange(+currentTarget.value)
                    }
                    className="w-full !pl-[70px]"
                />
            </div>
        </div>
    );
};

export default BorderView;
