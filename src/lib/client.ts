import axios, {
	type AxiosInstance,
	type AxiosRequestConfig,
	type AxiosResponse,
} from "axios";

export interface APIResponse<T = any> {
	data: T;
	status: number;
}

export interface APIClientConfig extends AxiosRequestConfig {
	baseURL?: string;
}

export class APIClient {
	private api: AxiosInstance;

	constructor(config: APIClientConfig = {}) {
		this.api = axios.create({
			baseURL:
				config.baseURL ||
				import.meta.env.VITE_API_URL ||
				"http://localhost:3000/api",
			headers: {
				"Content-Type": "application/json",
				...config.headers,
			},
			timeout: config.timeout || 10000,
			...config,
		});

		this.api.interceptors.request.use((config) => {
			const token = localStorage.getItem("token");
			if (token && !config.headers.Authorization) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		});

		this.api.interceptors.response.use(
			(response) => response,
			(error) => {
				if (error.response?.status === 401) {
					localStorage.removeItem("token");
					window.location.href = "/login";
				}
				return Promise.reject(error);
			},
		);
	}

	async get<T = any>(
		url: string,
		config?: AxiosRequestConfig,
	): Promise<APIResponse<T>> {
		const response = await this.api.get(url, config);
		return { data: response.data, status: response.status };
	}

	async post<T = any, D = any>(
		url: string,
		data?: D,
		config?: AxiosRequestConfig,
	): Promise<APIResponse<T>> {
		const response = await this.api.post(url, data, config);
		return { data: response.data, status: response.status };
	}

	async put<T = any, D = any>(
		url: string,
		data?: D,
		config?: AxiosRequestConfig,
	): Promise<APIResponse<T>> {
		const response = await this.api.put(url, data, config);
		return { data: response.data, status: response.status };
	}

	async patch<T = any, D = any>(
		url: string,
		data?: D,
		config?: AxiosRequestConfig,
	): Promise<APIResponse<T>> {
		const response = await this.api.patch(url, data, config);
		return { data: response.data, status: response.status };
	}

	async delete<T = any>(
		url: string,
		config?: AxiosRequestConfig,
	): Promise<APIResponse<T>> {
		const response = await this.api.delete(url, config);
		return { data: response.data, status: response.status };
	}

	async head<T = any>(
		url: string,
		config?: AxiosRequestConfig,
	): Promise<APIResponse<T>> {
		const response = await this.api.head(url, config);
		return { data: response.data, status: response.status };
	}

	async options<T = any>(
		url: string,
		config?: AxiosRequestConfig,
	): Promise<APIResponse<T>> {
		const response = await this.api.options(url, config);
		return { data: response.data, status: response.status };
	}

	async request<T = any>(config: AxiosRequestConfig): Promise<APIResponse<T>> {
		const response = await this.api.request(config);
		return { data: response.data, status: response.status };
	}

	setToken(token: string): void {
		this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
	}

	clearToken(): void {
		delete this.api.defaults.headers.common.Authorization;
		localStorage.removeItem("token");
	}
}

export function getApiClient(config?: APIClientConfig): APIClient {
	return new APIClient(config);
}
