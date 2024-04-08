import {
  AppWindowIcon,
  HomeIcon,
  MenuIcon,
  PanelBottomIcon,
  PanelTopIcon,
  SettingsIcon,
} from "lucide-react";
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
      ...S.documentTypeListItems().filter((listItem) =>
        ["page"].includes(listItem.getId()!)
      ),
      S.divider(),
      S.listItem()
        .title("Navigation")
        .icon(MenuIcon)
        .child(
          S.list()
            .title("Navigation")
            .items([
              S.listItem()
                .title("Header")
                .icon(PanelTopIcon)
                .child(
                  S.document()
                    .title("Header Navigation")
                    .schemaType("headerNavigation")
                    .documentId("headerNavigation")
                ),
              S.listItem()
                .title("Footer")
                .icon(PanelBottomIcon)
                .child(
                  S.document()
                    .title("Footer Navigation")
                    .schemaType("footerNavigation")
                    .documentId("footerNavigation")
                ),
              S.listItem()
                .title("Auxiliary")
                .icon(AppWindowIcon)
                .child(
                  S.document()
                    .title("Auxiliary Navigation")
                    .schemaType("auxiliaryNavigation")
                    .documentId("auxiliaryNavigation")
                ),
            ])
        ),
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
