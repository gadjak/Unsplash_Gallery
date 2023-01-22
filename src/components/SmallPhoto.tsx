import React from 'react';
import {Text,  Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles'
import { Props } from '../types';

const SmallPhoto: React.FC<Props> = ({ navigation, src, id, author }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigation.navigate('SkopePhoto', {
            src: src,
            id: id,
            author: author
        })} style={styles.photoView}>
            <Image source={{ uri: src }}
                style={styles.smallPhoto}
            />
            <Text style={styles.descriptionText}>Name: {id}</Text>
            <Text style={styles.descriptionText}>Author: {author}</Text>
        </TouchableOpacity>
    );
};

export default SmallPhoto;
