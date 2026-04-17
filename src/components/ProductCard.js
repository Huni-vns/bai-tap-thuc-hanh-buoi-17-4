import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { s } from '../styles/globalStyles';

export function ProductCard({ emoji, name, unit, price, onAdd }) {
  return (
    <View style={s.prodCard}>
      <Text style={s.prodEmoji}>{emoji}</Text>
      <Text style={s.prodName} numberOfLines={1}>{name}</Text>
      <Text style={s.prodUnit}>{unit}</Text>
      <View style={s.prodRow}>
        <Text style={s.prodPrice}>{price}</Text>
        <TouchableOpacity style={s.addBtn} onPress={onAdd}>
          <Text style={s.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}