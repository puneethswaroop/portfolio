import type { PortfolioItem } from "./types";

// This would typically come from a database or API
const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "Marie Claire Special Edition",
    slug: "marie-claire-special-edition",
    description: "Special edition photoshoot for Marie Claire magazine",
    imageUrl: "/1.jpg",
    categories: ["fashion", "celebrity"],
    publication: "marie claire",
    galleryImages: [
      { url: "/1.jpg" },
      { url: "/2.jpg" },
      { url: "/3.jpg" },
      { url: "/4.jpg" },
    ],
  },
  {
    id: "2",
    title: "Spotted Pattern Editorial",
    slug: "spotted-pattern-editorial",
    description: "Fashion editorial featuring spotted pattern designs",
    imageUrl: "/2.jpg",
    categories: ["fashion"],
    galleryImages: [
      { url: "/spotted-elegance.png" },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with polka dot outfit",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with animal print",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with textured clothing",
      },
    ],
  },
  {
    id: "3",
    title: "Evening Elegance",
    slug: "evening-elegance",
    description: "Elegant evening wear photoshoot",
    imageUrl: "/3.jpg",
    categories: ["fashion", "beauty"],
    galleryImages: [
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with evening gown",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with elegant dress",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with formal attire",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with luxury clothing",
      },
    ],
  },
  {
    id: "4",
    title: "Summer Collection",
    slug: "summer-collection",
    description: "Bright and vibrant summer collection",
    imageUrl: "/4.jpg",
    categories: ["fashion"],
    galleryImages: [
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with summer outfit",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with beach wear",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with light clothing",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with colorful dress",
      },
    ],
  },
  {
    id: "5",
    title: "Natural Beauty",
    slug: "natural-beauty",
    description: "Natural beauty photoshoot highlighting skin care",
    imageUrl: "/5.jpg",
    categories: ["beauty"],
    publication: "BEAUTY INC",
    galleryImages: [
      {
        url: "/placeholder.svg?height=800&width=600&query=beauty model with natural makeup",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=beauty model with glowing skin",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=beauty model with minimal makeup",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=beauty model with fresh face",
      },
    ],
  },
  {
    id: "6",
    title: "Celebrity Spotlight",
    slug: "celebrity-spotlight",
    description: "Celebrity feature photoshoot",
    imageUrl:
      "/placeholder.svg?height=800&width=600&query=celebrity portrait professional",
    categories: ["celebrity"],
    galleryImages: [
      {
        url: "/placeholder.svg?height=800&width=600&query=celebrity portrait professional",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=celebrity photoshoot studio",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=celebrity editorial photography",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=celebrity fashion shoot",
      },
    ],
  },
  {
    id: "7",
    title: "Bold Makeup Trends",
    slug: "bold-makeup-trends",
    description: "Exploring bold and colorful makeup trends",
    imageUrl:
      "/placeholder.svg?height=800&width=600&query=beauty model with colorful makeup",
    categories: ["beauty"],
    galleryImages: [
      {
        url: "/placeholder.svg?height=800&width=600&query=beauty model with colorful makeup",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=beauty model with bold eyeshadow",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=beauty model with artistic makeup",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=beauty model with vibrant lipstick",
      },
    ],
  },
  {
    id: "8",
    title: "Stacey Schenk & Soumya Kumar",
    slug: "stacey-schenk-soumya-kumar",
    description: "Portfolio featuring Stacey Schenk and Soumya Kumar",
    imageUrl:
      "/placeholder.svg?height=800&width=600&query=professional portrait with neutral background",
    categories: ["celebrity", "beauty"],
    galleryImages: [
      {
        url: "/placeholder.svg?height=800&width=600&query=professional portrait with neutral background",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=professional portrait with studio lighting",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=professional portrait with elegant styling",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=professional portrait with minimal makeup",
      },
    ],
  },
];

const HighLightData: PortfolioItem[] = [
  {
    id: "1",
    title: "Marie Claire Special Edition",
    slug: "marie-claire-special-edition",
    description: "Special edition photoshoot for Marie Claire magazine",
    imageUrl: "/1.jpg",
    categories: ["fashion", "celebrity"],
    publication: "marie claire",
    galleryImages: [
      { url: "/1.jpg" },
      { url: "/2.jpg" },
      { url: "/3.jpg" },
      { url: "/4.jpg" },
    ],
  },
  {
    id: "2",
    title: "Spotted Pattern Editorial",
    slug: "spotted-pattern-editorial",
    description: "Fashion editorial featuring spotted pattern designs",
    imageUrl: "/2.jpg",
    categories: ["fashion"],
    galleryImages: [
      { url: "/spotted-elegance.png" },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with polka dot outfit",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with animal print",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with textured clothing",
      },
    ],
  },
  {
    id: "3",
    title: "Evening Elegance",
    slug: "evening-elegance",
    description: "Elegant evening wear photoshoot",
    imageUrl: "/3.jpg",
    categories: ["fashion", "beauty"],
    galleryImages: [
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with evening gown",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with elegant dress",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with formal attire",
      },
      {
        url: "/placeholder.svg?height=800&width=600&query=fashion model with luxury clothing",
      },
    ],
  },
];

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return portfolioData;
}

export async function getHightLightItems(): Promise<PortfolioItem[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return HighLightData;
}

export async function getPortfolioItemBySlug(
  slug: string
): Promise<PortfolioItem | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));
  return portfolioData.find((item) => item.slug === slug);
}

export async function getRelatedPortfolioItems(
  currentId: string,
  category: string
): Promise<PortfolioItem[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  return portfolioData
    .filter(
      (item) => item.id !== currentId && item.categories.includes(category)
    )
    .slice(0, 3);
}
