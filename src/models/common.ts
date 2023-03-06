import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}
export interface PaginationParams {
  page: number;
  limit: number;
  [key: string]: any;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  page?: number;
  limit?: number;
  sortby?: string;
  order?: 'asc' | 'desc';
  [key: string]: any;
}
