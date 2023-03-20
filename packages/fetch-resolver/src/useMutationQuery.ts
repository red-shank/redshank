import { AxiosError } from 'axios';
import { useCallback, useMemo, useState } from 'react';
import { useQueryInstance } from './instance';
import {
  FetchMutationOptions,
  FetchQueryReturn,
  MutationOption,
  Path,
} from './types';

type ReturnHook<Response = any, Request = any> = [
  (
    options: FetchMutationOptions<Request>
  ) => Promise<FetchQueryReturn<Response>>,
  {
    isLoading: boolean;
    errors: AxiosError | null;
    data: Response;
  }
];

export function useFetchMutation<Response = any, Request = any>(
  path: Path,
  options?: MutationOption<Request>
): ReturnHook<Response, Request> {
  const instance = useQueryInstance();

  const method = useMemo(() => options?.method || 'post', [options?.method]);
  const addToPath = useMemo(
    () => options?.addToPath || '',
    [options?.addToPath]
  );
  const config = useMemo(() => options?.config, [options?.config]);
  const variables = useMemo(() => options?.variables, [options?.variables]);

  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response | null>(null);
  const [errors, setErrors] = useState<AxiosError | null>(null);

  const applyMutation = useCallback(
    async <InternalResponse = Response, InternalRequest = Response>(
      opts: FetchMutationOptions<InternalRequest>
    ): Promise<FetchQueryReturn<InternalResponse>> => {
      setErrors(null);
      setLoading(true);

      const resolveMethod = (opts?.method || method).toLowerCase();
      const resolveAddToPath = opts?.addToPath || addToPath;
      const payload = opts?.variables || variables;

      const internalOptions = {
        ...config,
        ...opts?.config,
      };

      try {
        const { data: responseData } = await instance[
          resolveMethod
        ]<InternalResponse>(
          `${path}/${resolveAddToPath}`,
          resolveMethod === 'delete'
            ? {
                ...internalOptions,
                data: payload,
              }
            : payload,
          internalOptions
        );
        setData(data);
        setLoading(false);

        return { data: responseData, errors: null };
      } catch (error) {
        setErrors(error);
        return {
          errors: error,
          data: null,
        };
      } finally {
        setLoading(false);
      }
    },
    [instance, addToPath, config, data, method, path, variables]
  );

  return [
    applyMutation,
    {
      isLoading,
      data,
      errors,
    },
  ];
}
