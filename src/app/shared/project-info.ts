import { Album } from './project-album';

export class Project {
  id: number;
  title: string;
  description: string;
  albums: Album[];
}
