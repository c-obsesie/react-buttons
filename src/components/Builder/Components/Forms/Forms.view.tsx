import { useBuilderContext } from "@/providers/builder.provider";
import { sidebarMenu } from "../Sidebar/BuilderSidebar.logic";

const FormsView = () => {
    const { activeFormComponent, sidebar } = useBuilderContext();

    const ActiveSidebarComponent = sidebar[activeFormComponent].Component;

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
