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

type PageRef = HTMLDivElement | null;
type PageProps = PropsWithChildren & Props;

const Page = forwardRef<PageRef, PageProps>(
  ({ id, style, className, screen = false, full = false, children }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        id={id}
        className={cn("relative", [
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

export default motion(Page);
