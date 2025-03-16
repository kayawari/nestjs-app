import { Injectable } from '@nestjs/common';
import { Author } from '../models/author.model';
import { PrismaService } from 'prisma/prisma.service';
import { CreateAuthorInput } from '../models/dto/create-author.input';

@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaService) {}

  findAll = async (): Promise<Author[]> => {
    return this.prisma.user.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        email: true,
        posts: true,
      },
    });
  };

  createUser = async (input: CreateAuthorInput): Promise<Author> => {
    return this.prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        posts: true,
      },
    });
  };
}
