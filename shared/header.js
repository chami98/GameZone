import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackgound } from react - native;
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackgound source={require('../assets/game_bg.png')} styles={styles.header}>
            <MaterialIcons
                name='menu' size={28}
                onPress={openMenu} style={styles.icon}
            />
            <View style={styles.headerTitle}>
                <Image
                    source={require('../assets/heart-logo.png')}
                    style={styles.headerImage}
                />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackgound>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        heifgt: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerTitle: {
        flexDirection: 'row',
    },

    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    }
})