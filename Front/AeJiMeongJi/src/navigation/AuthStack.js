import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigation></Stack.Navigation>
        </NavigationContainer>
    );
};

export default AuthStack;