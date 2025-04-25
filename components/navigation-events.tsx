"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams ? `?${searchParams}` : ""}`;

    // Create custom events for navigation
    const startEvent = new CustomEvent("routeChangeStart", { detail: { url } });
    const endEvent = new CustomEvent("routeChangeComplete", {
      detail: { url },
    });

    // Dispatch start event immediately
    document.dispatchEvent(startEvent);

    // Dispatch end event after a delay to simulate loading
    const timeout = setTimeout(() => {
      document.dispatchEvent(endEvent);
    }, 800);

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return null;
}
