export interface Service {
  name: string;
  price: string;
  isRecommended?: boolean;
  description?: string;
  features: string[];
  type: "web" | "mobile";
}