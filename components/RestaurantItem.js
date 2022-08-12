import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MateralCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
    </View>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      }}
      style={{ width: '100%', height: 180 }}
    />
    <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
      <MateralCommunityIcons name='heart-outline' size={25} color='red' />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <Text>Burrito Store</Text>
    <Text>30-45 • min</Text>
    <Text>4.5</Text>
  </View>
);
