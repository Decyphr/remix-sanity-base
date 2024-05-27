import { useEffect, useState } from "react";
import { SANITY_STUDIO_PREVIEW_PATH } from "~/lib/constants";

export function ExitPreview() {
  const [inIframe, setInIframe] = useState(true);
  useEffect(() => {
    setInIframe(window.self !== window.top);
  }, []);

  return inIframe ? null : (
    <div className="pointer-events-none fixed inset-0 flex h-screen w-screen items-end justify-end p-2">
      <form
        className="pointer-events-auto"
        action={SANITY_STUDIO_PREVIEW_PATH}
        method="POST"
      >
        <button
          className="bg-black p-4 leading-none font-bold text-white"
          type="submit"
        >
          Exit Preview Mode
        </button>
      </form>
    </div>
  );
}
