import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import WelcomeScreen from './src/screens/Auth/WelcomScreen';
import MainHome from './src/screens/Home/MainHome';
import Initial from './src/screens/Initial';
import RunningHome from './src/screens/Running/RunningHome';



const Stack = createNativeStackNavigator();


// 파일을 만들어서, 홈, 산책, 온보딩으로 전달한다.

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Initial" component={Initial}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Running" component={RunningHome}/>
        <Stack.Screen name="Home" component={MainHome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Navigation />
    </>
  );
}
