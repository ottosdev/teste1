import {Grid } from "@chakra-ui/react";
import SummaryItem from "./summary-item.tsx";
import {useContext} from "react";
import {TransactionContext} from "../../context/useTransactions.tsx";

export default function Summary() {
    const {summary} = useContext(TransactionContext)

    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={6} w='100%'>
            <SummaryItem title='Entradas' price={summary.entradas} bgColor='green.200'/>
            <SummaryItem title='Saidas' price={summary.saidas} bgColor='red.200'/>
            <SummaryItem title='Total' price={summary.total} bgColor='gray.200'/>
        </Grid>
    )
}