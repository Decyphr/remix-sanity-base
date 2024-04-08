// documents
import { homeType } from "~/studio/schema/home";
import { pageType } from "~/studio/schema/page";
import { settingsType } from "~/studio/schema/settings";

// blocks
import { blockContentType } from "~/studio/schema/blocks/block-content";
import { blockContentSimpleType } from "~/studio/schema/blocks/block-content-simple";
import { formType } from "~/studio/schema/blocks/form";
import { heroType } from "~/studio/schema/blocks/hero";
import { imageGalleryType } from "~/studio/schema/blocks/image-gallery";
import { linkType } from "~/studio/schema/blocks/link";
import { videoType } from "~/studio/schema/blocks/video";
import { auxiliaryNavigationType } from "~/studio/schema/navs/auxiliary";
import { footerNavigationType } from "~/studio/schema/navs/footer";
import { headerNavigationType } from "~/studio/schema/navs/header";
import { navItemType } from "~/studio/schema/navs/nav-item";

export default [
  // blocks
  blockContentSimpleType,
  blockContentType,
  formType,
  heroType,
  linkType,
  imageGalleryType,
  videoType,
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
