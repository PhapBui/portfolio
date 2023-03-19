import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}
export interface PaginationParams {
  page: number;
  limit: number;
  count: number;
  [key: string]: any;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
  [key: string]: any;
}
