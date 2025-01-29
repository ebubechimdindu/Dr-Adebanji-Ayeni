export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  mainImage: SanityImage;
  description: string;
  publishedAt: string;
}

export interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  image: SanityImage;
  projectUrl?: string;
}