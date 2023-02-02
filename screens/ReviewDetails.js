import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'

export default function ReviewDetails({ navigation }) {



    return (
        <View style={styles.container}>
            <Text>{navigation.getParam()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});

