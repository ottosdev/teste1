import {createContext, ReactNode, useState} from "react";
import {signIn, SignInRequest} from "../services/auth/sign-in.ts";
import {useToast} from "@chakra-ui/react";
interface AuthContextProps {
    nome: string;
    login: (email: string, senha: string) => Promise<void>
    autenticado: boolean;
    logout: () => void;
}

interface AuthContextProviderProps {
    children: ReactNode
}

// responsavel por dizer o que ira ser disponibilizado
export const AuthContext = createContext({} as AuthContextProps);

export default function AuthContextProvider({children}: AuthContextProviderProps) {
    const toast = useToast();
    const [nome, setNome] = useState(() => {
        return window.localStorage.getItem('@nome') ?? ''
    });

    const [autenticado, setAutenticado] = useState(() => {
        const token = window.localStorage.getItem('@token');
        return !!token;
    });

    async function login(email: string, senha: string) {
            const data: SignInRequest = {
                email,
                password: senha
            }
            const response =  await signIn(data);
            window.localStorage.setItem('@token', response.data.token);
            window.localStorage.setItem('@nome', response.data.name);
            setAutenticado(true);
            setNome(response.data.name);
            toast({
                title: 'Sucesso',
                description: 'Seja bem vindo, ' + response.data.name,
                isClosable: true,
                status: 'success',
                duration: 3000,
                position: 'top-right'
            })
    }

    function logout() {
        window.localStorage.removeItem('@token');
        window.localStorage.removeItem('@nome');
        setAutenticado(false)
    }


    return (
        <AuthContext.Provider value={{nome, login, autenticado, logout}}>
            {children}
        </AuthContext.Provider>
    )
}