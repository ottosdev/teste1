import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import {useContext} from "react";
import {AuthContext} from "../context/useAuth.tsx";
import {useNavigate} from "react-router";
export default function MenuComponent() {
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate()
    function signOut() {
        logout();
        navigate('/')
    }
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<RxHamburgerMenu />} bg='transparent' _hover={{bg: 'transparent'}}/>
            <MenuList>
                <MenuItem onClick={signOut}>Sair</MenuItem>
            </MenuList>
        </Menu>
    )
}