import {
    BuilderForms,
    IButtonBuilder,
} from "@/components/Builder/Builder.interface";
import { typographyMockData } from "@/components/Builder/Components/Forms/Typography/Typography.logic";
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
        typography: typographyMockData,
        basics: {
            width: {
                type: "px",
                value: 0,
            },
            height: {
                type: "px",
                value: 0,
            },
            padding: {
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
            },
            margin: {
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
            },
        },
    } as IButtonBuilder);
    const [activeFormComponent, setActiveFormComponent] =
        useState<BuilderForms>(BuilderForms.Typography);
    const [sidebar, setSidebar] = useState<IBuilderSidebar>(sidebarMenu);

    console.log("PROVIDER STATE", state);

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
