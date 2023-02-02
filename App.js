import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font'
import Home from './screens/Home';
import About from './screens/About'
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import Navigator from "./routes/drawer"
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native-web';
import { globalStyles } from './styles/global';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})

const [reviews, setReviews] = useState([
  { title: 'Zelda, Breth of Fresh Air1', rating: '5', body: 'lorem ipsum', key: '1' },
  { title: 'Zelda, Breth of Fresh Air2', rating: '5', body: 'lorem ipsum', key: '2' },
  { title: 'Zelda, Breth of Fresh Air3', rating: '5', body: 'lorem ipsum', key: '3' },
]);

export default function App() {

  <View style={globalStyles.container}>
    <FlatList
      data={reviews}
      renderItem={(item) => (
        <TouchableOpacity onPress={() => navigator.navigate('ReviewDetails', item)}>
          <Text style={globalStyles.titleText}>{item.title}</Text>
        </TouchableOpacity>
      )}

    />
  </View>


}

