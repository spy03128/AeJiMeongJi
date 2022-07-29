import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProfileHomeScreen from '../screens/Profile/ProfileHomeScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return <Stack.Navigator>
    <Stack.Screen name="profileHome" component={ProfileHomeScreen} />
  </Stack.Navigator>;
};

export default ProfileStack;
