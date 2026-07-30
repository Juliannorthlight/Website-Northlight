"use client";

import { useEffect } from "react";

// Ensure the homepage always opens at the very top (the full-height hero),
// rather than the browser restoring a previous scroll position.
export function ScrollTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);
  return null;
}
