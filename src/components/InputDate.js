import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

import Root from "../styles/root";

function InputDate({ placeholder, onChange, style, value }) {
    const [inputValue, setInputValue] = useState(value || ""); // Estado para armazenar o valor do input

    // Função para formatar a data no formato DD/MM/AAAA
    const formatDate = (text) => {
        // Remove qualquer caractere não numérico
        let cleanedText = text.replace(/[^0-9]/g, '');

        // Formata a data como DD/MM/AAAA
        if (cleanedText.length > 2) {
            cleanedText = cleanedText.substring(0, 2) + "/" + cleanedText.substring(2);
        }
        if (cleanedText.length > 5) {
            cleanedText = cleanedText.substring(0, 5) + "/" + cleanedText.substring(5, 9);
        }

        return cleanedText.substring(0, 10); // Limita a 10 caracteres para o formato DD/MM/AAAA
    };

    const handleChange = (text) => {
        const formattedText = formatDate(text);
        setInputValue(formattedText); // Atualiza o estado com o valor formatado
        if (onChange) {
            // Chama a função onChange (passada do componente pai)
            onChange(formattedText);
        }
    };

    return (
        <TextInput
            style={[styles.container, style]}
            placeholder={placeholder}
            value={inputValue} // Exibe o valor formatado
            onChangeText={handleChange} // Chama a função de formatação e atualização do estado
            keyboardType="numeric" // Somente números serão permitidos
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        padding: 20,
        color: Root.placeholder,
        backgroundColor: Root.fundo2,
        fontWeight: '600',

        display: "flex",
        flexDirection: "row",
        overflow: 'hidden',

        borderRadius: 10,
    },
});

export default InputDate;
