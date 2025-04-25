"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function CategoryFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "ALL" },
    { id: "celebrity", name: "CELEBRITY" },
    { id: "beauty", name: "BEAUTY" },
    { id: "fashion", name: "FASHION" },
  ];

  useEffect(() => {
    const category = searchParams.get("category") || "all";
    setActiveCategory(category);
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams);

    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }

    // Dispatch custom navigation event
    document.dispatchEvent(
      new CustomEvent("routeChangeStart", {
        detail: { url: `${pathname}?${params.toString()}` },
      })
    );

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center space-x-8 mb-12 mt-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.id)}
          className={`text-base font-medium tracking-wider transition-colors ${
            activeCategory === category.id
              ? "text-black"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
