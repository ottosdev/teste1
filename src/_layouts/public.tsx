import {Center, Container, Flex} from "@chakra-ui/react";
import {Outlet, useNavigate} from "react-router";
import {useContext, useEffect} from "react";
import {AuthContext} from "../context/useAuth.tsx";

export default function PublicLayout() {
    const {autenticado } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(autenticado) {
            navigate('/dashboard');
        }
    }, [autenticado, navigate]);

    return (
        <Flex justifyContent='center' alignItems='center' height='100vh' bg='gray.200'>
            <Container>
                <Center bg='white' height='300px' rounded='8px' px='16px'>
                    <Outlet/>
                </Center>
            </Container>
        </Flex>
    )
}