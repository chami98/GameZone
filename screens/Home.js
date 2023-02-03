import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { FlatList } from 'react-native-gesture-handler';




export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }

    return (
        <View style={globalStyles.container}>
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
    }
});

