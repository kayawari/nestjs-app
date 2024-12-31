import { Query, Resolver } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { PrismaService } from 'prisma/prisma.service';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Author])
  async authors(): Promise<Author[]> {
    return this.prisma.user.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        email: true,
        posts: true,
      },
    });
  }
}
