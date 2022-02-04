import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const PantallaPrincipal = () => {
//llamadas axios a API
const [datos, setDatos] = useState([]);
const searchTerm = "david";
useEffect(() =>{
getDatos();
},[])
const getDatos = async() => {
const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
setDatos(res.data.items);
console.log(datos);
}

const Pantalla3 = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Pantalla3