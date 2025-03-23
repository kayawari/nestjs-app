type ValueOrArray<T> = T | ArrayOfValueOrArray<T>;
interface ArrayOfValueOrArray<T> extends Array<ValueOrArray<T>> {}

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

const exampleStatusJson: Json = {
  available: true,
  username: 'hoge',
  age: 23,
  room: {
    name: 'fuga',
  },
};

console.log(exampleStatusJson);
