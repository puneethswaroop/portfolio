export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  categories: string[];
  publication?: string;
  galleryImages: {
    url: string;
    alt?: string;
  }[];
}
