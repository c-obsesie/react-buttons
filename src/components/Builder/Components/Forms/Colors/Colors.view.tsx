import { useColorsLogic } from "./Colors.logic";

const BackgroundView = () => {
    const { colorState, setColorState } = useColorsLogic();

    console.log(colorState);

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
                                setColorState({ activeTab: "background" })
                            }
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                colorState.activeTab === "background"
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
                                setColorState({ activeTab: "border" })
                            }
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                colorState.activeTab === "border"
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
                                setColorState({ activeTab: "boxShadow" })
                            }
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                colorState.activeTab === "boxShadow"
                                    ? "border-blue-500 text-white"
                                    : "hover:text-white border-transparent"
                            }`}
                        >
                            Box Shadow
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BackgroundView;
