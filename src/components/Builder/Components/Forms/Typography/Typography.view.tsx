import { useBuilderContext } from "@/providers/builder.provider";
import { HexColorPicker } from "react-colorful";
import { RxFontSize } from "react-icons/rx";
import { TbLetterSpacing } from "react-icons/tb";

const TypographyView = () => {
    const {
        state: {
            typography: {
                fontFamily,
                fontSize,
                fontWeight,
                color,
                fontStyle,
                letterSpacing,
            },
        },
        setState,
    } = useBuilderContext();

    return (
        <div className="forms-basic-view">
            <div className="border-b border-[#393b3c] pb-4 mb-4">
                <h2 className="text-lg">Typography</h2>
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="fontFamily">Font family</label>
                <select
                    id="fontFamily"
                    className="bg-[#222325] rounded-lg block w-full p-2.5 h-[54px]"
                >
                    <option value="inherit">Inherit from body</option>
                    <option value="Arial">Arial</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Lato">Lato</option>
                </select>
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="fontFamily">Font style</label>
                <select
                    id="fontFamily"
                    className="bg-[#222325] rounded-lg block w-full p-2.5 h-[54px]"
                >
                    <option value="regular">Regular</option>
                    <option value="italic">Italic</option>
                </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 mb-5 relative">
                    <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                        <RxFontSize size={25} />
                    </div>

                    <label htmlFor="text">Font size</label>
                    <input
                        type="number"
                        id="width"
                        min={0}
                        defaultValue={fontSize}
                        onChange={({ currentTarget }) => {
                            setState((prev) => ({
                                ...prev,
                                typography: {
                                    ...prev.typography,
                                    fontSize: parseInt(currentTarget.value),
                                },
                            }));
                        }}
                        className="w-full !pl-[70px] !pr-[70px]"
                    />

                    <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 right-0 rounded-[8px] flex items-center justify-center">
                        px
                    </div>
                </div>

                <div className="flex flex-col gap-2 mb-5 relative">
                    <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                        <TbLetterSpacing size={25} />
                    </div>

                    <label htmlFor="text">Letter spacing</label>
                    <input
                        type="number"
                        id="width"
                        min={0}
                        defaultValue={letterSpacing}
                        onChange={({ currentTarget }) => {
                            setState((prev) => ({
                                ...prev,
                                typography: {
                                    ...prev.typography,
                                    letterSpacing: parseInt(
                                        currentTarget.value
                                    ),
                                },
                            }));
                        }}
                        className="w-full !pl-[70px] !pr-[70px]"
                    />

                    <div className="left-icon bg-[#393b3c] absolute h-[54px] w-[54px] bottom-0 right-0 rounded-[8px] flex items-center justify-center">
                        px
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 mb-5 relative">
                <button
                    style={{
                        background: color,
                    }}
                    className={`absolute h-[54px] w-[54px] bottom-0 right-0 rounded-[8px] flex items-center justify-center`}
                >
                    <HexColorPicker
                        color={color}
                        onChange={(color) => {
                            setState((prev) => ({
                                ...prev,
                                typography: {
                                    ...prev.typography,
                                    color: color,
                                },
                            }));
                        }}
                        className="!hidden !absolute bottom-full right-0"
                    />
                </button>

                <label htmlFor="color">Color</label>
                <input
                    type="text"
                    id="color"
                    min={0}
                    readOnly
                    defaultValue={color}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default TypographyView;
