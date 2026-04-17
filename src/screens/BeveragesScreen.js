import React from 'react';
import { View, Text, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { s } from '../styles/globalStyles';
import { TabBar } from '../components/TabBar';

export default function BeveragesScreen({ navigate }) {
  const items = [
    { id: 'b1', emoji: '🥤', name: 'Diet Coke', unit: '325ml, Price', price: '$1.99' },
    { id: 'b2', emoji: '🫙', name: 'Sprite Can', unit: '325ml, Price', price: '$1.50' },
    { id: 'b3', emoji: '🍇', name: 'Apple & Grape Juice', unit: '2L, Price', price: '$15.99' },
    { id: 'b4', emoji: '🧃', name: 'Orange Juice', unit: '2L, Price', price: '$15.99' },
    { id: 'b5', emoji: '🥫', name: 'Coca Cola Can', unit: '325ml, Price', price: '$4.99' },
    { id: 'b6', emoji: '🫗', name: 'Pepsi Can', unit: '330ml, Price', price: '$4.99' },
  ];

  const renderItem = ({ item }) => (
    <View style={s.bevCard}>
      <Text style={s.bevEmoji}>{item.emoji}</Text>
      <Text style={s.prodName}>{item.name}</Text>
      <Text style={s.prodUnit}>{item.unit}</Text>
      <View style={s.prodRow}>
        <Text style={s.prodPrice}>{item.price}</Text>
        <TouchableOpacity style={s.addBtn}><Text style={s.addBtnText}>+</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={s.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={s.bevHeader}>
        <TouchableOpacity style={s.pdBtn} onPress={() => navigate('explore')}>
          <Text style={s.pdBtnText}>‹</Text>
        </TouchableOpacity>
        <Text style={s.bevTitle}>Beverages</Text>
        <TouchableOpacity style={s.pdBtn}><Text style={s.pdBtnText}>⚙</Text></TouchableOpacity>
      </View>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={s.bevRow}
        contentContainerStyle={s.bevList}
        showsVerticalScrollIndicator={false}
      />
      <TabBar active="home" onPress={(key) => key === 'home' && navigate('home')} />
    </SafeAreaView>
  );
}