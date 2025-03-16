import { PrismaService } from 'prisma/prisma.service';
import { AuthorsResolver } from './author.resolver';
import { Module } from '@nestjs/common';
import { AuthorService } from './services/author.service';

@Module({
  imports: [],
  providers: [AuthorService, AuthorsResolver, PrismaService],
})
export class AuthorModule {}
