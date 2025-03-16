import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String)
  email: string;
}
