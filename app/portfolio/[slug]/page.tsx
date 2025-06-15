import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolioItemBySlug, getRelatedPortfolioItems } from "@/lib/data";
import RelatedItems from "@/components/related-items";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";
import ImageLightbox from "@/components/ImageLightbox";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const item = await getPortfolioItemBySlug(slug);

  if (!item) {
    return {
      title: "Portfolio Item Not Found",
    };
  }

  return {
    title: item.title,
    description: item.description,
  };
}

export default async function PortfolioItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const item = await getPortfolioItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = await getRelatedPortfolioItems(
    item.id,
    item.categories[0]
  );

  return (
    <Suspense fallback={null}>
      <div className="bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb navigation */}
          <nav className="mb-8 text-sm">
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-gray-600 hover:text-black">
                HOME
              </Link>
              <span className="text-gray-400">»</span>
              <Link href="/" className="text-gray-600 hover:text-black">
                PORTFOLIO
              </Link>
              <span className="text-gray-500">»</span>
              <span className="text-gray-500">{item.title}</span>
            </div>
          </nav>

          {/* Portfolio item title */}
          <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-light text-center my-12">
            {item.title}
          </h1>

          {/* Portfolio item content */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {item.galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={`${item.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 4} // Prioritize loading the first 4 images
                />
              </div>
            ))}
          </div> */}
          <ImageLightbox images={item.galleryImages} />

          {/* Related items */}
          {relatedItems.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-light mb-8 text-black">
                Related Work
              </h2>
              <RelatedItems items={relatedItems} />
            </div>
          )}
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
