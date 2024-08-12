import {api} from "../api.ts";


export interface CreateTransactionRequest{
    name: string;
    price: number;
    type: string
}

export function createTransaction(data: CreateTransactionRequest) {
    return api.post('/transactions', data);
}