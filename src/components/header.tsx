import {HStack} from "@chakra-ui/react";
import {useContext} from "react";
import {AuthContext} from "../context/useAuth.tsx";
import MenuComponent from "./menu.tsx";

export default function Header() {
    const {nome } = useContext(AuthContext);
    return (
        <HStack w='100%' justifyContent='space-between' alignItems='center' height='10vh' borderBottom='1px solid #00000020'>
            <h1>Olá, {nome}</h1>
            <MenuComponent/>
        </HStack>
    )
}