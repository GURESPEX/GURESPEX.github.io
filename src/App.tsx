import Absolute from "@/components/layout/Absolute";
import Column from "@/components/layout/Column";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Letter from "@/components/Letter";
import SliderProgress from "@/components/utils/SliderProgress";
import { logoLetters } from "@/lib/data";
import { useEffect, useRef } from "react";
import SideBar from "@/components/SideBar";
import Particle from "@/components/utils/Particle";
import Header from "@/pages/Header";
import Works from "@/pages/Works";
import Lenis from "lenis";
import { motion } from "framer-motion";

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);

  const lenis = useRef<Lenis>();

  useEffect(() => {
    lenis.current = new Lenis({
      wrapper: containerRef.current || window,
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.current && lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full h-screen col sm:row p-4 gap-4 text-slate-950 bg-slate-950 overflow-hidden">
      <motion.div
        initial={{ y: "0" }}
        animate={{ y: "-100%" }}
        transition={{ delay: 1, duration: 1.2, ease: [0.1, 0.5, 0, 1] }}
        className="z-[99999] absolute top-0 left-0 w-full h-full bg-slate-950 pointer-events-none overflow-hidden"
      >
        <Column className="z-[1] justify-center items-center rounded-xl" full>
          <div className="w-full max-w-48 sm:max-w-96 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {logoLetters.map((letter, index) => (
              <Letter
                className="logoLetter"
                key={index}
                letter={letter}
                color="#0F172A"
              />
            ))}
          </div>
        </Column>
      </motion.div>
      <Absolute className="z-[9999]" full>
        <Particle
          containerRef={containerRef}
          screenRef={containerRef}
          element={
            <div className="w-1 aspect-square rounded-full bg-[#FF0052]"></div>
          }
          position={[50, 0, 50]}
          spreadSize={[50, 100, 25]}
          amount={5}
          scale={25}
          opacity={0.5}
          depthOpacityStrength={0.5}
          dof
          dofStrength={8}
        />
      </Absolute>
      <Column className="hidden sm:flex order-2 sm:order-1 gap-4">
        <div className="flex-1 row sm:col h-16 sm:h-auto w-auto sm:w-16 gap-2 p-2 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="hidden row sm:col flex-1 py-6">
            <SliderProgress containerRef={containerRef} />
          </div>
        </div>
        <div
          style={{
            transitionTimingFunction: "cubic-bezier(0.1, 0.5, 0, 1)",
          }}
          onClick={() => {
            lenis.current && lenis.current.scrollTo("#header");
          }}
          className="sm:flex hidden row sm:col h-16 sm:h-auto w-auto sm:w-16 gap-2 p-2 bg-[#c0003d] hover:bg-[#FF0052] active:bg-[#c0003d] border border-[#FF0052] rounded-xl transition-all duration-500 hover:cursor-pointer"
        >
          <div className="hidden h-full sm:h-auto w-auto sm:w-full aspect-square sm:grid grid-cols-2 gap-1 p-2 rounded-sm">
            {logoLetters.map((letter, index) => (
              <Letter
                className="logoLetter"
                key={index}
                letter={letter}
                color="#fff"
              />
            ))}
          </div>
        </div>
      </Column>
      <Column className="order-1 sm:order-2 flex-1 gap-4 rounded-xl overflow-hidden">
        <Column className="flex-1 overflow-hidden">
          <Container
            ref={containerRef}
            id="container"
            className="space-y-4 no-scrollbar rounded-xl overflow-auto overflow-x-hidden"
            full
          >
            <Section ref={headerRef} id="header" full>
              <Header containerRef={containerRef} screenRef={headerRef} />
            </Section>
            <Section ref={worksRef} id="works" full>
              <Works />
            </Section>
          </Container>
        </Column>
      </Column>
      <SideBar />
    </div>
  );
};

export default App;
