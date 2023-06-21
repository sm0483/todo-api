
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddUserArgs {
    name: string;
    password: string;
}

export interface User {
    name: string;
    password: string;
}

export interface IQuery {
    index(): string | Promise<string>;
    users(userId: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    register(addUserArgs: AddUserArgs): string | Promise<string>;
    updateUser(userId: number, addUserArgs: AddUserArgs): string | Promise<string>;
    deleteUser(userId: number): string | Promise<string>;
}

type Nullable<T> = T | null;
