import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Modal } from 'react-native'
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '.@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import ReviewForm from './ReviewForm';




export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false)

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                    />
                    <ReviewForm />
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }, titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        margin: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1
    }
});

