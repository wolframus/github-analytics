import { useEffect, useState } from 'react';

import { Services } from '../services/api';
import { GitHubEmails } from '../services/api/GitHub/types';

export function useEmails() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<GitHubEmails>();
  const [error, setError] = useState<string | null>(null);

  const refetch = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await Services.github.getEmails();

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
