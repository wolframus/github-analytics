import { useEffect, useState } from 'react';

import { Services } from '../services/api';
import { GitHubUser } from '../services/api/GitHub/types';

export function useUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<GitHubUser>();
  const [error, setError] = useState<string | null>(null);

  const refetch = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await Services.github.getUser();

      setData(response);
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return { data, error, isLoading, refetch };
}
