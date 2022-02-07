import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, ScrollView, Text, StyleSheet, View, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const Pantalla4 = () => {

    //llamadas axios a API
    const [datos, setDatos] = useState([]);
    const [search, setSearch] = useState('');
    const [fronteras, setFronteras] = useState([]);


    // useEffect(() => {
    //     getDatos();
    // }, [])

    const getDatos = async () => {
        try{
            const resultado = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
            setDatos(resultado.data);
        } catch (error){
            console.log(error)
        }
    }

    const lista = datos.map((dato) => (
        <View id={dato.tld} style={styles.tarjeta}>
            <View id='cabecera' style={styles.bloque}>
                <Image style={styles.imagen} source={{ uri: dato.flags.png }} />
                <Text style={styles.title}>{dato.name.common}</Text>
                <Text style={styles.subtitle}>{dato.name.official}</Text>
            </View>
            <View id='region' style={styles.bloque}>
                <Text style={styles.texto}>Region: {dato.region}</Text>
            </View>
            <View id='social' style={styles.bloque}>
                <Text style={styles.texto}>Capital: {dato.capital}</Text>
                <Text style={styles.texto}>Población: {dato.population}</Text>
            </View>
        </View>
    ));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buscador de paises</Text>
            <TextInput style={styles.input} placeholder='Introduce un país' value={search} onChangeText={setSearch} />
            <Button title='Buscar' onPress={getDatos} />
            <View style={styles.container}>
                <ScrollView style={styles.container}>{lista}</ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    tarjeta: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    bloque: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        textAlign: 'center',
        alignItems: 'center',
        borderBottomColor: 'gray',
        width: 200,
        height: 30,
        marginTop: 10,
        marginLeft: 75,
        fontStyle: 'italic',
    },
    title: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    texto: {
        marginTop: 3,
        fontSize: 16,
        textAlign: 'center',
    },
    subtitle: {
        marginTop: 5,
        fontSize: 16,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    imagen: {
        height: 120,
        width: 200,
        borderRadius: 10,
    }
});

export default Pantalla4;