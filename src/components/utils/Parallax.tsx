import { cn } from "@/lib/utils";
import { Vector3 } from "@/types/types";
import { ClassValue } from "clsx";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValue,
  MotionStyle,
  useTime,
} from "framer-motion";
import { FC, ReactNode, RefObject } from "react";

type Props = {
  style?: MotionStyle;
  className?: ClassValue;
  containerRef: RefObject<HTMLDivElement>;
  screenRef: RefObject<HTMLDivElement>;
  element: ReactNode;
  position?: Vector3;
  rotate?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  scale?: number;
  depthScaleStrength?: number;
  opacity?: number;
  depthOpacityStrength?: number;
  dof?: boolean;
  dofStrength?: number;
};

const Parallax: FC<Props> = ({
  className,
  style,
  containerRef,
  screenRef,
  element,
  position = [50, 50, 0],
  rotate: _rotate = 0,
  autoRotate = false,
  autoRotateSpeed = 1,
  scale: _scale = 1,
  depthScaleStrength = 1,
  opacity: _opacity = 1,
  depthOpacityStrength = 1,
  dof = false,
  dofStrength = 4,
}) => {
  const parallaxFunction = (x: number, negaInf: number, atZero: number) => {
    const y = -(1.03 ** x) * (negaInf - atZero) + negaInf;
    return y;
  };
  // parallaxFunction(position[2], 3, 1)
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: screenRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  // const topSpringed = useSpring(scrollYProgress, customSpringOption);
  const top = useTransform(
    scrollYProgress,
    [0.5, 1],
    [
      `${position[1]}%`,
      `${position[1] + parallaxFunction(position[2], 96.4, 0)}%`,
    ],
    { clamp: false }
  );
  const _left = useMotionValue(position[0]);
  const left = useTransform(_left, [0, 1], [`0%`, `1%`], { clamp: false });

  const time = useTime();
  const rotate = useTransform(
    time,
    [0, autoRotate ? 1000 / autoRotateSpeed : 0],
    [_rotate, _rotate + 360],
    {
      clamp: false,
    }
  );

  const scale =
    _scale * parallaxFunction(position[2], 1 - depthScaleStrength, 1);

  const opacity =
    _opacity * parallaxFunction(position[2], 1 - depthOpacityStrength, 1);

  return (
    <motion.div
      className={cn(className)}
      style={{
        position: "absolute",
        top,
        left,
        rotate,
        scale,
        opacity,
        translateX: "-50%",
        translateY: "-50%",
        // zIndex: position[2],
        filter: `blur(${
          dof ? (dofStrength * Math.abs(position[2])) / 100 : 0
        }px)`,
        ...style,
      }}
    >
      {element}
    </motion.div>
  );
};

export default Parallax;
