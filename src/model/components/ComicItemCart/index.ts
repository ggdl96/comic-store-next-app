import { ComicItem } from '../ComicItem';

export interface ComicItemCart extends ComicItem {
  quantity: number;
  stock: number;
}
