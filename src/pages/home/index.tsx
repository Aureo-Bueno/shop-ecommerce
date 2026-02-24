import type { JSX } from "react";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Product } from "../../components/product";

export function Home(): JSX.Element {
	return (
		<>
			<Navbar />
			<Product />
			<Footer />
		</>
	);
}
