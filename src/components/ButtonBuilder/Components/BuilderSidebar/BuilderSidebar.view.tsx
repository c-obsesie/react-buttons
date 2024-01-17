import { useBuilderContext } from "@/app/builder.provider";
import { sidebarMenu } from "./BuilderSidebar.logic";
import "./BuilderSidebar.scss";

const BuilderSidebarView = () => {
    const { activeFormComponent, setActiveFormComponent } = useBuilderContext();

    return (
        <div className="react-buttons-builder-sidebar">
            {sidebarMenu.map(({ Icon, label }) => (
                <button
                    onClick={() => setActiveFormComponent(label)}
                    key={label}
                    className={`d-flex flex-column align-items-center justify-content-center gap-2 ${
                        label === activeFormComponent ? "active" : ""
                    }`}
                >
                    <Icon size={40} />
                    {label}
                </button>
            ))}
        </div>
    );
};

export default BuilderSidebarView;
