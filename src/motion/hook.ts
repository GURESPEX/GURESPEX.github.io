import {
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { customSpringOption } from "@/motion/option";

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [0, distance]);
};

export const useSmoothScroll = (
  container: React.RefObject<HTMLElement>,
  strength: number = 100
) => {
  const { scrollYProgress } = useScroll({ container });
  const scrollSmooth = useSpring(scrollYProgress, customSpringOption);
  const scrollVelocitied = useVelocity(scrollSmooth);
  const scrollTransformed = useTransform(
    scrollVelocitied,
    [0, 1],
    [0, -strength],
    {
      clamp: false,
    }
  );
  return { y: scrollTransformed };
};
