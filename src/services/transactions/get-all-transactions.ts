import {api} from "../api.ts";

export interface TransactionsProps {
    id: string,
    name: string,
    price: string,
    type: string,
    createdAt: string,
}

export async function getAllTransactions() {
    return await  api.get('/transactions');
}