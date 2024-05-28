import { Writer } from "./WriterModel";
import { Categories } from "./CategoriesModel";

export interface Story {
  storyId: number;
  tittle: string;
  content: string;
  date: string;
  authorId: string;
  soundId: number;
  writer: Writer;
  categories: Categories[];

}
