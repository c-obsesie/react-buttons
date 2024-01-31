import { Fragment } from "react";

const Hero = () => {
    return (
        <Fragment>
            <h2 className="slogan text-xl">
                {" "}
                <strong>Click. Create. Captivate</strong>{" "}
            </h2>
            <h3 className="text-center text-4xl">
                Struggling with Buttons and color choices? Say goodbye to the
                confusion!
            </h3>
            <p className="subtitle">
                This builder is your ally in simplifying complex design
                decisions, empowering you to effortlessly create buttons and
                colors that resonate with your vision, eliminating the struggle
                and maximizing your creative potential.{" "}
            </p>

            <a href="#" className="cta-button">
                Try our FREE Button Builder! <span>🚀</span>
            </a>

            <div className="install-code">
                <pre>npm install react-buttons</pre>
            </div>
        </Fragment>
    );
};

export default Hero;
