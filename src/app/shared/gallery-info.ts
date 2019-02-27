import {Slide} from "./gallery-slide";

export class Gallery{
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  dataColor: string;
  slides: Slide[]; 
}
