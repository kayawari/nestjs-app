import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/models/post.model';

@ObjectType()
export class Author {
  @Field(() => Number)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Post])
  posts: Post[];
}
