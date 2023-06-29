
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

export interface Auth {
    token: string;
    userId: string;
}

export interface IQuery {
    index(): string | Promise<string>;
    users(): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    register(addUserArgs: UserArgs): string | Promise<string>;
    login(loginUser: UserArgs): Auth | Promise<Auth>;
    deleteUser(): string | Promise<string>;
}

type Nullable<T> = T | null;
