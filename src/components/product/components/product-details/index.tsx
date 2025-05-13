import type { ProductDetailsProps } from "./types";

export const ProductDetails = ({
  title,
  price,
  variants,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
}: ProductDetailsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-xl text-gray-600">R${price}</p>

      <div className="mt-4">
        <label className="block text-lg">Tamanho:</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="mt-2 p-2 border rounded"
        >
          <option value="">Selecione o Tamanho</option>
          {variants?.size?.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-lg">Cor:</label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="mt-2 p-2 border rounded"
        >
          <option value="">Selecione a Cor</option>
          {variants?.color?.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
