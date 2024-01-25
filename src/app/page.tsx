import DisplayButton from "@/components-web/DisplayButton/DisplayButton";
import Button from "@/components/Buttons";
import { IoIosCode } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="container m-auto">
        <nav className="flex justify-between mt-4 mb-10">
          <div className="logo">React Buttons</div>
          <div className="nav-items flex gap-x-11 justify-center items-center">
            <div className="buy-coffee ">Docs</div>
            <div className="menu-icon">Button Builder</div>
            <div className="menu-icon">Collections</div>
            <div className="menu-icon gradient-text">AI Button Generator </div>
          </div>
          <div className="nav-items flex gap-x-11 justify-center items-center">
            <button className="button">Get Started</button>
          </div>
        </nav>
      </div>
      <div className="container m-auto">
        <h2 className="slogan text-xl">
          {" "}
          <strong>Click. Create. Captivate</strong>{" "}
        </h2>
        <h3 className="text-center text-4xl">
          Struggling with Buttons and color choices? Say goodbye to the
          confusion!
        </h3>
        <p className="subtitle">
          This builder is your ally in simplifying complex design decisions,
          empowering you to effortlessly create buttons and colors that resonate
          with your vision, eliminating the struggle and maximizing your
          creative potential.{" "}
        </p>

        <a href="#" className="cta-button">
          Try our FREE Button Builder! <span>🚀</span>
        </a>

        <div className="install-code">
          <pre>npm install react-buttons</pre>
        </div>

        <div className="container"> </div>

        <div></div>

        <h2 className="gradient-buttons">FREE button generator 🚀</h2>
        <p className="mb-10">
          Create stylish and customizable buttons effortlessly with our CSS
          Button Generator. Tailor the appearance, color, and effects to suit
          your design needs, generating sleek and modern buttons for your web
          projects in seconds.
        </p>
        <section>
          <h2 className="gradient-buttons">Standard Buttons</h2>
          <div className="flex">
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="full"
                rounded="full"
                variant="primary"
              >
                <IoIosCode size={24} className="" /> Primary
              </Button>
            </DisplayButton>
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="full"
                rounded="full"
                variant="secondary"
              >
                Seondary
              </Button>
            </DisplayButton>
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="full"
                rounded="full"
                variant="success"
              >
                Success
              </Button>
            </DisplayButton>
          </div>
          <div className="flex">
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="full"
                rounded="full"
                variant="danger"
              >
                Danger
              </Button>
            </DisplayButton>
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="full"
                rounded="full"
                variant="info"
              >
                Info
              </Button>
            </DisplayButton>
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="full"
                rounded="full"
                variant="warning"
              >
                Warning
              </Button>
            </DisplayButton>
          </div>
        </section>

        <section>
          <h2 className="gradient-buttons">Outline Buttons</h2>
          <div className="flex">
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="outline"
                rounded="full"
                className="primary"
                // borderColor="linear-gradient(90deg, #f12711, #f5af19)"
                // backgroundColor="red"
              >
                Primary
              </Button>
            </DisplayButton>
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="outline"
                rounded="full"
                className="secondary"
                // borderColor="linear-gradient(90deg, #f12711, #f5af19)"
                // backgroundColor="red"
              >
                Seondary
              </Button>
            </DisplayButton>
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="outline"
                rounded="full"
                className="success"
                // borderColor="linear-gradient(90deg, #f12711, #f5af19)"
                // backgroundColor="red"
              >
                Success
              </Button>
            </DisplayButton>
          </div>
          <div className="flex">
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="outline"
                rounded="full"
                className="danger"
                // borderColor="linear-gradient(90deg, #f12711, #f5af19)"
                // backgroundColor="red"
              >
                Danger
              </Button>
            </DisplayButton>
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="outline"
                rounded="full"
                className="info"
                // borderColor="linear-gradient(90deg, #f12711, #f5af19)"
                // backgroundColor="red"
              >
                Info
              </Button>
            </DisplayButton>
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="outline"
                rounded="full"
                className="warning"
                // borderColor="linear-gradient(90deg, #f12711, #f5af19)"
                // backgroundColor="red"
              >
                Warning
              </Button>
            </DisplayButton>
          </div>
        </section>

        <section>
          <h2 className="gradient-buttons">Blur Hover</h2>
          <div className="flex">
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="full"
                rounded="none"
                className="blur-hover"
                variant="primary"
              >
                Primary
              </Button>
            </DisplayButton>
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="full"
                rounded="none"
                className="blur-hover"
                variant="secondary"
              >
                Seondary
              </Button>
            </DisplayButton>
            <DisplayButton>
              <Button
                target="_blank"
                buttonType="full"
                rounded="none"
                className="blur-hover"
                variant="success"
              >
                Success
              </Button>
            </DisplayButton>
          </div>
        </section>
      </div>
    </>
  );
}
