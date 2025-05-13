export interface ProductDetailsProps {
  title: string;
  price: number;
  variants: { size: string[]; color: string[] };
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}
