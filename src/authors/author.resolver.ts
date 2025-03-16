import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { PrismaService } from 'prisma/prisma.service';
import { AuthorService } from './services/author.service';
import { CreateAuthorInput } from './models/dto/create-author.input';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authorService: AuthorService,
  ) {}

  @Query(() => [Author])
  async authors(): Promise<Author[]> {
    return this.authorService.findAll();
  }

  @Mutation(() => Author)
  async createAuthor(@Args('input') input: CreateAuthorInput): Promise<Author> {
    return this.authorService.createUser(input);
  }
}
