import {
  GitHubUser,
  GitHubRepo,
  GitHubEmails,
  GitHubOrganization,
} from './types';
import { AuthToken } from '../types';
import { BaseService } from '../Base';
import KeychainStorage from '../../KeychainStorage';

class GitHubService extends BaseService {
  private static instance: GitHubService | null = null;

  private constructor(token: AuthToken) {
    super('https://api.github.com', token.accessToken, token.tokenType);
  }

  private static async ensureInitialized(): Promise<void> {
    if (GitHubService.instance) return;

    const token = await KeychainStorage.get('token');
    if (!token) {
      throw new Error('[GitHubService] Token not found. You must log in.');
    }

    const tokenPayload: AuthToken = { accessToken: token };
    GitHubService.instance = new GitHubService(tokenPayload);
  }

  static async getUser() {
    await GitHubService.ensureInitialized();
    return GitHubService.instance!.get<GitHubUser>('/user');
  }

  static async getEmails() {
    await GitHubService.ensureInitialized();
    return GitHubService.instance!.get<GitHubEmails>('/user/emails');
  }

  static async getRepos(page: number = 1, perPage: number = 30) {
    await GitHubService.ensureInitialized();
    return GitHubService.instance!.get<Array<GitHubRepo>>(
      `/user/repos?per_page=${perPage}&page=${page}`,
    );
  }

  static async searchRepos(q: string, username: string) {
    await GitHubService.ensureInitialized();

    const encodedQuery = encodeURIComponent(`${q} user:${username}`);
    return GitHubService.instance!.get(
      `/search/repositories?q=${encodedQuery}`,
    );
  }

  static async getOrganizations(username: string) {
    await GitHubService.ensureInitialized();
    return GitHubService.instance!.get<Array<GitHubOrganization>>(
      `/users/${username}/orgs`,
    );
  }

  static async getRepoCommits(owner: string, repo: string) {
    await GitHubService.ensureInitialized();
    return GitHubService.instance!.get(`/repos/${owner}/${repo}/commits`);
  }
}

export default GitHubService;
