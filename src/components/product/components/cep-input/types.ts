export interface CepInputProps {
  cep: string;
  address: string;
  onCepChange: (cep: string) => void;
  loading: boolean;
  error: string | null;
}
