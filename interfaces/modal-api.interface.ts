export interface ModalAPI {
  name: string;
  open: (options?: any) => void;
  cleanup?: () => void;
  close?: (err?: Error) => void;
}
