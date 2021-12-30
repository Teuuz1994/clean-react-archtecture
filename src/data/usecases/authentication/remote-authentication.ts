import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { InvalidCredentialsError } from '@/domain/error/invalid-credentials-error';
import { UnexpectedError } from '@/domain/error/unexpected-error';
import { AuthenticationParams } from '@/domain/usecases/authentication';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient,
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;

      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();

      case HttpStatusCode.badRequest:
        throw new UnexpectedError();

      default:
        throw new UnexpectedError();
    }
  }
}
