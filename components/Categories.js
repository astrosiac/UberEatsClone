import { View, Text, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-web';

const items = [
  { image: require('../assets/images/shopping-bag.png'), text: 'Pick-up' },
  { image: require('../assets/images/soft-drink.png'), text: 'Soft Drinks' },
  { image: require('../assets/images/bread.png'), text: 'Bakery' },
  { image: require('../assets/images/coffee.png'), text: 'Cafe' },
  { image: require('../assets/images/desserts.png'), text: 'Dessert' },
  { image: require('../assets/images/deals.png'), text: 'Deals' },
  { image: require('../assets/images/fast-food.png'), text: 'Fast Food' },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* loop starts */}
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: 'contain',
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: '900' }}>
              {items[0].text}
            </Text>
          </View>
        ))}
        {/* loop ends */}
      </ScrollView>
    </View>
  );
}
