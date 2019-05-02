import { ISlide } from './gallery-slide';

export class IGallery {
  id: number;
  title: string;
  description: string;
  slides: ISlide[];
}
