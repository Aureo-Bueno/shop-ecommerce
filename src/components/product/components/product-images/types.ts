export interface ProductImagesProps {
  images: string[];
  selectedImage: string;
  onImageClick: (image: string) => void;
}
