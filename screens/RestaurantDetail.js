import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

export const foods = [
  {
    title: "Mom's Spaghetti",
    description: "Knees weak, arms heavy, mom's spaghetti its ready",
    price: '$33.33',
    image:
      'https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg',
  },
  {
    title: 'Yellow Dal',
    description:
      'Yellow dal is a vegetarian dish made from yellow lentils, which are cooked in a thick gravy with a variety of vegetables and spices.',
    price: '$19.20',
    image:
      'https://www.vegetariantimes.com/wp-content/uploads/2017/05/dal1_2000_1125.jpg?crop=4:3&width=1600',
  },
  {
    title: 'Nachos',
    description:
      'Nachos are a traditional Mexican dish consisting of a corn tortilla, usually wrapped in a flour tortilla, filled with a filling such as jalapeño, beans, or ground beef, and then deep-fried.',
    price: '$19.20',
    image:
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/03/Nachos-main-1.jpg',
  },
  {
    title: 'Hamburger',
    description:
      'A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
    price: '$21.50',
    image:
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg',
  },
  {
    title: 'Cacio e Pepe',
    description:
      'Cacio e Pepe is a traditional Italian dish made with a combination of spaghetti, meat, and vegetables.',
    price: '$19.20',
    image:
      'https://assets.epicurious.com/photos/566853fd00de9d2a3815fc8e/1:1/w_2560%2Cc_limit/EP_12012015_dannymeyers_Maialino_pasta.jpg',
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
