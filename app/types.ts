import type { PortableTextBlock, SlugValue } from "sanity";

export interface SanityImageField {
  alt: string;
  _type: string;
  asset: {
    _ref: string;
    _type: "reference";
    url: string;
  };
}

export interface SanityLink {
  _type: "link";
  isExternalLink: boolean;
  newTab: boolean;
  text: string;
  url?: URL;
  internalLink?: {
    _ref: string;
    _type: "reference";
  };
}

export interface SanitySEOType {
  title: string;
  description: string;
  keywords: Array<string>;
  image: SanityImageField;
  noindex: boolean;
}

export interface SiteSettingsType {
  siteTitle: string;
  description: string | null;
  defaultSeo: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  socialMedia: {
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    linkedin: string | null;
  };
  logo: SanityImageField;
}

export interface HomeType {
  title: string;
  excerpt: string | null;
  pageBuilder: Array<HeroType | GalleryType | FormType | VideoType> | null;
  seo: SanitySEOType;
}

export interface PageType {
  title: string;
  excerpt: string | null;
  pageBuilder: Array<HeroType | GalleryType | FormType | VideoType> | null;
  slug: SlugValue;
}

interface SanityPageBuilderBlock {
  _key: string;
  _type: "hero" | "gallery" | "form" | "video";
}

export interface HeroType extends SanityPageBuilderBlock {
  heading: string;
  image: SanityImageField;
  tagline: string;
}

export interface GalleryType extends SanityPageBuilderBlock {
  heading: string;
  images: Array<SanityImageField>;
}

export interface FormType extends SanityPageBuilderBlock {
  excerpt: Array<PortableTextBlock>;
  form: string;
  heading: string;
}

export interface VideoType extends SanityPageBuilderBlock {
  heading: string;
  url: string;
}
