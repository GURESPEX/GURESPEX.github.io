import Absolute from "@/components/layout/Absolute";
import Column from "@/components/layout/Column";
import Page from "@/components/layout/Page";
import Row from "@/components/layout/Row";
import Letter from "@/components/Letter";
import Parallax from "@/components/utils/Parallax";
import Particle from "@/components/utils/Particle";
import { logoLetters } from "@/lib/data";
import { FC, RefObject, useRef } from "react";

type Props = {
  containerRef: RefObject<HTMLDivElement>;
  screenRef: RefObject<HTMLDivElement>;
};

const Header: FC<Props> = ({ containerRef, screenRef }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Page
        ref={pageRef}
        className="col bg-slate-950 border border-slate-900 rounded-xl"
        full
      >
        <Column className="z-[1] justify-center items-center rounded-xl" full>
          <div className="w-full max-w-48 sm:max-w-96 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {logoLetters.map((letter, index) => (
              <Letter
                className="logoLetter"
                key={index}
                letter={letter}
                color="#EAB308"
              />
            ))}
          </div>
        </Column>
        <Absolute className="overflow-hidden" full>
          <Parallax
            containerRef={containerRef}
            screenRef={screenRef}
            element={
              <Column className="gap-4">
                {Array.from({ length: 10 }).map((_, index) => (
                  <Row
                    key={index}
                    style={{ lineHeight: "74%" }}
                    className="text-slate-900 text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] font-black uppercase"
                  >
                    {index % 2 === 0 ? <>Portfolio</> : <>folioPort</>}
                  </Row>
                ))}
              </Column>
            }
            position={[50, 50, -25]}
            depthScaleStrength={0}
            depthOpacityStrength={0}
          />
          <Particle
            containerRef={containerRef}
            screenRef={screenRef}
            element={
              <div className="w-1 aspect-square rounded-full bg-yellow-500"></div>
            }
            position={[50, 50, -25]}
            spreadSize={[50, 50, 25]}
            amount={25}
            scale={1}
            depthOpacityStrength={0}
          />
          <Particle
            containerRef={containerRef}
            screenRef={screenRef}
            element={<div className="w-16 aspect-square bg-slate-900"></div>}
            position={[50, 50, -50]}
            spreadSize={[50, 50, 50]}
            amount={25}
            scale={1}
            rotate={45}
            rotateRandomed
            autoRotate
            autoRotateSpeed={0.05}
            autoRotateSpeedRandomed
            depthOpacityStrength={0}
          />
          {/* <Particle
            containerRef={containerRef}
            screenRef={screenRef}
            element={<Window />}
            position={[50, 50, -100]}
            spreadSize={[50, 50, 100]}
            amount={5}
            scale={1}
            depthOpacityStrength={0}
            depthScaleStrength={0}
          /> */}
        </Absolute>
      </Page>
    </>
  );
};

export default Header;
