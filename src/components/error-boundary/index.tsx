import { useRouteError, isRouteErrorResponse } from "react-router";
import { Link } from "react-router-dom";

export function ErrorBoundary() {
	const error = useRouteError();
	let errorTitle = "Erro desconhecido";
	let errorMessage = "Algo deu errado. Tente novamente.";

	if (isRouteErrorResponse(error)) {
		errorTitle = `${error.status} ${error.statusText}`;
		errorMessage = error.data?.message || error.statusText;
	} else if (error instanceof Error) {
		errorTitle = "Erro JavaScript";
		errorMessage = error.message;
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-8">
			<div className="max-w-md w-full bg-white rounded-2xl shadow-2xl border border-red-100 p-8 space-y-6">
				{/* Ícone de erro */}
				<div className="flex justify-center">
					<div className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center">
						<svg
							className="w-12 h-12 text-red-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
							/>
						</svg>
					</div>
				</div>

				<div className="text-center space-y-2">
					<h1 className="text-3xl font-bold text-gray-900">{errorTitle}</h1>
					<p className="text-lg text-gray-600">{errorMessage}</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-3 pt-4">
					<Link
						to="/"
						className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl text-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
					>
						Voltar ao Início
					</Link>
					<button
						type="button"
						onClick={() => window.location.reload()}
						className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-xl text-center transition-all duration-200 border border-gray-200 hover:shadow-md"
					>
						Recarregar Página
					</button>
				</div>
			</div>
		</div>
	);
}
