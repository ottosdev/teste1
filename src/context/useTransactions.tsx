import {createContext, ReactNode, useEffect, useState} from "react";
import {getAllTransactions, TransactionsProps} from "../services/transactions/get-all-transactions.ts";
import {createTransaction, CreateTransactionRequest} from "../services/transactions/create-transaction.ts";
import {useToast} from "@chakra-ui/react";
import {getSummary, SummaryProps} from "../services/transactions/get-summary.ts";
import {removeTransactions} from "../services/transactions/delete-transactions.ts";

interface TransactionContextProps {
    transactions: TransactionsProps[];
    saveTransaction: (data: CreateTransactionRequest) => Promise<void>
    summary: SummaryProps;
    deleteTransaction: (id: string) => Promise<void>
}

export const TransactionContext = createContext({} as TransactionContextProps);

interface TransactionContextProviderProps {
    children: ReactNode
}

export default function TransactionContextProvider({children}:TransactionContextProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
    const [summary, setSummary] = useState({} as SummaryProps);
    const toast = useToast()
    async function getTransactions() {
        const response =   await getAllTransactions();
        setTransactions(response.data)
    }

    useEffect(() => {
        getTransactions()
    }, []);

    async function saveTransaction(data: CreateTransactionRequest) {
        try {
            const response = await createTransaction(data);
            setTransactions([...transactions, response.data])
            toast({
                title: 'Sucesso',
                description: 'Transação criada com sucesso',
                isClosable: true,
                status: 'success',
                duration: 3000,
                position: 'top-right'
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }catch (err) {
            toast({
                title: 'Erro',
                description: 'Erro ao criar transação',
                isClosable: true,
                status: 'error',
                duration: 3000,
                position: 'top-right'
            })
        }
    }

    async function deleteTransaction(id: string) {
        try {
            await removeTransactions(id);

            const removeItem = transactions.filter(transaciton => transaciton.id !== id);
            setTransactions(removeItem);
            toast({
                title: 'Sucesso',
                description: 'Sucesso ao deletar uma transação',
                isClosable: true,
                status: 'success',
                duration: 3000,
                position: 'top-right'
            })
        } catch (err) {
            console.log(err)
            toast({
                title: 'Erro',
                description: 'Erro ao deletar transação',
                isClosable: true,
                status: 'error',
                duration: 3000,
                position: 'top-right'
            })
        }
    }

    async function findSummary() {
        const response = await getSummary();
        setSummary(response.data);
    }

    useEffect(() => {
        findSummary();
    }, [transactions]);

    return (
        <TransactionContext.Provider value={{transactions, saveTransaction, summary, deleteTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}