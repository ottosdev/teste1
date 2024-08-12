import {Button, HStack, Input, Text, useToast, VStack} from "@chakra-ui/react";
import {useNavigate} from "react-router";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {FormEvent, useState} from "react";
import {signUp, UserRegisterRequest} from "../../services/auth/user-register.ts";

export default function UserRegister() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [lookPassword, setLookPassword] = useState(false)
    const navigate = useNavigate();
    const toast = useToast();
    function handleGoToSignIn() {
        navigate('/');
    }

    function handleLookPassword() {
        setLookPassword(!lookPassword);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        try {
            const data: UserRegisterRequest = {
                name: nome,
                email,
                password: senha
            }

            await signUp(data);
            toast({
                title: 'Sucesso',
                description: 'Usuario cadastrado com sucesso',
                isClosable: true,
                status: 'success',
                duration: 3000,
                position: 'top-right'

            })
            navigate('/?email=' + email)
            setNome('')
            setEmail('')
            setSenha('')
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            toast({
                title: 'Error',
                description: 'Error ao  cadastrar usuario',
                isClosable: true,
                status: 'error',
                duration: 3000,
                position: 'top-right'

            })
        }

    }

    return (
        <form style={{width: '100vw'}} onSubmit={handleSubmit}>
            <VStack>
                <Text as='strong'>Register</Text>
                <Input placeholder='Nome' onChange={(event) => setNome(event.target.value)}/>
                <Input placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
                <HStack w='100%'>
                    <Input placeholder='Senha' type={lookPassword ? 'text' : 'password'}
                           onChange={(event) => setSenha(event.target.value)}/>
                    <Button onClick={handleLookPassword}>
                        {
                            lookPassword ? <FaEye/> : <FaEyeSlash/>
                        }
                    </Button>
                </HStack>
                <HStack justifyContent='space-between' w='100%'>
                    <Button onClick={handleGoToSignIn}>Voltar</Button>
                    <Button type='submit' colorScheme='green'>Registar</Button>
                </HStack>
            </VStack>
        </form>
    )
}