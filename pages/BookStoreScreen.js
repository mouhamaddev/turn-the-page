import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const BookStoreScreen = ({ navigation }) => {




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          

<View>

<TouchableOpacity>


          <ImageBackground opacity={1}
  source={require('../books/stephen.jpg')}
  style={{
    height: 200,
    width: 400,
    position: 'relative', // because it's parent
    top: 2,
    left: 2,

    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "black"
  }}
>
  <Text
    style={{
      fontSize: 20,
      color: 'white',
      position: 'absolute', // child
      bottom: 50, // position where you want
      left: 20
    }}
  >
    extra 20% off on
  </Text>

  <Text
    style={{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      bottom: 17, // position where you want
      left: 20
    }}
  >
    Stephen King books
  </Text>
</ImageBackground>

</TouchableOpacity>

</View>

<View>

<Text
    style={{
      fontSize: 20,
      fontWeight: 'bold',

    }}>
    Featured Books</Text>

    <Button
        title="Go to Details"
        onPress={() => navigation.navigate('BookViewerScreen')}
      />

</View>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => this.props.navigation.navigate('BookViewer')
            }>
            <Text>Go to settng Tab</Text>
          </TouchableOpacity>


        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },

  image: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch'
}
});
export default BookStoreScreen;