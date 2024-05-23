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

type ContainerRef = HTMLDivElement | null;
type ContainerProps = PropsWithChildren & Props;

const Container = forwardRef<ContainerRef, ContainerProps>(
  ({ id, style, className, screen = false, full = false, children }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        id={id}
        className={cn("overflow-auto", [
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

export default motion(Container);
