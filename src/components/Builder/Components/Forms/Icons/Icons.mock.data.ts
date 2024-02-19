import path from "path";
import { IconType } from "react-icons";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";

export const iconDefaultList: IconType[] = [
    MdSettings,
    RiAccountPinCircleFill,
    BsSunFill,
    BsMoonFill,
];

export const iconList = [
    {
        name: "Circum Icons",
        contents: [
            {
                files: path.resolve(
                    __dirname,
                    "../../icons/Circum-Icons/svg/*.svg"
                ),
                formatter: (name: string) =>
                    `Ci${name}`.replace(/_/g, "").replace(/&/g, "And"),
            },
        ],
    },
    {
        name: "Font Awesome 5",
        contents: [
            {
                files: path.resolve(
                    __dirname,
                    "../../icons/fontawesome/svgs/+(brands|solid)/*.svg"
                ),
                formatter: (name: string) => `Fa${name}`,
            },
            {
                files: path.resolve(
                    __dirname,
                    "../../icons/fontawesome/svgs/regular/*.svg"
                ),
                formatter: (name: string) => `FaReg${name}`,
            },
        ],
    },
    {
        name: "Ionicons 5",
        contents: [
            {
                files: path.resolve(
                    __dirname,
                    "../../../../node_modules/ionicons-5/dist/svg/*.svg"
                ),
                formatter: (name: string) => `Io${name}`,
                processWithSVGO: true,
            },
        ],
    },
];
