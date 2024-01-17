"use client";

import BuilderProvider from "@/app/builder.provider";
import BuilderPreviewView from "./Components/BuilderPreview/BuilderPreview.view";
import BuilderSidebarView from "./Components/BuilderSidebar/BuilderSidebar.view";
import FormView from "./Components/BuilderForms/Form.view";
import { PrimeReactProvider } from "primereact/api";
import "./ButtonBuilder.scss";

const ButtonBuilderView = () => {
    return (
        <BuilderProvider>
            <PrimeReactProvider>
                <div className="react-buttons-builder-container p-4">
                    <div className="row">
                        <div className="col-2">
                            <BuilderSidebarView />
                        </div>

                        <div className="col-5">
                            <FormView />
                        </div>

                        <div className="col-5">
                            <BuilderPreviewView />
                        </div>
                    </div>
                </div>
            </PrimeReactProvider>
        </BuilderProvider>
    );
};

export default ButtonBuilderView;
