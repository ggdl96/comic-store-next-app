export interface ComicItem {
  id: string;
  image: string;
  title: string;
  author: string;
  price: {
    value: number;
    currency: string;
  };
  category: string;
  rating: number;
}
