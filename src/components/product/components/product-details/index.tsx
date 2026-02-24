import type { JSX } from "react";
import type { ProductDetailsProps } from "./types";

export function ProductDetails({
	title,
	price,
	variants,
	selectedSize,
	setSelectedSize,
	selectedColor,
	setSelectedColor,
}: ProductDetailsProps): JSX.Element {
	return (
		<div>
			<h2 className="text-2xl font-bold">{title}</h2>
			<p className="text-xl text-gray-600">R${price}</p>

			<div className="mt-4">
				<label htmlFor="size-select" className="block text-lg">
					Tamanho:
				</label>
				<select
					id="size-select"
					value={selectedSize}
					onChange={(e) => setSelectedSize(e.target.value)}
					className="mt-2 p-2 border rounded"
				>
					<option value="">Selecione o Tamanho</option>
					{variants?.size?.map((size) => (
						<option key={size} value={size}>
							{size}
						</option>
					))}
				</select>
			</div>

			<div className="mt-4">
				<label htmlFor="color-select" className="block text-lg">
					Cor:
				</label>
				<select
					id="color-select"
					value={selectedColor}
					onChange={(e) => setSelectedColor(e.target.value)}
					className="mt-2 p-2 border rounded"
				>
					<option value="">Selecione a Cor</option>
					{variants?.color?.map((color) => (
						<option key={color} value={color}>
							{color}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
