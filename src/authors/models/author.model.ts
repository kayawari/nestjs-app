import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/models/post.model';

@ObjectType()
export class Author {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name?: string;

  @Field(() => String)
  email: string;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];
}
