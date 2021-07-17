import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';


var bookNum = 0;

const BookViewerScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <View style={styles.container}>
            {(() => {
              if (bookNum == 0){
                  return (
                    <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'center',
                      marginBottom: 16
                    }}>
                    This is Book viewer screen
                  </Text>
                  )
              }

              else{
                return (
                    <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'center',
                      marginBottom: 16
                    }}>
                    You have one book
                  </Text>
                  )
              }
              
              return null;
            })()}
        </View>


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
});
export default BookViewerScreen;