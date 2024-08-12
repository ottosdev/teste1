import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {ChakraProvider} from "@chakra-ui/react";
import AuthContextProvider from "./context/useAuth.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthContextProvider>
            <ChakraProvider>
                <App/>
            </ChakraProvider>
        </AuthContextProvider>
    </StrictMode>,
)
