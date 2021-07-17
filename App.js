import 'react-native-gesture-handler';

import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import BookStoreScreen from './pages/BookStoreScreen';
import AudioBookScreen from './pages/AudioBookScreen';
import LibraryScreen from './pages/LibraryScreen';
import SearchScreen from './pages/SearchScreen';
import BookViewerScreen from './pages/BookViewerScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BookStoreStack() {
  return (
      <Stack.Navigator
        initialRouteName="BookStore"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen
          name="BookStore"
          component={BookStoreScreen}
          options={{ title: 'BookStore Page' }}/>
        <Stack.Screen
          name="BookViewer"
          component={BookViewerScreen}
          options={{ title: 'BookViewer Page' }} />
      </Stack.Navigator>
  );
}

function AudioBookStack() {
  return (
    <Stack.Navigator
      initialRouteName="AudioBook"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AudioBook"
        component={AudioBookScreen}
        options={{ title: 'AudioBook Page' }}/>

    </Stack.Navigator>
  );
}

function LibraryStack() {
  return (
    <Stack.Navigator
      initialRouteName="Library"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Library"
        component={LibraryScreen}
        options={{ title: 'Library Page' }}/>

    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Search Page' }}/>

    </Stack.Navigator>
  );
}

function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#FFFFF',
        }}>
        
<Tab.Screen
          name="LibraryStack"
          component={LibraryStack}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="bookshelf"
                color={color}
                size={size}
              />
            ),
          }} />


<Tab.Screen
          name="BookStoreStack"
          component={BookStoreStack}
          options={{
            tabBarLabel: 'BookStore',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="store"
                color={color}
                size={size}
              />
            ),
          }}  />


<Tab.Screen
          name="SearchStack"
          component={SearchStack}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
          }} />


         
<Tab.Screen
          name="AudioBookStack"
          component={AudioBookStack}
          options={{
            tabBarLabel: 'AudioBook',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="headphones"
                color={color}
                size={size}
              />
            ),
          }} />

          
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;