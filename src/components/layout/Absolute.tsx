import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { motion } from "framer-motion";
import { CSSProperties, forwardRef, PropsWithChildren } from "react";

type Props = {
  id?: string;
  style?: CSSProperties;
  className?: ClassValue;
  interacted?: boolean;
  screen?: boolean;
  full?: boolean;
};

type AbsoluteRef = HTMLDivElement | null;
type AbsoluteProps = PropsWithChildren & Props;

const Absolute = forwardRef<AbsoluteRef, AbsoluteProps>(
  (
    {
      id,
      style,
      className,
      interacted = false,
      screen = false,
      full = false,
      children,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={style}
        id={id}
        className={cn("absolute top-0 left-0", [
          className,
          interacted || "pointer-events-none",
          screen && "w-full h-screen",
          full && "w-full h-full",
        ])}
      >
        {children}
      </div>
    );
  }
);

export default motion(Absolute);
