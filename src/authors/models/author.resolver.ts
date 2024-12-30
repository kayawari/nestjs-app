import { Query, Resolver } from '@nestjs/graphql';
import { Author } from './author.model';

@Resolver(() => Author)
export class AuthorsResolver {
  @Query(() => [Author])
  async authors(): Promise<Author[]> {
    // ダミーデータを返す
    return [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        posts: [],
      },
    ];
  }
}
