import {
    Button, Flex, HStack, Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure, VStack
} from "@chakra-ui/react";
import {FaPlus} from "react-icons/fa6";
import {FormEvent, useContext, useState} from "react";
import {TransactionContext} from "../context/useTransactions.tsx";

export default function CreateTransaction() {
    const {saveTransaction} = useContext(TransactionContext)
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [tipo, setTipo] = useState('entrada'); // entrada ou saida
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');

    const changeTypeEntradas = tipo === 'entrada' ? 'green.400' : 'green.200';
    const changeTypeSaidas = tipo === 'saida' ? 'red.400' : 'red.200';

    function handleChangeTipo(value: string) {
        setTipo(value);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const data = {
            name: nome,
            price: Number(valor),
            type: tipo
        }

        await saveTransaction(data);
        setNome('');
        setValor('');
        setTipo('');
        onClose();
    }

    return (
        <Flex justifyContent='end' w='100%'>
            <Button bg='green.200' _hover={{bg: 'green.400'}} onClick={onOpen}>
                <FaPlus color='white'/>
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Transação</ModalHeader>
                    <ModalCloseButton/>
                    <form onSubmit={handleSubmit}>
                        <ModalBody>
                            <VStack gap='2'>
                                <HStack w='100%'>
                                    <Button w='100%' bg={changeTypeEntradas} _hover={{bg: 'green.400'}} color='white'
                                            onClick={() => handleChangeTipo('entrada')}>Entrada</Button>
                                    <Button w='100%' bg={changeTypeSaidas} _hover={{bg: 'red.400'}} color='white'
                                            onClick={() => handleChangeTipo('saida')}>Saída</Button>
                                </HStack>
                                <Input placeholder='Nome' onChange={(event) => setNome(event.target.value)}/>
                                <Input placeholder='Valor' onChange={(event) => setValor(event.target.value)}/>
                            </VStack>
                        </ModalBody>

                        <ModalFooter>
                            <Button type='submit' bg='green.200' _hover={{bg: 'green.400'}} color='white'>Cadastrar
                                Transação</Button>
                        </ModalFooter>

                    </form>
                </ModalContent>
            </Modal>
        </Flex>
    )
}