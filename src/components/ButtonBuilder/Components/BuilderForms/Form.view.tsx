import { useBuilderContext } from "@/app/builder.provider";
import { sidebarMenu } from "../BuilderSidebar/BuilderSidebar.logic";

const FormView = () => {
    const { activeFormComponent } = useBuilderContext();

    const ActiveSidebarComponent = sidebarMenu.find(
        ({ label }) => label === activeFormComponent
    )?.Component;

    if (!ActiveSidebarComponent) {
        return "Component not found";
    }

    return (
        <div className="react-buttons-builder-form">
            <ActiveSidebarComponent />
        </div>
    );
};

export default FormView;
