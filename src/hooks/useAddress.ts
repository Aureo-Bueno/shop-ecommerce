/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import axios from 'axios';

/**
 * Custom React hook to fetch and manage address data based on a Brazilian postal code (CEP).
 *
 * @returns {{
 *   address: string;
 *   loading: boolean;
 *   fetchAddress: (enteredCep: string) => Promise<void>;
 *   error: string | null;
 * }}
 * An object containing:
 * - `address`: The formatted address string or an error message.
 * - `loading`: A boolean indicating whether the address is being fetched.
 * - `fetchAddress`: A function to fetch the address data based on the provided CEP.
 * - `error`: A string containing an error message if the fetch fails, or `null` if no error occurred.
 *
 * ### Behavior:
 * - The `fetchAddress` function is triggered with a valid CEP (8 characters).
 * - It sends a GET request to the ViaCEP API to retrieve address data.
 * - If the API returns valid data:
 *   - The `address` state is updated with the formatted address string.
 * - If the API returns an error or the CEP is not found:
 *   - The `address` state is updated with an error message (e.g., "CEP não encontrado").
 *   - The `error` state is updated with a descriptive error message.
 * - The `loading` state is used to indicate the fetch process.
 *
 * ### Example Usage:
 * ```typescript
 * const { address, loading, fetchAddress, error } = useAddress();
 *
 * // Fetch address for a given CEP
 * fetchAddress('01001000');
 *
 * if (loading) {
 *   console.log('Loading...');
 * }
 *
 * if (error) {
 *   console.error(error);
 * } else {
 *   console.log(address);
 * }
 * ```
 *
 * ### Notes:
 * - The CEP must be exactly 8 characters long to trigger the fetch.
 * - This hook is specifically designed for Brazilian postal codes and uses the ViaCEP API.
 * - Error handling is included for API failures or invalid CEPs.
 */
const useAddress = () => {
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAddress = async (enteredCep: string) => {
    if (enteredCep.length === 8) {
      setLoading(true);
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${enteredCep}/json/`);
        if (response.data && !response.data.erro) {
          setAddress(`${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade} - ${response.data.uf}`);
        } else {
          setAddress('CEP não encontrado');
        }
      } catch (error) {
        setAddress('Erro ao consultar o CEP');
        setError('Erro ao consultar o CEP');
      } finally {
        setLoading(false);
      }
    }
  };

  return { address, loading, fetchAddress, error };
};

export default useAddress;
