import { IButton } from "../button.interface";
import { useButtonHoverAnimation } from "../button.logic";

const FullButton = ({
  url,
  target,
  className,
  onClick,
  children,
  boxShadow,
  rounded,
  borderColor,
  backgroundColor,
  variant,
  backgroundColorHover,
  borderColorHover,
  fontColor,
}: IButton) => {
  const { handleMouseEnter, handleMouseLeave, opacity } =
    useButtonHoverAnimation();
  console.log("🚀 ~ borderColor:", borderColor);

  return (
    <button href={url} className="button-component" target={target}>
      <div
        onClick={onClick}
        className={`btn-full ${variant} ${className} ${
          boxShadow ? boxShadow : ""
        } rounded-${rounded}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          background: borderColor,
          color: fontColor,
        }}
      >
        <span
          className={`before ${variant} ${className}`}
          style={{
            background: backgroundColor,
          }}
        ></span>
        <span
          className={`after ${variant} ${className}`}
          style={{
            opacity,
            background: backgroundColorHover,
            border: `1px solid ${borderColorHover}`,
          }}
        ></span>
        <span className="d-flex justify-center gap-1  align-items-center lh-1 font-gotham-book flex">
          {children}
        </span>
      </div>
    </button>
  );
};
export default FullButton;
