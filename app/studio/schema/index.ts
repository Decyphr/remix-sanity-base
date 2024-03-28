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
import { textWithIllustrationType } from "~/studio/schema/blocks/text-with-illustration";
import { videoType } from "~/studio/schema/blocks/video";

export default [
  // blocks
  blockContentSimpleType,
  blockContentType,
  formType,
  heroType,
  imageGalleryType,
  textWithIllustrationType,
  videoType,
  // documents
  homeType,
  pageType,
  settingsType,
];
