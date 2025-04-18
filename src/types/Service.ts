export interface Service {
  name: string;
  price: string;
  isRecommended?: boolean;
  description?: string;
  features: string[];
  featuresNotIncluded?: string[];
  type: "web" | "mobile";
  // TODO: seeExampleLink should accommodate multiple links
  seeExampleLink?: string;
}
