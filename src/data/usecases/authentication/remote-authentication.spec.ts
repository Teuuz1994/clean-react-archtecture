import { HttpPostCLientSpy } from '../../test/mock-http-post-client';
import { RemoteAuthentication } from './remote-authentication';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostCLientSpy;
};

const makeSut = (): SutTypes => {
  const url = 'any_url';
  const httpPostClientSpy = new HttpPostCLientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  it('Should be call HttpClient with correct URL', async () => {
    const url = 'any_url';
    const { httpPostClientSpy, sut } = makeSut();
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
