import { useBuilderContext } from "@/app/builder.provider";
import { Divider } from "primereact/divider";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { TabView, TabPanel } from "primereact/tabview";
import { Fragment } from "react";
import { RgbaColorPicker } from "react-colorful";
import { FaBold, FaUndoAlt } from "react-icons/fa";
import { FaItalic } from "react-icons/fa6";
import { PiArrowsHorizontalFill, PiArrowsVerticalFill } from "react-icons/pi";

const TextView = () => {
    const {
        state: {
            text: { fontFamily },
        },
        setState,
    } = useBuilderContext();

    return (
        <Fragment>
            <div className="d-flex align-items-center justify-content-between">
                <h4 className="m-0">Typography</h4>
                <button className="bg-transparent p-0 border-0">
                    <FaUndoAlt size={20} color="#fff" />
                </button>
            </div>

            <Divider />

            <div className="row">
                <div className="col-12">
                    <Dropdown
                        className="w-100"
                        value={fontFamily?.defaultValue}
                        options={[
                            {
                                label: "Arial",
                                value: "Arial",
                            },
                            {
                                label: "Open Sans",
                                value: "Open Sans",
                            },
                        ]}
                    />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-8">
                    <Dropdown
                        className="w-100"
                        value={"regular"}
                        options={[
                            {
                                label: "Regular",
                                value: "regular",
                            },
                            {
                                label: "Bold",
                                value: "bold",
                            },
                            {
                                label: "Italic",
                                value: "italic",
                            },
                        ]}
                    />
                </div>

                <div className="col-4">
                    <div className="p-inputgroup">
                        <InputNumber className="p-inputtext-sm" value={16} />
                        <span className="p-inputgroup-addon">px</span>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-8 d-flex gap-3">
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <PiArrowsVerticalFill />
                        </span>
                        <InputNumber className="p-inputtext-sm" value={16} />
                        <span className="p-inputgroup-addon">px</span>
                    </div>

                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <PiArrowsHorizontalFill />
                        </span>
                        <InputNumber className="p-inputtext-sm" value={16} />
                        <span className="p-inputgroup-addon">px</span>
                    </div>
                </div>
            </div>

            <Divider />

            {/* <div className="d-flex flex-column gap-2">
                <label htmlFor="fontFamily">Font</label>
                <Dropdown
                    className="p-inputtext-sm"
                    value={fontFamily?.defaultValue}
                    options={[
                        {
                            label: "Arial",
                            value: "Arial",
                        },
                        {
                            label: "Open Sans",
                            value: "Open Sans",
                        },
                    ]}
                />
            </div>

            <Divider />

            <div className="d-flex flex-column gap-2">
                <label>Font size</label>

                <div className="p-inputgroup">
                    <InputNumber className="p-inputtext-sm" value={16} />
                    <span className="p-inputgroup-addon">px</span>
                </div>
            </div>

            <Divider />

            <div className="d-flex flex-column gap-2">
                <label>Font styles</label>

                <div className="d-flex gap-3">
                    <Dropdown
                        className="p-inputtext-sm flex-grow-1"
                        value={"normal"}
                        options={[
                            {
                                label: "Normal",
                                value: "normal",
                            },
                            {
                                label: "Italic",
                                value: "italic",
                            },
                        ]}
                    />

                    <SelectButton
                        className="flex-grow-1"
                        value={"bold"}
                        optionLabel="value"
                        itemTemplate={(option) => <option.icon />}
                        options={[
                            {
                                icon: FaBold,
                                value: "bold",
                            },
                            {
                                icon: FaItalic,
                                value: "italic",
                            },
                        ]}
                    />
                </div>
            </div>

            <Divider /> */}

            <div>
                <TabView>
                    <TabPanel header="Color">
                        <div className="mt-3">
                            <RgbaColorPicker
                                style={{
                                    width: "auto",
                                }}
                                color={{ r: 255, g: 255, b: 255, a: 1 }}
                                onChange={(e) => {
                                    console.log(e);
                                }}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel header="Hover color">
                        <div className="mt-3">
                            <RgbaColorPicker
                                style={{
                                    width: "auto",
                                }}
                                color={{ r: 0, g: 0, b: 0, a: 0.5 }}
                                onChange={(e) => {
                                    console.log(e);
                                }}
                            />
                        </div>
                    </TabPanel>
                </TabView>
            </div>
        </Fragment>
    );
};

export default TextView;
