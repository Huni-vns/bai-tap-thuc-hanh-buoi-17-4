import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import BeveragesScreen from './src/screens/BeveragesScreen';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = (to, item = null) => {
    if (item) setSelectedItem(item);
    setScreen(to);
  };

  if (screen === 'detail') return <ProductDetailScreen item={selectedItem} navigate={navigate} />;
  if (screen === 'explore') return <ExploreScreen navigate={navigate} />;
  if (screen === 'beverages') return <BeveragesScreen navigate={navigate} />;
  
  return <HomeScreen navigate={navigate} />;
}