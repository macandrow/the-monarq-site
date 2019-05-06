import { ISlide } from './gallery-slide';

export class IGallery {
  id: number;
  title: string;
  description: string;
  link?: string;
  slides: ISlide[];
}
