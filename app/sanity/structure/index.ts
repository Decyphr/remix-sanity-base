import { Settings } from "lucide-react";
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
      // Singleton, site settings config
      S.documentListItem()
        .schemaType("settings")
        .icon(Settings)
        .id("settings")
        .title("Site Settings"),
      S.divider(),
    ]);

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `settings`:
      return S.document().views([S.view.form()]);
    default:
      return S.document().views([S.view.form()]);
  }
};
