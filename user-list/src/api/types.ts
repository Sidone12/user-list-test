export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  tel?: number;
  address?: string;
}

export interface FormData {
  first_name: string;
  email: string;
}
