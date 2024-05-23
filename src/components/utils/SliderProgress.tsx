import { FC, RefObject } from "react";
import Relative from "@/components/layout/Relative";
import Absolute from "@/components/layout/Absolute";
import { useScroll, useTransform, motion } from "framer-motion";

type Props = {
  containerRef: RefObject<HTMLDivElement>;
};

const SliderProgress: FC<Props> = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: false,
  });
  // const scrollSpringed = useSpring(scrollYProgress, customSpringOption);
  const top = useTransform(scrollYProgress, [0, 1], ["0%", "100%"], {
    clamp: false,
  });

  return (
    <div className="row sm:col w-full h-full justify-center items-center">
      <Relative className="w-full sm:w-[2px] h-[2px] sm:h-full bg-yellow-500">
        <Absolute className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 aspect-square bg-yellow-500 rounded-full" />
        <Absolute className="top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 aspect-square bg-yellow-500 rounded-full" />
        <motion.div
          style={{ top }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 aspect-square border-2 border-yellow-500 bg-slate-900 rounded-full"
        >
          <Absolute className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 aspect-square bg-yellow-500 rounded-full" />
        </motion.div>
      </Relative>
    </div>
  );
};

export default SliderProgress;
