import {Container, VStack} from "@chakra-ui/react";
import {Outlet} from "react-router";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function PrivateLayout() {
    return (
        <Container justifyContent='center' alignItems='center' maxWidth='1280px' height='100vh'>
            <Header/>
            <VStack height='80vh' alignItems='start' py='4' w='100%'>
                <Outlet/>
            </VStack>
            <Footer/>
        </Container>
        )
}