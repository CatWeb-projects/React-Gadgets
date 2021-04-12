export interface DevicesProps {
  id: number;
  name: string;
  price: number;
  credit?: number;
  cashback?: number;
  model: string;
  color: string;
  weight: number;
  popularity: number;
  manufacturer: string;
  imageUrl: string;
  type: string;
  link: string;
  colors: string[];
  camera: number;
  frontCamera: number;
  chipset: string;
  processor: string;
  resolution: string;
  hardDrive: number;
  memory: number;
}
