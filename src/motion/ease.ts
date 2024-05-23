import { cubicBezier } from "framer-motion";

export const cirIn = cubicBezier(0, 0, 0, 1);
export const cirOut = cubicBezier(0, 0, 1, 0);

export const powIn = cubicBezier(0, 0.5, 0, 1);
export const powOut = cubicBezier(0.5, 0, 1, 0);
