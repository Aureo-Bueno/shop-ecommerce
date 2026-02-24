import type { JSX } from "react";
import { Link } from "react-router-dom";

export function Footer(): JSX.Element {
	return (
		<footer className="bg-gray-100 text-gray-700 py-6 mt-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm">
						&copy; {new Date().getFullYear()} ShopLogo. Todos os direitos
						reservados.
					</p>
					<div className="flex space-x-4 mt-4 md:mt-0">
						<Link to="/" className="hover:text-blue-600">
							Privacidade
						</Link>
						<Link to="/" className="hover:text-blue-600">
							Termos
						</Link>
						<Link to="/" className="hover:text-blue-600">
							Contato
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
