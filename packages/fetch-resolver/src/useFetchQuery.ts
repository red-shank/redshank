import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQueryInstance } from './instance';
import type {
  FetchOption,
  FetchQueryOptions,
  FetchQueryReturn,
  Path,
} from './types';

type ReturnHook<Response = any> = {
  isLoading: boolean;
  errors: Error | null;
  data: Response;
  fetchData: (
    options?: FetchQueryOptions
  ) => Promise<FetchQueryReturn<Response>>;
};

export function useFetchQuery<Response = any>(
  path: Path,
  options?: FetchOption
): ReturnHook<Response> {
  const instance = useQueryInstance();

  const skip = useMemo(() => options?.skip, [options?.skip]);
  const params = useMemo(() => options?.params, [options?.params]);

  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Response | null>(null);
  const [errors, setErrors] = useState<Error | null>(null);

  const fetchData = useCallback(
    async (opts?: FetchQueryOptions): Promise<FetchQueryReturn<Response>> => {
      let resolvePath: string = typeof path !== 'string' ? path() : path;

      if (resolvePath === undefined || resolvePath === null) {
        return {
          data: null,
          errors: null,
        };
      }

      setErrors(null);
      setLoading(true);

      const internalConfig = {
        ...options?.config,
        ...opts?.config,
        params: {
          ...params,
          ...opts?.params,
        },
      };

      try {
        const { data: responseData } = await instance.get<Response>(
          resolvePath,
          internalConfig
        );

        setData(responseData);
        setLoading(false);

        return {
          data,
          errors: null,
        };
      } catch (error: any) {
        setErrors(error);
        setLoading(false);

        return {
          data: null,
          errors: error,
        };
      } finally {
        setLoading(false);
      }
    },
    [instance, data, options?.config, params, path]
  );

  useEffect(() => {
    if (!skip) {
      fetchData().then();
    }
  }, [fetchData, skip]);

  return {
    isLoading,
    data,
    errors,
    fetchData,
  };
}
