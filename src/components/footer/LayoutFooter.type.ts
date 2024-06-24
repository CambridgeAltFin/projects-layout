export interface Project {
  title: string;
  id: string;
  tag: string;
  link: string;
}

export interface SupportedElement {
  id: string;
  description: string;
  image: string;
  link: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt: string
}
