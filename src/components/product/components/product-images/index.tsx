import type { JSX } from "react";
import type { ProductImagesProps } from "./types";

export function ProductImages({
	images,
	selectedImage,
	onImageClick,
}: ProductImagesProps): JSX.Element {
	return (
		<div>
			<img src={selectedImage} alt="Produto" className="w-full h-auto mb-4" />
			<div className="flex space-x-2">
				{images?.map((image) => (
					<img
						key={image}
						src={image}
						alt={`Miniatura do produto ${image.split("/").pop()?.split(".")[0] || ""}`}
						className="w-20 h-20 object-cover cursor-pointer"
						onClick={() => onImageClick(image)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								onImageClick(image);
							}
						}}
					/>
				))}
			</div>
		</div>
	);
}
