import { createContext } from "react-router-dom";
import type { APIClient } from "../lib/client";

export const apiClientContext = createContext<APIClient>();
