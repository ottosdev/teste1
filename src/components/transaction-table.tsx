import {Button, Center, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {FaTrash} from "react-icons/fa6";
import {useContext} from "react";
import {TransactionContext} from "../context/useTransactions.tsx";
import {formatCurrency} from "../utils/format-currency.ts";
import {formatDate} from "../utils/format-date.ts";

export default function TransactionTable() {
    const {transactions, deleteTransaction} = useContext(TransactionContext);

    return (
        <TableContainer w='100%'>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th>Valor</Th>
                        <Th>Data</Th>
                        <Th>Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        transactions.length  ? transactions.map((transaction) => (
                            <Tr key={transaction.id} >
                                <Td>{transaction.name}</Td>
                                <Td color={transaction.type === 'entrada' ? 'green.200' : 'red.200'}>{formatCurrency(Number(transaction.price))}</Td>
                                <Td> {formatDate(transaction.createdAt)}</Td>
                                <Td>
                                    <Button color='red.400' bg='transparent' onClick={() => deleteTransaction(transaction.id)}>
                                        <FaTrash/>
                                    </Button>
                                </Td>
                            </Tr>
                        )) :
                            <Tr>
                                <Td colSpan={4}>
                                    <Center>
                                        Nenhum dado encontrado
                                    </Center>

                                </Td>
                            </Tr>
                    }

                </Tbody>
            </Table>
        </TableContainer>
    )
}