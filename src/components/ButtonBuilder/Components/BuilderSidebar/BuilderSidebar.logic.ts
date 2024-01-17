import { IconType } from "react-icons/lib";
import { MdOutlineTextFields, MdSmartButton } from "react-icons/md";
import { TbBorderRadius, TbIcons } from "react-icons/tb";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { LuMousePointerClick } from "react-icons/lu";
import { ComponentType, useState } from "react";
import BasicsView from "../BuilderForms/Basics.view";
import TextView from "../BuilderForms/Text.view";
import BackgroundView from "../BuilderForms/Background.view";
import BorderView from "../BuilderForms/Border.view";
import IconsView from "../BuilderForms/Icons.view";
import HoverView from "../BuilderForms/Hover.view";

export const sidebarMenu: {
    label: string;
    Icon: IconType;
    Component: ComponentType<unknown>;
    activeProperties: number;
}[] = [
    {
        label: "Basics",
        Icon: MdSmartButton,
        Component: BasicsView,
        activeProperties: 0,
    },
    {
        label: "Typography",
        Icon: MdOutlineTextFields,
        Component: TextView,
        activeProperties: 0,
    },
    {
        label: "Background",
        Icon: HiOutlineColorSwatch,
        Component: BackgroundView,
        activeProperties: 0,
    },
    {
        label: "Border",
        Icon: TbBorderRadius,
        Component: BorderView,
        activeProperties: 0,
    },
    {
        label: "Icons",
        Icon: TbIcons,
        Component: IconsView,
        activeProperties: 0,
    },
    {
        label: "Hover Effects",
        Icon: LuMousePointerClick,
        Component: HoverView,
        activeProperties: 0,
    },
];
