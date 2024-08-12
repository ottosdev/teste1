import {api} from "../api.ts";

export function removeTransactions(id: string) {
    return api.delete(`/transactions/${id}`)
}