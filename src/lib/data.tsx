import { Contact, Skill, Work } from "@/types/types";
import work_jjson from "@/assets/logos/works/jjson.svg";
import work_khaikhong from "@/assets/logos/works/khaikhong.svg";
import work_valorant from "@/assets/logos/works/valorant.svg";
import work_jjson_bg from "@/assets/logos/works/jjson_bg.png";
import work_khaikhong_bg from "@/assets/logos/works/khaikhong_bg.png";
import work_valorant_bg from "@/assets/logos/works/valorant_bg.png";
import {
  SiFramer,
  SiGmail,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { FaCss3Alt, FaFacebook, FaGithub, FaHtml5 } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { RiNextjsFill } from "react-icons/ri";

export const logoLetters: ["n", "a", "t", "h"] = ["n", "a", "t", "h"];

export const skills: Skill[] = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
  },
  {
    name: "RestFul API",
    icon: <AiFillApi />,
  },
];

export const contacts: Contact[] = [
  {
    text: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/GURESPEX",
  },
  {
    text: "Gmail",
    icon: <SiGmail />,
    link: "mailto:natthanan12318@gmail.com",
  },
  {
    text: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/jj.natthanan",
  },
];

export const works: Work[] = [
  {
    title: "Valorant Agents API",
    date: new Date("01/01/2024"),
    image: { src: work_valorant_bg, alt: "Valorant Background" },
    logo: { src: work_valorant, alt: "Valorant Logo" },
    link: "https://gurespex.github.io/basic-api/",
  },
  {
    title: "JJSON",
    date: new Date("01/01/2024"),
    image: { src: work_jjson_bg, alt: "JJSON Background" },
    logo: { src: work_jjson, alt: "JJSON Logo" },
    link: "https://gurespex.github.io/jjson-portfolio/",
  },
  {
    title: "Khaikhong",
    date: new Date("01/01/2024"),
    image: { src: work_khaikhong_bg, alt: "Khaikhong Background" },
    logo: { src: work_khaikhong, alt: "Khaikhong Logo" },
    link: "https://gurespex.github.io/khaikhong/",
  },
];
