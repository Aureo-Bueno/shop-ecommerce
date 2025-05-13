import type { ProductImagesProps } from './types';

export const ProductImages = ({ images, selectedImage, onImageClick }: ProductImagesProps) => {
  return (
    <div>
      <img src={selectedImage} alt="Produto" className="w-full h-auto mb-4" />
      <div className="flex space-x-2">
        {images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Miniatura ${index + 1}`}
            className="w-20 h-20 object-cover cursor-pointer"
            onClick={() => onImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};
