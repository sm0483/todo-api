```
src/
├── app.module.ts
├── main.ts
└── users/
├── users.module.ts
├── users.resolver.ts
├── users.service.ts
├── dto/
│ └── users.dto.ts
└── models/
└── user.model.ts
```

```
src/
├── app.module.ts
├── main.ts
└── users/
├── users.module.ts
├── users.resolver.ts
├── users.service.ts
├── dto/
│ └── users.dto.ts
└── models/
└── user.model.ts
```

Here are some examples of GraphQL queries and mutations for a todo API:

**Queries:**

-   `query { todos { id title completed } }` - This query retrieves all the todos with their `id`, `title`, and `completed` status.
-   `query { todo(id: 1) { id title completed } }` - This query retrieves a specific todo with `id` equal to 1.

**Mutations:**

-   `mutation { createTodo(title: "Buy groceries") { id title completed } }` - This mutation creates a new todo with the title "Buy groceries".
-   `mutation { updateTodo(id: 1, completed: true) { id title completed } }` - This mutation updates the `completed` status of the todo with `id` equal to 1 to `true`.
-   `mutation { deleteTodo(id: 1) }` - This mutation deletes the todo with `id` equal to 1.

**Queries:**

- `query { me { id username email } }` - This query retrieves the currently authenticated user’s id, username, and email.

**Mutations:**

- `mutation { register(input: RegisterInput!) { user { id username email } } }` - This mutation creates a new user account with the provided input data.
- `mutation { login(input: LoginInput!) { accessToken } }` - This mutation authenticates a user with the provided input data and returns an access token.
- `mutation { updateUser(input: UpdateUserInput!) { user { id username email } } }` - This mutation updates the currently authenticated user’s account with the provided input data.



```js

import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { User } from './schema/auth.schema';
import { AuthService } from './auth.service';
import { AddUserArgs } from './args/add.user.args';

@Resolver((of) => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation((returns) => String, { name: 'register' })
  register(@Args('addUserArgs') addUserArgs: AddUserArgs) {
    return this.authService.createUser(addUserArgs);
  }

  @Query((returns) => User, { name: 'users', nullable: true })
  getUser(@Args({ name: 'userId', type: () => Int }) id: number) {
    return this.authService.getUser(id);
  }

  @Mutation((returns) => String, { name: 'updateUser' })
  updateUser(
    @Args({ name: 'userId', type: () => Int }) id: number,
    @Args('addUserArgs') addUserArgs: AddUserArgs
  ) {
    return this.authService.updateUser(id, addUserArgs);
  }

  @Mutation((returns) => String, { name: 'deleteUser' })
  deleteUser(@Args({ name: 'userId', type: () => Int }) id: number) {
    return this.authService.deleteUser(id);
  }
}


```