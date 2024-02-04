import { IconType } from "react-icons/lib";
import {
    MdAnimation,
    MdOutlineTextFields,
    MdSmartButton,
} from "react-icons/md";
import { TbBorderSides, TbIcons } from "react-icons/tb";
import { LuMousePointerClick } from "react-icons/lu";
import { ComponentType } from "react";
import BasicsView from "../Forms/Basics/Basics.view";
import TypographyView from "../Forms/Typography/Typography.view";
import ColorsView from "../Forms/Colors/Colors.view";
import BorderView from "../Forms/Border/Border.view";
import IconsView from "../Forms/Icons/Icons.view";
import HoverView from "../Forms/Hover/Hover.view";
import { BiSolidColorFill } from "react-icons/bi";
import { IBuilderSidebar } from "./BuilderSidebar.interface";
import { BuilderForms } from "../../Builder.interface";

export const sidebarMenu: IBuilderSidebar = {
    Basics: {
        Icon: MdSmartButton,
        Component: BasicsView,
        metadata: {
            properties: 0,
        },
    },
    Typography: {
        Icon: MdOutlineTextFields,
        Component: TypographyView,
        metadata: {
            properties: 0,
        },
    },
    Colors: {
        Icon: BiSolidColorFill,
        Component: ColorsView,
        metadata: {
            properties: 0,
        },
    },
    Border: {
        Icon: TbBorderSides,
        Component: BorderView,
        metadata: {
            properties: 0,
        },
    },
    Icons: {
        Icon: TbIcons,
        Component: IconsView,
        metadata: {
            properties: 0,
        },
    },
    HoverEffects: {
        Icon: LuMousePointerClick,
        Component: HoverView,
        metadata: {
            properties: 0,
        },
    },
    Animations: {
        Icon: MdAnimation,
        Component: HoverView,
        metadata: {
            properties: 0,
        },
    },
};
