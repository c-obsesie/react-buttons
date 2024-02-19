import { AiFillChrome } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { MdInfo } from "react-icons/md";
import { useIconsLogic } from "./Icons.logic";
import { Fragment } from "react";
import { iconDefaultList } from "./Icons.mock.data";

const IconsView = () => {
    const { iconState, setIconState } = useIconsLogic();

    return (
        <div className="forms-icons-view">
            <div className="border-b border-[#393b3c] pb-4 mb-4">
                <h2 className="text-lg">Icons</h2>
            </div>

            {iconState ? (
                <>{iconState}</>
            ) : (
                <Fragment>
                    <div className="flex items-center gap-2 mb-5">
                        <MdInfo size={25} color="#FC8F47" />
                        <span className="text-sm text-[#FC8F47]">
                            React Icons package required
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 relative">
                        <div className="left-icon absolute h-[54px] w-[54px] bottom-0 left-0 rounded-[8px] flex items-center justify-center">
                            <IoSearchOutline size={25} color="#919192" />
                        </div>

                        <label htmlFor="text">Font size</label>
                        <input
                            type="text"
                            min={0}
                            defaultValue={""}
                            className="w-full !pl-[70px] !pr-[70px]"
                            placeholder="Search icon"
                        />
                    </div>

                    <div className="icon-set mt-5">
                        <div className="grid grid-cols-4 gap-4">
                            {iconDefaultList.map((Icon) => (
                                <div
                                    key={Icon.name}
                                    className="flex flex-col items-center gap-2 p-4 rounded-lg border border-[#222325] hover:border-[#777B83] cursor-pointer"
                                    onClick={() => {
                                        setIconState(<Icon />);
                                    }}
                                >
                                    <Icon size={30} />
                                    <div className="text-sm text-[#777B83]">
                                        {Icon.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fragment>
            )}
        </div>
    );
};

export default IconsView;
