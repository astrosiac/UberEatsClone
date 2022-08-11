import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function HeaderTabs() {
  const [selectedTab, setSelectedTab] = React.useState('Delivery');
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      <HeaderButton
        text='Delivery'
        btnColor='black'
        textColor='white'
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <HeaderButton
        text='Pickup'
        btnColor='white'
        textColor='black'
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {/* Header Button  */}
      {/* Header Button  */}
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.selectedTab === props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setSelectedTab(props.text)}>
    <Text
      style={{
        color: props.selectedTab === props.text ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
