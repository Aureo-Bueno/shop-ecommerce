import type { CepInputProps } from "./types";

export const CepInput = ({ cep, address, onCepChange, loading, error }: CepInputProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCepChange(e.target.value);
  };

  return (
    <div className="mt-4">
      <label className="block text-lg">CEP:</label>
      <input
        type="text"
        value={cep}
        onChange={handleChange}
        className="mt-2 p-2 border rounded"
        maxLength={8}
        placeholder="Digite seu CEP"
        pattern="\d{5}-?\d{3}"
      />
      {loading && <p className="mt-2 text-gray-600">Carregando...</p>}
      {!loading && !address && error && <p className="mt-2 text-red-600">CEP inválido</p>}
      {address && !loading && <p className="mt-2 text-gray-600">{address}</p>}
    </div>
  );
};
