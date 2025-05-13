/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ProductDetails } from './components/product-details';
import { CepInput } from './components/cep-input';
import { ProductImages } from './components/product-images';
import useAddress from '../../hooks/useAddress';

export const Product = () => {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [productDetails, setProductDetails] = useState<any>({});
  const [selectedSize, setSelectedSize] = useLocalStorage('selectedSize', '');
  const [selectedColor, setSelectedColor] = useLocalStorage('selectedColor', '');
  const [cep, setCep] = useState<string>('');
  const { address, loading, fetchAddress, error } = useAddress();

  useEffect(() => {
    setProductDetails({
      title: 'Camiseta Estampada',
      price: 79.99,
      images: [
        '/assets/camiseta01.webp',
        '/assets/camiseta2.webp',
        '/assets/camiseta3.webp',
      ],
      variants: {
        size: ['P', 'M', 'G', 'GG'],
        color: ['Azul', 'Vermelho', 'Preto'],
      },
    });
    setSelectedImage('/assets/camiseta4.webp');
  }, []);

  const handleCepChange = async (enteredCep: string) => {
    setCep(enteredCep);
    fetchAddress(enteredCep);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImages
          images={productDetails.images}
          selectedImage={selectedImage}
          onImageClick={setSelectedImage}
        />
        <div>
          <ProductDetails
            title={productDetails.title}
            price={productDetails.price}
            variants={productDetails.variants}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <CepInput
            cep={cep}
            address={address}
            onCepChange={handleCepChange}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};
