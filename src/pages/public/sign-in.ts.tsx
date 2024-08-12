import {Button, HStack, Input, Text, useToast, VStack} from "@chakra-ui/react";
import {useNavigate} from "react-router";
import {FaEye, FaEyeSlash} from 'react-icons/fa6'
import {useSearchParams} from "react-router-dom";
import {FormEvent, useContext, useState} from "react";
import {AuthContext} from "../../context/useAuth.tsx";

export default function SignIn() {
    const {login} = useContext(AuthContext);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [email, setEmail] = useState(() => {
        return searchParams.get('email') ?? '';
    });
    const [senha, setSenha] = useState('')
    const [lookPassword, setLookPassword] = useState(false)
    const toast = useToast();
    function handleGoToRegister() {
        navigate('/user-register');
    }

    function handleLookPassword() {
        setLookPassword(!lookPassword);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        try {
            await login(email, senha);
            navigate('/dashboard', {replace: true});
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            toast({
                title: 'Error',
                description: 'Error ao realizar o login',
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
                <Text as='strong'>Sign in</Text>
                <Input placeholder='E-mail' value={email} onChange={(event) => setEmail(event.target.value)}/>
                <HStack w='100%'>
                    <Input placeholder='Senha' type={lookPassword ? 'text' : 'password'}
                           onChange={(event) => setSenha(event.target.value)}/>
                    <Button onClick={handleLookPassword}>
                        {
                            lookPassword ? <FaEye/> : <FaEyeSlash/>
                        }
                    </Button>
                </HStack>
                <HStack>
                    <Button type='submit' colorScheme='blue'>Entrar</Button>
                    <Button onClick={handleGoToRegister}>Registar</Button>
                </HStack>
            </VStack>
        </form>
    )
}