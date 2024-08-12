import {api} from "../api.ts";

export interface UserRegisterRequest {
    name: string;
    email: string;
    password: string;
}

export function signUp(data: UserRegisterRequest) {
    return api.post('/auth/sign-up', data);
}