import { PrismaService } from 'prisma/prisma.service';
import { AuthorsResolver } from './author.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [AuthorsResolver, PrismaService],
})
export class AuthorModule {}
