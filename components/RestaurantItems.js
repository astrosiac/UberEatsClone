import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MateralCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import localRestaurants from '../DummyData/localRestaurants';

export const localRestaurants = [
  {
    name: 'Blah',
    image_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/220px-Restaurant_N%C3%A4sinneula.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1234,
    rating: 4.7,
  },
];

export default function RestaurantItems(props) {
  console.log(props.restaurantData);
  return (
    <TouchableOpacity activeOpacity={1} style={{ maginBottom: 30 }}>
      {props.restaurantData.map((restaurant, index) => {
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: ' white' }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>;
      })}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: '100%', height: 180 }}
    />
    <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
      <MateralCommunityIcons name='heart-outline' size={25} color='red' />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: 'lightgray',
        height: 30,
        width: 30,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
      }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);
