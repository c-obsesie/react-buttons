import { HexColorPicker } from "react-colorful";
import { IBuilderProps } from "../../../Forms/Colors/Colors.interface";
import { useBuilderContext } from "@/providers/builder.provider";
import useClickOutside from "@/utils/clickOutside";
import { useRef, useState, useCallback, Fragment } from "react";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useColorStoplogic } from "./ColorStop.logic";

const ColorStopView = ({
    hex,
    stop,
    index,
}: IBuilderProps & { index: number }) => {
    const { changeColorProp } = useColorStoplogic();

    const popover = useRef();
    const [isOpen, toggle] = useState(false);

    const close = useCallback(() => toggle(false), []);
    useClickOutside(popover, close);

    console.log(index);

    return (
        <Fragment>
            <div className="flex flex-col gap-2 relative col-span-2">
                <button
                    style={{
                        background: hex,
                    }}
                    onClick={() => toggle(true)}
                    className={`absolute h-[54px] w-[54px] bottom-0 right-0 rounded-[8px] flex items-center justify-center`}
                >
                    {isOpen ? (
                        <div className="popover" ref={popover as any}>
                            <HexColorPicker
                                color={hex}
                                onChange={(hexColor) => {
                                    changeColorProp({
                                        index,
                                        prop: "hex",
                                        value: hexColor,
                                    });
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
                    value={hex}
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
                    defaultValue={stop}
                    onChange={({ currentTarget }) => {
                        changeColorProp({
                            index,
                            prop: "stop",
                            value: parseInt(currentTarget.value),
                        });
                    }}
                    className="w-full !pl-[70px]"
                />
            </div>

            <button className="h-[54px] w-[54px] bg-[#393B3C] flex items-center justify-center rounded-lg">
                <IoClose size={30} color="rgba(255, 255, 255, 0.5)" />
            </button>
        </Fragment>
    );
};

export default ColorStopView;
