import groq from "groq";

export const SITE_SETTINGS_QUERY = groq`*[_type == "settings"][0]{
  siteTitle,
  description,
  contactEmail,
  contactPhone,
  socialMedia,
  logo {
    asset->{
      url
    }
  },
  siteSEOSettings
}`;

export const HOME_QUERY = groq`*[_type == "home"][0] {
  title,
  excerpt,
  pageBuilder,
  seo,
}`;

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0] {
  title,
  excerpt,
  featureImage,
  pageBuilder,
  seo,
}`;
