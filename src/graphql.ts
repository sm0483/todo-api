
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface UserArgs {
    email: string;
    password: string;
}

export interface AddTodo {
    task: string;
}

export interface Auth {
    token: string;
    userId: string;
}

export interface Todo {
    _id: string;
    task: string;
    user: string;
}

export interface IQuery {
    index(): string | Promise<string>;
    users(): Nullable<string> | Promise<Nullable<string>>;
    todos(): Todo[] | Promise<Todo[]>;
    todo(todoId: string): Todo | Promise<Todo>;
}

export interface IMutation {
    register(addUserArgs: UserArgs): string | Promise<string>;
    login(loginUser: UserArgs): Auth | Promise<Auth>;
    deleteUser(): string | Promise<string>;
    createTodo(createTodo: AddTodo): string | Promise<string>;
    deleteTodo(todoId: string): string | Promise<string>;
    updateTodo(todoId: string, todo: AddTodo): string | Promise<string>;
}

type Nullable<T> = T | null;
