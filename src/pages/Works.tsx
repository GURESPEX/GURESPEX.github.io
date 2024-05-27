import Absolute from "@/components/layout/Absolute";
import Column from "@/components/layout/Column";
import Page from "@/components/layout/Page";
import Row from "@/components/layout/Row";
import { works } from "@/lib/data";
import Marquee from "react-fast-marquee";
import { FaGithub } from "react-icons/fa";

const Works = () => {
  return (
    <Page className="col rounded-xl" full>
      <Column className="flex-1 gap-2">
        <Marquee
          className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-[#FF0052] text-[4rem] font-bold uppercase"
          autoFill
        >
          <div
            style={{ lineHeight: "74%" }}
            className="text-center sm:text-start px-4"
          >
            Works
          </div>
        </Marquee>
        <Column className="flex-1 gap-2">
          <div className="col md:row flex-1 gap-2">
            {works.map(({ title, image, link }, index) => (
              <a
                key={index}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.1, 0.5, 0, 1)",
                }}
                href={link}
                target="_blank"
                className="relative flex-1 hover:flex-1 md:hover:flex-[4] h-full col bg-black border border-slate-800 rounded-xl transition-all duration-500 overflow-hidden"
              >
                <Absolute
                  className="z-10 opacity-100 hover:opacity-0 bg-slate-950 mix-blend-color"
                  full
                />
                <Absolute className="z-10" full>
                  <Column className="w-full h-full justify-end">
                    <Row className="gap-4 p-4 bg-gradient-to-r from-slate-800 to-transparent">
                      <div
                        style={{ lineHeight: "74%" }}
                        className="text-md text-white font-light uppercase line-clamp-1"
                      >
                        {title}
                      </div>
                    </Row>
                  </Column>
                </Absolute>
                <img
                  src={image?.src}
                  alt={image?.alt}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
          <a
            href="https://github.com/GURESPEX"
            target="_blank"
            style={{
              transitionTimingFunction: "cubic-bezier(0.1, 0.5, 0, 1)",
            }}
            className="row bg-[#c0003d] hover:bg-[#FF0052] active:bg-[#c0003d] border border-[#FF0052] text-white p-2 gap-2 rounded-xl transition-all duration-500"
          >
            <Column className="gap-2 p-2">
              <Row className="items-center gap-2">
                <div className="text-md font-light uppercase">
                  See other works on
                </div>
              </Row>
              <Row className="items-center gap-4 text-3xl">
                <FaGithub />
                <div>GURESPEX</div>
              </Row>
            </Column>
          </a>
        </Column>
      </Column>
    </Page>
  );
};

export default Works;
