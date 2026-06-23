import type { NYTBooksResponse } from "../types/types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchData = async(signal?: AbortSignal): Promise<NYTBooksResponse> => {
    if (!API_KEY || !BASE_URL) {
        throw new Error('missing api key');
    }

    try {
        const url = new URL(`${BASE_URL}/lists/overview.json`);
    url.searchParams.set('api-key', API_KEY);
    const res = await fetch(url.toString(), { signal });

    if (!res.ok) {
        throw new Error(`error: ${res.status} ${res.statusText}`);
    }

    const data: NYTBooksResponse = await res.json();
    return data;

    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
      throw error;
    }
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error('Error', { cause: error });

}
}