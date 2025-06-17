import { useEffect, useState } from 'react';

import { Services } from '../services/api';
import { useAuthStore } from '../store/authentication';
import { GitHubRepo } from '../services/api/GitHub/types';

export function useRepos() {
  const { githubLogin } = useAuthStore();

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [data, setData] = useState<Array<GitHubRepo>>([]);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timeout);
  }, [query]);

  const fetchRepos = async (newPage: number = 1, q: string = '') => {
    try {
      setIsLoading(true);
      setError(null);

      const response = q
        ? await Services.github.searchRepos(q, githubLogin!)
        : await Services.github.getRepos(newPage);

      const results = q ? (response as any).items : response;

      if (!results || results.length === 0) {
        if (newPage === 1) setData([]);
        setHasMore(false);
      } else {
        setData(prev => (newPage === 1 || q ? results : [...prev, ...results]));
        setPage(newPage);
      }
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => fetchRepos(1, debouncedQuery);

  const loadMore = () => {
    if (!isLoading && hasMore && !debouncedQuery) {
      fetchRepos(page + 1);
    }
  };

  useEffect(() => {
    fetchRepos(1, debouncedQuery);
  }, [debouncedQuery]);

  return {
    data,
    error,
    query,
    isLoading,
    refetch,
    loadMore,
    setQuery,
  };
}
