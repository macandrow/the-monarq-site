import { IAlbum } from './project-album';

export interface IProject {
  id: number;
  title: string;
  description: string;
  albums: IAlbum[];
}
