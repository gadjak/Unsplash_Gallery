import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhotosList from './components/PhotoList';
import SkopePhoto from './components/SkopePhoto';
import { NavigationScreenProp } from 'react-navigation';

export type RootStackParamList = {
    Home: { navigation: NavigationScreenProp<any, any> };
    SkopePhoto: {
        src: string
        id: string,
        author: string
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={PhotosList}
                    options={{ title: 'List' }}
                />
                <Stack.Screen
                    name="SkopePhoto"
                    component={SkopePhoto}
                    options={{ title: 'Photo' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MyStack;