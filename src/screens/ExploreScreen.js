import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { s } from '../styles/globalStyles';
import { TabBar } from '../components/TabBar';

export default function ExploreScreen({ navigate }) {
  const categories = [
    { emoji: '🥦', name: 'Fresh Fruits &\nVegetable', bg: '#FFF8F0' },
    { emoji: '🍳', name: 'Cooking Oil\n& Ghee', bg: '#FFF3E0' },
    { emoji: '🐟', name: 'Meat & Fish', bg: '#FBE9E7' },
    { emoji: '🥐', name: 'Bakery &\nSnacks', bg: '#FFF8E1' },
    { emoji: '🥚', name: 'Dairy & Eggs', bg: '#F3E5F5' },
    { emoji: '🥤', name: 'Beverages', bg: '#E3F2FD' },
  ];

  return (
    <SafeAreaView style={s.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={s.expHeader}><Text style={s.expTitle}>Find Products</Text></View>
      <TouchableOpacity style={s.searchBar} activeOpacity={0.8}>
        <Text style={{ fontSize: 14 }}>🔍</Text>
        <Text style={s.searchPlaceholder}>Search Store</Text>
      </TouchableOpacity>
      <ScrollView style={s.flex} showsVerticalScrollIndicator={false}>
        <View style={s.catGrid}>
          {categories.map((cat) => (
            <TouchableOpacity key={cat.name} style={[s.catCard, { backgroundColor: cat.bg }]} onPress={() => cat.name.includes('Beverages') && navigate('beverages')}>
              <Text style={s.catEmoji}>{cat.emoji}</Text>
              <Text style={s.catName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TabBar active="explore" onPress={(key) => key === 'home' && navigate('home')} />
    </SafeAreaView>
  );
}