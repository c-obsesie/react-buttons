import { useBuilderContext } from "../../../../providers/builder.provider";
import { BuilderForms } from "../../Builder.interface";
import { sidebarMenu } from "./BuilderSidebar.logic";
import "./BuilderSidebar.scss";

const BuilderSidebarView = () => {
    const { activeFormComponent, setActiveFormComponent } = useBuilderContext();

    return (
        <div className="react-buttons-builder-sidebar">
            {Object.entries(sidebarMenu).map(([key, { Icon }]) => (
                <button
                    onClick={() => setActiveFormComponent(key as BuilderForms)}
                    key={key}
                    className={`d-flex flex-column align-items-center justify-content-center gap-2 ${
                        key === activeFormComponent ? "active" : ""
                    }`}
                >
                    <Icon size={40} />
                    {key}
                </button>
            ))}
        </div>
    );
};

export default BuilderSidebarView;
