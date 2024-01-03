import EmptyButton from "./ChildComponents/EmptyButton";
import FullButton from "./ChildComponents/FullButton";
import InvertButton from "./ChildComponents/InvertButton";
import "./Button.scss";
import { IButton } from "./button.interface";

const Button = (props: IButton) => {
  const { buttonType } = props;

  if (buttonType === "full") {
    return <FullButton {...props} />;
  }
  // INVERT HAS TO BE REWRITTEN
  if (buttonType === "invert") {
    return <InvertButton {...props} />;
  }

  return <EmptyButton {...props} />;
};
export default Button;
