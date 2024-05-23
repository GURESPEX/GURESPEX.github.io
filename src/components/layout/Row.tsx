import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { motion } from "framer-motion";
import { CSSProperties, forwardRef, PropsWithChildren } from "react";

type Props = {
  id?: string;
  style?: CSSProperties;
  className?: ClassValue;
  screen?: boolean;
  full?: boolean;
};

type RowRef = HTMLDivElement | null;
type RowProps = PropsWithChildren & Props;

const Row = forwardRef<RowRef, RowProps>(
  ({ id, style, className, screen = false, full = false, children }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        id={id}
        className={cn("flex flex-row", [
          className,
          screen && "w-full h-screen",
          full && "w-full h-full",
        ])}
      >
        {children}
      </div>
    );
  }
);

export default motion(Row);
