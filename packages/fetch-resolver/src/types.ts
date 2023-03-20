import { AxiosRequestConfig, AxiosError } from 'axios';

export type ParamType = AxiosRequestConfig['params'];

export type Path = string | (() => string);

export type Method =
  | 'post'
  | 'put'
  | 'patch'
  | 'delete'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE';

export interface FetchOption {
  skip?: boolean;
  params?: ParamType;
  config?: AxiosRequestConfig;
}

export interface MutationOption<Request> {
  method?: Method;
  variables?: Request;
  config?: AxiosRequestConfig;
  addToPath?: string | number;
}

export type FetchQueryOptions = Omit<FetchOption, 'skip'> & { path?: Path };

export type FetchMutationOptions<Request> = MutationOption<Request> & {
  path?: Path;
};

export type FetchQueryReturn<Response> = Promise<{
  data: Response | null;
  errors: AxiosError | null;
}>;
