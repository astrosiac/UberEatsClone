import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems from '../components/RestaurantItems';
// import { localRestaurants } from '../DummyData/localRestaurants';
import { localRestaurants } from '../components/RestaurantItems';
import axios, { Axios } from 'axios';

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

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('NYC');
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
  const getRestaurantsFromYelp = async (req, res) => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=NYC`;
    const apiOptions = {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
        // 'x- requested - wth': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${YELP_API_KEY}`,
      },
    };
    // return await fetch(yelpUrl, apiOptions)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     return setRestaurantData(json.businesses);
    //   });
    const response = await fetch(yelpUrl, apiOptions);
    const { businesses } = await response.json();
    setRestaurantData(businesses);
    console.log(setRestaurantData(businesses));
  }
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
