import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { s } from '../styles/globalStyles';

export function TabBar({ active, onPress }) {
  const tabs = [
    { key: 'home', icon: '🏪', label: 'Shop' },
    { key: 'explore', icon: '🔍', label: 'Explore' },
    { key: 'cart', icon: '🛒', label: 'Cart' },
    { key: 'fav', icon: '❤️', label: 'Favourite' },
    { key: 'account', icon: '👤', label: 'Account' },
  ];
  return (
    <View style={s.tabBar}>
      {tabs.map((t) => (
        <TouchableOpacity
          key={t.key}
          style={s.tabItem}
          onPress={() => onPress && onPress(t.key)}
        >
          <Text style={s.tabIcon}>{t.icon}</Text>
          <Text style={[s.tabLabel, active === t.key && s.tabLabelActive]}>
            {t.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}