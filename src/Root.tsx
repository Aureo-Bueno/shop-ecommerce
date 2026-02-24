import { Outlet } from "react-router-dom";
import type { APIClient } from "./lib/client";

interface Props {
	apiClient: APIClient;
}

export function Root({ apiClient }: Props) {
	return (
		<div className="min-h-screen flex flex-col">
			<Outlet context={{ apiClient }} />
		</div>
	);
}
