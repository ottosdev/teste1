import Summary from "../../components/summary/summary.tsx";
import CreateTransaction from "../../components/create-transaction.tsx";
import TransactionTable from "../../components/transaction-table.tsx";
import TransactionContextProvider from "../../context/useTransactions.tsx";

export default function Dashboard() {

    return (
        <TransactionContextProvider>
            <Summary/>
            <CreateTransaction/>
            <TransactionTable/>
        </TransactionContextProvider>
    )
}