import { Vector3 } from "@/types/types";
import { ClassValue } from "clsx";
import { MotionStyle } from "framer-motion";
import { ReactNode, RefObject } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Parallax from "./Parallax";

type Props = {
  style?: MotionStyle;
  className?: ClassValue;
  containerRef: RefObject<HTMLDivElement>;
  screenRef: RefObject<HTMLDivElement>;
  element: ReactNode;
  position?: Vector3;
  rotate?: number;
  rotateRandomed?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  autoRotateSpeedRandomed?: boolean;
  scale?: number;
  depthScaleStrength?: number;
  opacity?: number;
  depthOpacityStrength?: number;
  dof?: boolean;
  dofStrength?: number;
  amount?: number;
  spreadSize?: Vector3;
};

const Particle = ({
  className,
  style,
  containerRef,
  screenRef,
  element,
  position: _position = [50, 50, 0],
  rotate: _rotate = 0,
  rotateRandomed = false,
  autoRotate = false,
  autoRotateSpeed: _autoRotateSpeed = 1,
  autoRotateSpeedRandomed = false,
  scale: _scale = 1,
  depthScaleStrength = 1,
  opacity: _opacity = 1,
  depthOpacityStrength = 1,
  dof = false,
  dofStrength = 4,
  amount = 10,
  spreadSize = [0, 0, 0],
}: Props) => {
  return (
    <>
      <motion.div
        style={{ ...style }}
        className={cn(
          "absolute w-full h-screen top-0 left-0 pointer-events-none",
          [className]
        )}
      >
        {Array.from({ length: amount }).map((_, index) => {
          const position: Vector3 = [
            _position[0] + (Math.random() * 2 - 1) * spreadSize[0],
            _position[1] + (Math.random() * 2 - 1) * spreadSize[1],
            _position[2] + (Math.random() * 2 - 1) * spreadSize[2],
          ];

          const rotate = rotateRandomed
            ? (Math.random() * 2 - 1) * 360
            : _rotate;
          const autoRotateSpeed = autoRotateSpeedRandomed
            ? (Math.random() * 2 - 1) * _autoRotateSpeed
            : _autoRotateSpeed;

          const scale = _scale;
          const opacity = _opacity;
          return (
            <Parallax
              key={index}
              containerRef={containerRef}
              screenRef={screenRef}
              element={element}
              position={position}
              rotate={rotate}
              autoRotate={autoRotate}
              autoRotateSpeed={autoRotateSpeed}
              scale={scale}
              depthScaleStrength={depthScaleStrength}
              opacity={opacity}
              depthOpacityStrength={depthOpacityStrength}
              dof={dof}
              dofStrength={dofStrength}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default Particle;
