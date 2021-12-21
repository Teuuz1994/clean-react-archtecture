import { HttpPostClient } from 'data/protocols/http/http-post-client';
import { RemoteAuthentication } from './remote-authentication';

describe('RemoteAuthentication', () => {
  it('Should be call HttpClient with correct URL', async () => {
    class HttpPostCLientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = 'any_url';
    const httpClientSpy = new HttpPostCLientSpy();
    const sut = new RemoteAuthentication(url, httpClientSpy);
    await sut.auth();
    expect(httpClientSpy.url).toBe(url);
  });
});
