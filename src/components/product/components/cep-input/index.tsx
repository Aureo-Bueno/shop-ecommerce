import type { JSX } from "react";
import type { CepInputProps } from "./types";

export function CepInput({
	cep,
	address,
	onCepChange,
	loading,
	error,
}: CepInputProps): JSX.Element {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onCepChange(e.target.value);
	};

	return (
		<div className="mt-4">
			<label htmlFor="cep-input" className="block text-lg">
				CEP:
			</label>
			<input
				id="cep-input"
				type="text"
				value={cep}
				onChange={handleChange}
				className="mt-2 p-2 border rounded"
				maxLength={8}
				placeholder="Digite seu CEP"
				pattern="\d{5}-?\d{3}"
			/>

			{loading && <p className="mt-2 text-gray-600">Carregando...</p>}
			{!loading && !address && error && (
				<p className="mt-2 text-red-600">CEP inválido</p>
			)}
			{address && !loading && <p className="mt-2 text-gray-600">{address}</p>}
		</div>
	);
}
