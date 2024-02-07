import { IoMdCheckmark } from "react-icons/io";

const BasicsView = () => {
    return (
        <div className="forms-basic-view">
            <div className="border-b border-[#393b3c] pb-4 mb-4">
                <h2 className="text-lg">Basics</h2>
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" className="w-full" />
            </div>

            <div className="grid grid-cols-2 gap-6">
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
        </div>
    );
};

export default BasicsView;
