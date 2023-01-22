import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Image } from 'react-native';
import { RootStackParamList } from '../Navigation';

const SkopePhoto: React.FC<NativeStackScreenProps<RootStackParamList, 'SkopePhoto'>> = ({route}) => {

    return (
        <View>
            <Image source={{ uri: route.params.src }}
                style={{height:"100%",width:"100%"}}
            />
        </View>
    );
};
export default SkopePhoto;

