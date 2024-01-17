import Button from "@/components/Buttons";
import React from "react";

export default function Homepage() {
    return (
        <div>
            {" "}
            <h1>Default Buttons </h1>
            <div>
                <Button className="primary" target="_self" buttonType="full">
                    Gradient
                </Button>
                <Button className="secondary" target="_self" buttonType="full">
                    Gradient
                </Button>
                <Button className="danger" target="_self" buttonType="full">
                    Gradient
                </Button>
            </div>
            <h1>Pills buttons</h1>
            <div>
                <Button className="gradient-gold" target="_self" rounded="none">
                    Gradient
                </Button>
                <Button
                    className="gradient-light-blue "
                    target="_self"
                    rounded="full"
                >
                    Gradient
                </Button>
                <Button className="gradient-blue " target="_self">
                    Gradient
                </Button>
            </div>
            <h1>Icon buttons </h1>
            <h1>Icons only</h1>
            <h1>Loading state</h1>
            <h1>Button size </h1>
            <div></div>
            <h1>Gradient buttons </h1>
            <div>
                {" "}
                <Button
                    className="gradient-gold"
                    target="_self"
                    buttonType="full"
                    rounded="full"
                >
                    Gradient
                </Button>
                <Button
                    className="gradient-light-blue"
                    target="_self"
                    buttonType="full"
                >
                    Gradient
                </Button>
                <Button
                    className="gradient-blue"
                    target="_self"
                    buttonType="full"
                >
                    Gradient
                </Button>
            </div>
        </div>
    );
}
