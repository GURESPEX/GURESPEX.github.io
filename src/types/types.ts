import { ReactNode } from "react";

export type Image = {
  src: string;
  alt: string;
};

export type Skill = {
  name: string;
  icon?: ReactNode;
};

export type Menu = {
  text: string;
  toId?: string;
  icon?: ReactNode;
};

export type Contact = {
  text: string;
  icon?: ReactNode;
  link?: string;
};

export type Work = {
  title: string;
  date?: Date;
  image?: Image;
  logo?: Image;
  link?: string;
};

export type Vector2 = [number, number];

export type Vector3 = [number, number, number];
