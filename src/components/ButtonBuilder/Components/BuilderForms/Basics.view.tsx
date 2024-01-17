import { useBuilderContext } from "@/app/builder.provider";
import { IButtonBuilder } from "../../builder.interface";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { Fragment } from "react";
import { Dropdown } from "primereact/dropdown";
import { SelectButton } from "primereact/selectbutton";
import { FaBold, FaItalic } from "react-icons/fa";
import { InputNumber } from "primereact/inputnumber";
import {
    PiAlignBottomSimple,
    PiAlignLeftSimple,
    PiAlignRightSimple,
    PiAlignTopSimple,
} from "react-icons/pi";
import { AiOutlineColumnHeight, AiOutlineColumnWidth } from "react-icons/ai";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { TabPanel, TabView } from "primereact/tabview";
import { HexColorPicker, RgbaColorPicker } from "react-colorful";

const BasicsView = () => {
    const {
        state: {
            basics: { height, label, openInNewWindow, padding, url, width },
        },
        setState,
    } = useBuilderContext();

    return (
        <Fragment>
            <div className="d-flex flex-column gap-2">
                <label htmlFor="label">Text</label>
                <InputText
                    className="p-inputtext-sm"
                    id="label"
                    defaultValue={label}
                    onChange={({ currentTarget: { value } }) =>
                        setState((prev) => ({
                            ...prev,
                            basics: {
                                ...prev.basics,
                                label: value,
                            },
                        }))
                    }
                />
            </div>

            <div className="d-flex flex-column gap-2 mt-4">
                <label htmlFor="label">URL</label>
                <InputText
                    className="p-inputtext-sm"
                    id="label"
                    defaultValue={url}
                    onChange={({ currentTarget: { value } }) =>
                        setState((prev) => ({
                            ...prev,
                            basics: {
                                ...prev.basics,
                                url: value,
                            },
                        }))
                    }
                />
            </div>

            <div className="d-flex flex-column mt-4">
                <div className="d-flex gap-2">
                    <Checkbox inputId="openInNewWindow" checked></Checkbox>
                    <label htmlFor="openInNewWindow">Open in new window</label>
                </div>
            </div>

            <Divider />

            <TabView>
                <TabPanel header="Padding">
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex gap-4">
                            <div className="d-flex flex-column gap-2">
                                <span
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    Top
                                </span>
                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon gap-1">
                                        <PiAlignTopSimple size={20} />
                                    </span>
                                    <InputNumber
                                        className="p-inputtext-sm"
                                        value={0}
                                    />
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <span
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    Right
                                </span>
                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon gap-1">
                                        <PiAlignRightSimple size={20} />
                                    </span>
                                    <InputNumber
                                        className="p-inputtext-sm"
                                        value={0}
                                    />
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <span
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    Bottom
                                </span>
                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon gap-1">
                                        <PiAlignBottomSimple size={20} />
                                    </span>
                                    <InputNumber
                                        className="p-inputtext-sm"
                                        value={0}
                                    />
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <span
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    Left
                                </span>
                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon gap-1">
                                        <PiAlignLeftSimple size={20} />
                                    </span>
                                    <InputNumber
                                        className="p-inputtext-sm"
                                        value={0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel header="Margin">
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex gap-4">
                            <div className="d-flex flex-column gap-2">
                                <span
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    Top
                                </span>
                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon gap-1">
                                        <PiAlignTopSimple size={20} />
                                    </span>
                                    <InputNumber
                                        className="p-inputtext-sm"
                                        value={0}
                                    />
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <span
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    Right
                                </span>
                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon gap-1">
                                        <PiAlignRightSimple size={20} />
                                    </span>
                                    <InputNumber
                                        className="p-inputtext-sm"
                                        value={0}
                                    />
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <span
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    Bottom
                                </span>
                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon gap-1">
                                        <PiAlignBottomSimple size={20} />
                                    </span>
                                    <InputNumber
                                        className="p-inputtext-sm"
                                        value={0}
                                    />
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <span
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    Left
                                </span>
                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon gap-1">
                                        <PiAlignLeftSimple size={20} />
                                    </span>
                                    <InputNumber
                                        className="p-inputtext-sm"
                                        value={0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </TabView>

            <Divider />

            <div className="d-flex gap-4">
                <div className="d-flex flex-column gap-2 w-100">
                    <div className="d-flex justify-content-between">
                        <label>Width</label>

                        <div className="d-flex gap-2">
                            <button className="bg-transparent border-0 p-0">
                                px
                            </button>
                            <button className="bg-transparent border-0 p-0">
                                %
                            </button>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-2">
                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon gap-1">
                                <AiOutlineColumnWidth size={20} />
                            </span>
                            <InputNumber className="p-inputtext-sm" value={0} />
                        </div>
                    </div>
                </div>

                <Divider layout="vertical" />

                <div className="d-flex flex-column gap-2 w-100">
                    <div className="d-flex justify-content-between">
                        <label>Height</label>

                        <div className="d-flex gap-2">
                            <button className="bg-transparent border-0 p-0">
                                px
                            </button>
                            <button className="bg-transparent border-0 p-0">
                                %
                            </button>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon gap-1">
                                <AiOutlineColumnHeight size={20} />
                            </span>
                            <InputNumber className="p-inputtext-sm" value={0} />
                        </div>
                    </div>
                </div>
            </div>

            <Divider />
        </Fragment>
    );
};

export default BasicsView;
