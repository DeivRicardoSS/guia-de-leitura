
import { createContext, useState, useContext } from "react";
import * as SecureStore from 'expo-secure-store'; // Importando o SecureStore

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        nome: undefined,
        nascimento: undefined,
        sexo: undefined,
        email: undefined,
        senha: undefined,
        avatar: undefined,
        userId: undefined,
        livros: [],
        xpTotal: 0,
        xpSemanal: 0,
        amigos: [],
        lidas: 0
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    );
}

export function useUpdateUser(){
    const { setUser } = useContext(UserContext);
    
    const updateUser = async (novoUser) => {
        try {
            setUser(novoUser);
            await SecureStore.setItemAsync('user', JSON.stringify(novoUser));
            console.log("Usário atualizado com sucesso!");
        } catch (error) {
            console.log("Erro ao atualizar o usário:", error);
        }
    };

    return { updateUser }
}

export function useUser() {
    return useContext(UserContext);
}