"use client";

import BuilderSidebarView from "./Components/Sidebar/BuilderSidebar.view";
import FormsView from "./Components/Forms/Forms.view";
import BuilderPreviewView from "./Components/Preview/BuilderPreview.view";
import "./Builder.scss";
import BuilderProvider from "../../providers/builder.provider";

const BuilderView = () => {
    return (
        <BuilderProvider>
            <div className="react-buttons-builder-container p-4">
                <div className="row">
                    <div className="col-2">
                        <BuilderSidebarView />
                    </div>

                    <div className="col-5">
                        <FormsView />
                    </div>

                    <div className="col-5">
                        <BuilderPreviewView />
                    </div>
                </div>
            </div>
        </BuilderProvider>
    );
};

export default BuilderView;
