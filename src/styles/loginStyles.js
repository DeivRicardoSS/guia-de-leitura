import React, { useState } from "react";
import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        gap: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 700
    },
    erro: {
        color: 'red'
    }
});

export default loginStyles;