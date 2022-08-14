import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = React.useState('Delivery');
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
        activeTab={activeTab}
        // activeTab={props.activeTab}
        setActiveTab={setActiveTab}
        // setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text='Pickup'
        btnColor='white'
        textColor='black'
        activeTab={activeTab}
        // activeTab={props.activeTab}
        setActiveTab={setActiveTab}
        // setActiveTab={props.setActiveTab}
      />
      {/* Header Button  */}
      {/* Header Button  */}
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}>
    <Text
      style={{
        color: props.activeTab === props.text ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
