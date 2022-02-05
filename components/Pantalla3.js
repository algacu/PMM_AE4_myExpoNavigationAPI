import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, ScrollView, Text, StyleSheet, View, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const Pantalla3 = () => {

    //llamadas axios a API
    const [datos, setDatos] = useState([]);
    const [name, setName] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        getDatos();
    }, [])

    const getDatos = async () => {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`);
        setDatos(res.data.results);
    }

    const lista = datos.map((user) => (
        <View key={user.id} style={styles.tarjeta}>
            <Image style={styles.imagen} source={{ uri: user.image }} />
            <Text style={styles.nombre}>{user.name}</Text>
            <Text style={styles.especie}>{user.species}</Text>
        </View>
    ));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buscador de personajes</Text>
            <TextInput style={styles.input} placeholder='Introduce un nombre' value={search} onChangeText={setSearch}/>
            <Button title='Buscar' onPress={getDatos}/>
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
    input:{
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
    nombre: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    especie: {
        marginTop: 5,
        fontSize: 16,
        textAlign: 'center',
    },
    imagen: {
        height: 130,
        width: 130,
        borderRadius: 10,
    }
});

export default Pantalla3;