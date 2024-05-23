import { FC, useEffect, useRef, useState } from "react";
import Column from "@/components/layout/Column";
import Row from "@/components/layout/Row";
import { motion, Variants } from "framer-motion";
import { MdArrowRight } from "react-icons/md";
import profile from "@/assets/images/profile/profile.jpg";
import Absolute from "@/components/layout/Absolute";
import { contacts, skills } from "@/lib/data";
import Lenis from "lenis";

const SideBar: FC = () => {
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: sideBarRef.current || window,
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [isShow, setIsShow] = useState<boolean>(false);
  const variants: Variants = {
    show: { x: "-100%" },
    hide: { x: "0%" },
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setIsShow(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div
        initial={false}
        animate={isShow ? "show" : "hide"}
        variants={variants}
        transition={{ ease: [0, 0, 0, 1], duration: 0.5 }}
        style={{
          maxWidth: "100vw",
          transitionTimingFunction: "cubic-bezier(0, 0, 0, 1)",
        }}
        className="z-[999] order-3 absolute xl:relative top-0 left-full xl:left-0 -translate-x-full xl:translate-x-0 w-full sm:w-[512px] h-full col p-4 xl:p-0 transition-[width] duration-500"
      >
        <Column className="w-full h-full gap-2 p-2 bg-slate-900 border border-slate-800 rounded-xl">
          <Row className="flex xl:hidden h-6 gap-2 justify-end" />
          <div
            ref={sideBarRef}
            className="overflow-auto scrollbar-styled rounded-sm flex-1"
          >
            <Column className="flex-1 gap-2 pr-2">
              <Row className="relative w-full h-96 justify-center items-center bg-slate-900 border border-slate-800 rounded-sm overflow-hidden">
                <Absolute
                  className="z-10 opacity-100 hover:opacity-0 bg-slate-950 mix-blend-color"
                  full
                />
                <Absolute className="z-10" full>
                  <Column className="w-full h-full justify-end">
                    <Column className="p-4 bg-gradient-to-r from-slate-800 to-transparent">
                      <div className="text-md text-white font-light uppercase">
                        Hi there! my name is
                      </div>
                      <div className="text-3xl text-yellow-500 uppercase">
                        Natthanan Thongchomphu
                      </div>
                    </Column>
                  </Column>
                </Absolute>
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover grayscale"
                  src={profile}
                  alt="Profile Image"
                />
              </Row>
              <Row className="w-full rounded-sm">
                <Column className="p-4 text-white text-md font-light uppercase">
                  <div className="pl-4 border-l-2 border-yellow-500">
                    I'm a student of College of Computing Khon Kaen University
                    who is interested in Front-End development.
                  </div>
                </Column>
              </Row>
              <Column className="flex-1 w-full gap-4 p-2 text-white">
                <div className="text-3xl uppercase text-yellow-500">Skills</div>
                <div className="flex-1 grid grid-cols-1 gap-2">
                  {skills.map(({ name, icon }, index) => (
                    <Row
                      key={index}
                      className="h-12 gap-2 p-2 items-center rounded-sm border border-slate-800"
                    >
                      <Row className="h-full aspect-square justify-center items-center text-2xl">
                        {icon}
                      </Row>
                      <div>{name}</div>
                    </Row>
                  ))}
                </div>
              </Column>
            </Column>
          </div>

          <Column className="gap-2">
            <Row className="w-full justify-center items-center gap-4">
              {contacts.map(({ icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0, 0, 0, 1)",
                  }}
                  className="w-8 aspect-square row justify-center items-center border border-transparent text-white hover:bg-slate-800 active:bg-slate-700 rounded-sm transition-all duration-500"
                >
                  {icon}
                </a>
              ))}
            </Row>
          </Column>
        </Column>
      </motion.div>
      <div className="block xl:hidden absolute top-0 left-full -translate-x-full p-4 z-[9999]">
        <div className="p-2 rounded-xl">
          <div
            style={{
              transitionTimingFunction: "cubic-bezier(0, 0, 0, 1)",
            }}
            className="relative w-6 aspect-square row justify-center items-center bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-600 border border-yellow-500 text-yellow-900 rounded-sm hover:cursor-pointer transition-all duration-500"
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            <motion.div
              initial={false}
              animate={{ scaleX: isShow ? -1 : 1 }}
              transition={{ ease: [0, 0, 0, 1], duration: 0.5 }}
            >
              <MdArrowRight className="text-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
