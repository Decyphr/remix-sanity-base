import { HomeIcon, SettingsIcon } from "lucide-react";
import type {
  DefaultDocumentNodeResolver,
  StructureResolver,
} from "sanity/structure";

// TODO: Handle OG preview
// import OGPreview from '~/sanity/components/OGPreview'
// import {resolveOGUrl} from '~/sanity/structure/resolveOGUrl'

export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      // Singleton, homepage
      S.listItem()
        .title("Homepage")
        .icon(HomeIcon)
        .child(S.document().schemaType("home").documentId("home")),
      // Document list, all other documents
      ...S.documentTypeListItems().filter(
        (listItem) => !["home", "settings"].includes(listItem.getId()!)
      ),
      S.divider(),
      // Singleton, site settings config
      S.listItem()
        .title("Settings")
        .icon(SettingsIcon)
        .child(S.document().schemaType("settings").documentId("settings")),
    ]);

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `home`:
      return S.document().views([S.view.form()]);
    default:
      return S.document().views([S.view.form()]);
  }
};
