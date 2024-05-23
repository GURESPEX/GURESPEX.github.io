import { motion } from "framer-motion";
import { forwardRef } from "react";

type Props = {
  letter: "n" | "a" | "t" | "h";
  color: string;
  className?: string;
};

type LetterRef = SVGSVGElement;
type LetterProps = Props;

const Letter = forwardRef<LetterRef, LetterProps>(
  ({ letter, color, className }, ref) => {
    const letters = {
      n: (
        <path
          style={{ fill: color }}
          d="M500,249.5V500.25H333.33V250A83.33,83.33,0,0,0,250,166.67H166.67V500H0V0H250C387.9,0,499.73,111.66,500,249.5Z"
        />
      ),
      a: (
        <path
          style={{ fill: color }}
          d="M1000,250V500H833.33V416.67a83.33,83.33,0,1,0-166.66,0V500H500V250C500,111.93,611.93,0,750,0S1000,111.93,1000,250Z"
          transform="translate(-500)"
        />
      ),
      t: (
        <polygon
          style={{ fill: color }}
          points="500 0 0 0 0 166.67 166.67 166.67 166.67 500 333.33 500 333.33 166.67 500 166.67 500 0"
        />
      ),
      h: (
        <polygon
          style={{ fill: color }}
          points="333.33 0 333.33 166.67 166.67 166.67 166.67 0 0 0 0 500 166.67 500 166.67 333.33 333.33 333.33 333.33 500 500 500 500 0 333.33 0"
        />
      ),
    };
    return (
      <svg
        ref={ref}
        className={className}
        id="Layer_5"
        data-name="Layer 5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <rect width="500" height="500" style={{ fill: "none" }} />
        {letters[letter]}
      </svg>
    );
  }
);

export default motion(Letter);
