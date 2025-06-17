export class BaseService {
  protected baseUrl: string;
  protected headers: Record<string, string>;

  constructor(baseUrl: string, token: string, tokenType = 'Bearer') {
    this.baseUrl = baseUrl;
    this.headers = {
      Authorization: `${tokenType} ${token}`,
      Accept: 'application/vnd.github.v3+json',
    };
  }

  protected async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'GET',
      headers: this.headers,
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Error ${response.status}: ${err}`);
    }

    return response.json();
  }
}
