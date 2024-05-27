// documents
import { homeType } from "~/studio/schema/home";
import { pageType } from "~/studio/schema/page";
import { settingsType } from "~/studio/schema/settings";

// blocks
import { contentBlockType } from "~/studio/schema/blocks/content";
import { blockContentSimpleType } from "~/studio/schema/blocks/content-simple";
import { formType } from "~/studio/schema/blocks/form";
import { heroType } from "~/studio/schema/blocks/hero";
import { imageGalleryType } from "~/studio/schema/blocks/image-gallery";
import { linkType } from "~/studio/schema/blocks/link";
import { seoType } from "~/studio/schema/blocks/seo";
import { videoType } from "~/studio/schema/blocks/video";
import { auxiliaryNavigationType } from "~/studio/schema/navs/auxiliary";
import { footerNavigationType } from "~/studio/schema/navs/footer";
import { headerNavigationType } from "~/studio/schema/navs/header";
import { navItemType } from "~/studio/schema/navs/nav-item";

export default [
  // blocks
  blockContentSimpleType,
  contentBlockType,
  formType,
  heroType,
  linkType,
  imageGalleryType,
  videoType,
  seoType,
  // navs
  navItemType,
  auxiliaryNavigationType,
  footerNavigationType,
  headerNavigationType,
  // documents
  homeType,
  pageType,
  settingsType,
];
