import { IButton } from "../button.interface";
import {
  invertedButtonThemeToHex,
  useButtonHoverAnimation,
} from "../button.logic";

const InvertButton = ({
  url,
  target,
  clickHandler,
  invertColorTheme = "light",
  className,
  children,
  boxShadow,
}: IButton) => {
  const { handleMouseEnter, handleMouseLeave, opacity, isHovered } =
    useButtonHoverAnimation();

  return (
    <a href={url} className="button-component" target={target}>
      <button
        onClick={clickHandler}
        className={`btn-invert ${boxShadow ? boxShadow : ""}`}
        style={{
          color: invertedButtonThemeToHex(invertColorTheme, false),
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          className="before"
          style={{
            inset: isHovered ? "0" : "2px",
            background: !isHovered
              ? invertedButtonThemeToHex(invertColorTheme, true)
              : invertedButtonThemeToHex(invertColorTheme, false),
          }}
        ></span>

        <span className={`after ${className}`} style={{ opacity }}></span>

        <span
          className="label"
          style={{
            color: isHovered
              ? invertedButtonThemeToHex(invertColorTheme, true)
              : invertedButtonThemeToHex(invertColorTheme, false),
          }}
        >
          <span className="d-flex gap-2 align-items-center lh-1 font-gotham-book">
            {children}
          </span>
        </span>
      </button>
    </a>
  );
};
export default InvertButton;
