import {api} from "../api.ts";

export interface SignInRequest {
    email: string;
    password: string;
}

export function signIn(data: SignInRequest) {
    return api.post('/auth/sign-in', data)
}