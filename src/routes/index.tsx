import { createBrowserRouter, RouterContextProvider } from "react-router-dom";
import { apiClientContext } from "../contexts/apiClientContext";
import { getApiClient } from "../lib/client";
import { Root } from "../Root";
import { ErrorBoundary } from "../components/error-boundary";
import { Home } from "../pages/home";

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Root apiClient={getApiClient()} />,
			errorElement: <ErrorBoundary />,
			children: [
				{ path: "/", element: <Home /> },
				{ path: "*", element: <Home /> },
			],
		},
	],
	{
		getContext() {
			const context = new RouterContextProvider();
			context.set(apiClientContext, getApiClient()); // Para loaders
			return context;
		},
	},
);
