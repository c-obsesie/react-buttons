"use client";

import BuilderSidebarView from "./Components/Sidebar/BuilderSidebar.view";
import FormsView from "./Components/Forms/Forms.view";
import BuilderPreviewView from "./Components/Preview/BuilderPreview.view";
import "./Builder.scss";
import BuilderProvider from "../../providers/builder.provider";

const BuilderView = () => {
    return (
        <BuilderProvider>
            <div className="react-buttons-builder-container container mx-auto">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-2">
                        <BuilderSidebarView />
                    </div>

                    <div className="col-span-5 p-5">
                        <FormsView />
                    </div>

                    <div className="col-span-5 p-5">
                        <BuilderPreviewView />
                    </div>
                </div>
            </div>
        </BuilderProvider>
    );
};

export default BuilderView;
