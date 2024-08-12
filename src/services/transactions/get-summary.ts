import {api} from "../api.ts";

export interface  SummaryProps {
    total: number;
    entradas: number;
    saidas: number
}

export function getSummary() {
    return api.get('/transactions/summary')
}