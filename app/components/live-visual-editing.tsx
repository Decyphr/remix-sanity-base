import { useLiveMode } from "@sanity/react-loader";
import { VisualEditing } from "@sanity/visual-editing/remix";

import { client } from "~/studio/client";

export default function LiveVisualEditing() {
  // Enable live queries using the client configuration
  useLiveMode({ client });

  return <VisualEditing />;
}
