import {
    BuilderForms,
    IButtonBuilder,
} from "@/components/Builder/Builder.interface";
import { IBuilderSidebar } from "@/components/Builder/Components/Sidebar/BuilderSidebar.interface";
import { sidebarMenu } from "@/components/Builder/Components/Sidebar/BuilderSidebar.logic";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

export interface IBuilderContext {
    activeFormComponent: BuilderForms;
    state: IButtonBuilder;
    setActiveFormComponent: Dispatch<SetStateAction<BuilderForms>>;
    setState: Dispatch<SetStateAction<IButtonBuilder>>;
    sidebar: IBuilderSidebar;
    setSidebar: Dispatch<SetStateAction<IBuilderSidebar>>;
}

export const BuilderContext = createContext<IBuilderContext>(
    {} as IBuilderContext
);

export const useBuilderContext = () => useContext(BuilderContext);

export default function BuilderProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<IButtonBuilder>({
        basics: {
            width: {
                type: "px",
                value: 0,
            },
            height: {
                type: "px",
                value: 0,
            },
        },
    } as IButtonBuilder);
    const [activeFormComponent, setActiveFormComponent] =
        useState<BuilderForms>(BuilderForms.Basics);
    const [sidebar, setSidebar] = useState<IBuilderSidebar>(sidebarMenu);

    return (
        <BuilderContext.Provider
            value={{
                sidebar,
                setSidebar,
                activeFormComponent,
                setActiveFormComponent,
                setState,
                state,
            }}
        >
            {children}
        </BuilderContext.Provider>
    );
}
