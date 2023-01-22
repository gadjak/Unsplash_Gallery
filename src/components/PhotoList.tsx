import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks';
import { RootStackParamList } from '../Navigation';
import { fetchPhotos } from '../store/photoSlice';
import { styles } from '../styles';
import { fetchedPhoto } from '../types';
import SmallPhoto from './SmallPhoto';


const PhotosList: React.FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = (navigation) => {
  const dispatch = useAppDispatch()

  const { photos, loading } = useAppSelector((state) => state.photos)

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])

  if (loading) {
    return <ActivityIndicator style={styles.center} size="large" color={"rgb(25 118 210)"} />
  }
  return (
    <View style={styles.photoList}>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={photos}
        renderItem={({ item }) => (
          <SmallPhoto
            navigation={navigation}
            src={item.urls.regular}
            id={item.id}
            author={item.user.name}
          />
        )}
        keyExtractor={(item: fetchedPhoto) => item.id}

      />
    </View>
  );
};

export default PhotosList;