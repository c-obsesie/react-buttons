import { useBuilderContext } from "@/providers/builder.provider";
import { sidebarMenu } from "../Sidebar/BuilderSidebar.logic";

const FormsView = () => {
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

export default FormsView;
