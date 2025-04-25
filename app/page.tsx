import { Suspense } from "react";
import CategoryFilter from "@/components/category-filter";
import PortfolioGrid from "@/components/portfolio-grid";
import { getPortfolioItems } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Home() {
  const portfolioItems = await getPortfolioItems();

  return (
    <div className="bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 ">
        <h1 className="sr-only">Portfolio Gallery</h1>

        <Suspense
          fallback={
            <div className="text-center py-10">Loading categories...</div>
          }
        >
          <CategoryFilter />
        </Suspense>

        <Suspense
          fallback={
            <div className="text-center py-20">Loading portfolio items...</div>
          }
        >
          <PortfolioGrid items={portfolioItems} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
