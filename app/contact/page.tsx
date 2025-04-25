import ContactLinks from "@/components/contact-links";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense
      fallback={
        <div className="text-center py-10">Loading Contact Links...</div>
      }
    >
      <ContactLinks />
    </Suspense>
  );
}
