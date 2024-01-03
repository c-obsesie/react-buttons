import { IButton } from "../button.interface";
import { useButtonHoverAnimation } from "../button.logic";

const EmptyButton = ({
  url,
  target,
  className,
  clickHandler,
  children,
  boxShadow,
  rounded,
}: IButton) => {
  const { handleMouseEnter, handleMouseLeave, opacity } =
    useButtonHoverAnimation();

  return (
    <a href={url} className="button-component" target={target}>
      <button
        onClick={clickHandler}
        className={`btn-empty ${boxShadow ? boxShadow : ""} rounded-${rounded}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className={`before ${className}`}></span>
        <span className={`after ${className}`} style={{ opacity }}></span>
        <span className="d-flex gap-2 align-items-center lh-1 font-gotham-book">
          {children}
        </span>
      </button>
    </a>
  );
};
export default EmptyButton;
