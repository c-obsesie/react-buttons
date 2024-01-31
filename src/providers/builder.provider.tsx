import { IButtonBuilder } from "@/components/Builder/Builder.interface";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

export interface IBuilderContext {
    activeFormComponent: string;
    state: IButtonBuilder;
    setActiveFormComponent: Dispatch<SetStateAction<string>>;
    setState: Dispatch<SetStateAction<IButtonBuilder>>;
}

export const BuilderContext = createContext<IBuilderContext>(
    {} as IBuilderContext
);

export const useBuilderContext = () => useContext(BuilderContext);

export default function BuilderProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<IButtonBuilder>({} as IButtonBuilder);
    const [activeFormComponent, setActiveFormComponent] =
        useState<string>("Basics");

    console.log("PROVIDER VALUES", state);

    return (
        <BuilderContext.Provider
            value={{
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
