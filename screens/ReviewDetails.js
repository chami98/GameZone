import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import Card from '../shared/card';
import { images } from '../styles/global';

export default function ReviewDetails({ navigation }) {

    const reating = navigation.getParam('rating');


    return (
        <View style={styles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating</Text>
                    <Image
                        source={images.ratings[rating]}
                    />
                </View>

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 15,
        marginTop: 15,
        borderTopWidth: 2,
        borderTopColor: '#eee',
    }

});

