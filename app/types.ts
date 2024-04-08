import type { PortableTextBlock, SlugValue } from "sanity";

export interface HomeType {
  _createdAt: string; // ISO date string
  _id: string;
  _rev: string;
  _type: "home";
  _updatedAt: string; // ISO date string
  title: string;
}

export interface PageType {
  _createdAt: string; // ISO date string
  _id: string;
  _rev: string;
  _type: "page";
  _updatedAt: string; // ISO date string
  excerpt: string;
  pageBuilder: Array<HeroType | GalleryType | FormType | VideoType>;
  slug: SlugValue;
  title: string;
}

export interface SanityImageField {
  _type: "image";
  alt: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface HeroType {
  _key: string;
  _type: "hero";
  heading: string;
  image: SanityImageField;
  tagline: string;
}

export interface GalleryType {
  _key: string;
  _type: "gallery";
  heading: string;
  images: Array<SanityImageField>;
}

export interface FormType {
  _key: string;
  _type: "form";
  excerpt: Array<PortableTextBlock>;
  form: string;
  heading: string;
}

export interface VideoType {
  _key: string;
  _type: "video";
  heading: string;
  url: string;
}
