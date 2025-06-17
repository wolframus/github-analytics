import { useEffect, useState } from 'react';

import { Services } from '../services/api';
import { useAuthStore } from '../store/authentication';
import { GitHubOrganization } from '../services/api/GitHub/types';

export function useOrganizations() {
  const { githubLogin } = useAuthStore();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Array<GitHubOrganization>>([]);

  const refetch = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const organizations = await Services.github.getOrganizations(
        githubLogin!,
      );
      setData(organizations);
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
