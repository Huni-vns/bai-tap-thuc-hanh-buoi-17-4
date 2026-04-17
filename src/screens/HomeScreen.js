import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { C } from '../constants/Colors';
import { s } from '../styles/globalStyles';
import { ProductCard } from '../components/ProductCard';
import { TabBar } from '../components/TabBar';

export default function HomeScreen({ navigate }) {
  const exclusiveItems = [
    { id: '1', emoji: '🍌', name: 'Organic Bananas', unit: '7pcs', price: '$4.99' },
    { id: '2', emoji: '🍎', name: 'Red Apple', unit: '1kg', price: '$4.99' },
    { id: '3', emoji: '🫚', name: 'Sunflower Oil', unit: '1L', price: '$3.49' },
    { id: '4', emoji: '🧅', name: 'Onion', unit: '1kg', price: '$2.99' },
  ];
  const bestSelling = [
    { id: '5', emoji: '🍅', name: 'Bell Pepper', unit: '1kg', price: '$4.99' },
    { id: '6', emoji: '🥬', name: 'Ginger', unit: '250g', price: '$4.99' },
    { id: '7', emoji: '🥕', name: 'Carrot', unit: '1kg', price: '$3.50' },
    { id: '8', emoji: '🍋', name: 'Lemon', unit: '6pcs', price: '$2.49' },
  ];
  const groceryTabs = [
    { label: 'Pulses', emoji: '🫘', bg: '#FFF3E0' },
    { label: 'Rice', emoji: '🍚', bg: '#F3E5F5' },
    { label: 'Vegetables', emoji: '🥬', bg: '#E8F5E9' },
  ];
  const groceryProducts = [
    { id: 'g1', emoji: '🦴', name: 'Beef Bone', unit: '1kg', price: '$4.99' },
    { id: 'g2', emoji: '🍗', name: 'Broiler Chicken', unit: '1kg', price: '$4.99' },
  ];

  return (
    <SafeAreaView style={s.screen}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={s.flex} showsVerticalScrollIndicator={false}>
        <View style={s.homeHeader}>
          <Text style={{ fontSize: 24 }}>🥕</Text>
          <View style={s.locationRow}>
            <Text style={{ fontSize: 13 }}>📍</Text>
            <Text style={s.locationText}>Dhaka, Banasree</Text>
          </View>
        </View>

        <View style={s.searchBar}>
          <Text style={{ fontSize: 14, color: C.gray }}>🔍</Text>
          <TextInput placeholder="Search Store" placeholderTextColor={C.gray} style={s.searchInput} editable={false} />
        </View>

        <View style={s.banner}>
          <View style={s.bannerInner}>
            <View>
              <Text style={s.bannerSmall}>Exclusive Offer</Text>
              <Text style={s.bannerTitle}>{'Fresh\nVegetables'}</Text>
              <Text style={s.bannerTag}>Get Up To 40% OFF</Text>
            </View>
            <Text style={{ fontSize: 52 }}>🥦</Text>
          </View>
        </View>

        <View style={s.dots}>
          <View style={[s.dot, s.dotActive]} />
          <View style={s.dot} /><View style={s.dot} />
        </View>

        <View style={s.sectionHeader}>
          <Text style={s.sectionTitle}>Exclusive Offer</Text>
          <TouchableOpacity><Text style={s.seeAll}>See all</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.hScrollContent}>
          {exclusiveItems.map((item) => (
            <ProductCard key={item.id} emoji={item.emoji} name={item.name} unit={item.unit} price={item.price} onAdd={() => navigate('detail', item)} />
          ))}
        </ScrollView>

        <View style={s.sectionHeader}>
          <Text style={s.sectionTitle}>Best Selling</Text>
          <TouchableOpacity><Text style={s.seeAll}>See all</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.hScrollContent}>
          {bestSelling.map((item) => (
            <ProductCard key={item.id} emoji={item.emoji} name={item.name} unit={item.unit} price={item.price} onAdd={() => navigate('detail', item)} />
          ))}
        </ScrollView>

        <View style={s.sectionHeader}>
          <Text style={s.sectionTitle}>Groceries</Text>
          <TouchableOpacity><Text style={s.seeAll}>See all</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.hScrollContent}>
          {groceryTabs.map((g) => (
            <TouchableOpacity key={g.label} style={[s.grocPill, { backgroundColor: g.bg }]}>
              <Text style={{ fontSize: 22 }}>{g.emoji}</Text>
              <Text style={s.grocPillLabel}>{g.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={s.grocGrid}>
          {groceryProducts.map((item) => (
            <View key={item.id} style={s.grocCard}>
              <Text style={s.grocCardEmoji}>{item.emoji}</Text>
              <Text style={s.prodName}>{item.name}</Text>
              <Text style={s.prodUnit}>{item.unit}</Text>
              <View style={s.prodRow}>
                <Text style={s.prodPrice}>{item.price}</Text>
                <TouchableOpacity style={s.addBtn}><Text style={s.addBtnText}>+</Text></TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TabBar active="home" onPress={(key) => key === 'explore' && navigate('explore')} />
    </SafeAreaView>
  );
}