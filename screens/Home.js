import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems from '../components/home/RestaurantItems';
import { localRestaurants } from '../DummyData/localRestaurants';
import BottomTabs from '../components/home/BottomTabs';
// import { localRestaurants } from '../components/RestaurantItems';
import { Divider } from 'react-native-elements';
const YELP_API_KEY =
  'Iiz3wiE8aYhgEnr0lT-oOoRqAEBJFm_F6IMAD4_rmvaMCGLv4C94ADoFauoelVy1iPFHG0rLON3pLbpzB6eGbNTPvhAz1aAWPN2YlJGQ7nvsNn4IlYY_suw-9Eb1YnYx';
const config = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x- requested - wth': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
  params: {
    term: 'restaurants',
    location: 'new york, ny',
    radius: 1000,
    sort_by: 'relevance',
    limit: 10,
  },
};

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('NYC');
  const [activeTab, setActiveTab] = useState('Delivery');
  // const auth = {
  //   Authorization: `Bearer ${YELP_API_KEY}`,
  // };

  // const getRest = async () => {
  //   const url = `https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972`;
  //   try {
  //     const { data } = await axios.get(url, { headers: auth });
  //     console.log(data);
  //   } catch (err) {
  //     return { Error: err.stack };
  //   }
  // };

  // getRest();
  // const getRestaurantsFromYelp = async () => {
  //   const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  //   const apiOptions = {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     headers: {
  //       Accept: 'application/json',
  //       // 'Content-Type': 'application/json',
  //       // 'x- requested - wth': 'XMLHttpRequest',
  //       'Access-Control-Allow-Origin': '*',
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //     },
  //   };
  //   // return await fetch(yelpUrl, apiOptions)
  //   //   .then((res) => res.json())
  //   //   .then((json) => {
  //   //     return setRestaurantData(json.businesses);
  //   //   });
  //   const response = await fetch(yelpUrl, apiOptions);
  //   const { businesses } = await response.json();
  //   setRestaurantData(
  //     businesses.filter((restaurant) =>
  //       restaurant.transactions.includes(activeTab.toLowerCase())
  //     )
  //   );
  //   console.log(setRestaurantData(businesses));
  // };
  // useEffect(() => {
  //   getRestaurantsFromYelp();
  // }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
