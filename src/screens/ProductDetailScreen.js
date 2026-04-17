import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { C } from '../constants/Colors';
import { s } from '../styles/globalStyles';

export default function ProductDetailScreen({ item, navigate }) {
  const [qty, setQty] = useState(1);
  const [inCart, setInCart] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [descOpen, setDescOpen] = useState(false);
  const [nutrOpen, setNutrOpen] = useState(false);

  const basePrice = 4.99;
  const totalPrice = (basePrice * qty).toFixed(2);

  return (
    <SafeAreaView style={s.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={s.pdTopBar}>
        <TouchableOpacity onPress={() => navigate('home')} style={s.pdBtn}>
          <Text style={s.pdBtnText}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.pdBtn}>
          <Text style={s.pdBtnText}>⬆</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={s.flex} showsVerticalScrollIndicator={false}>
        <View style={s.pdImage}>
          <Text style={{ fontSize: 110 }}>{item?.emoji || '🍎'}</Text>
        </View>

        <View style={s.pdBody}>
          <View style={s.pdTitleRow}>
            <View style={s.flex}>
              <Text style={s.pdName}>{item?.name || 'Naturel Red Apple'}</Text>
              <Text style={s.pdUnit}>1kg, Price</Text>
            </View>
            <TouchableOpacity onPress={() => setIsFav(!isFav)}>
              <Text style={{ fontSize: 22 }}>{isFav ? '❤️' : '🤍'}</Text>
            </TouchableOpacity>
          </View>

          <View style={s.pdQtyRow}>
            <View style={s.qtyCtrl}>
              <TouchableOpacity style={s.qtyBtn} onPress={() => qty > 1 && setQty(qty - 1)}>
                <Text style={s.qtyBtnText}>−</Text>
              </TouchableOpacity>
              <Text style={s.qtyNum}>{qty}</Text>
              <TouchableOpacity style={s.qtyBtn} onPress={() => setQty(qty + 1)}>
                <Text style={s.qtyBtnText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={s.pdPrice}>${totalPrice}</Text>
          </View>

          <View style={s.starsRow}>
            <Text style={{ fontSize: 13 }}>⭐⭐⭐⭐⭐</Text>
            <Text style={s.reviewCount}>(17 reviews)</Text>
          </View>

          <View style={s.accordion}>
            <TouchableOpacity style={s.accHeader} onPress={() => setDescOpen(!descOpen)}>
              <Text style={s.accTitle}>Product Detail</Text>
              <Text style={s.accArrow}>{descOpen ? '∧' : '∨'}</Text>
            </TouchableOpacity>
            {descOpen && (
              <Text style={s.accBody}>
                Apples are nutritious. Apples may be good for weight loss.
                Apples may be good for your heart.
              </Text>
            )}
          </View>

          <View style={s.accordion}>
            <TouchableOpacity style={s.accHeader} onPress={() => setNutrOpen(!nutrOpen)}>
              <Text style={s.accTitle}>Nutritions</Text>
              <View style={s.accBadge}><Text style={s.accBadgeText}>100gr</Text></View>
              <Text style={s.accArrow}>{nutrOpen ? '∧' : '∨'}</Text>
            </TouchableOpacity>
            {nutrOpen && (
              <View style={s.nutrRow}>
                {[['52kcal', 'Calories'], ['0.3g', 'Fat'], ['14g', 'Carbs']].map(([val, lbl]) => (
                  <View key={lbl} style={s.nutrItem}>
                    <Text style={s.nutrVal}>{val}</Text>
                    <Text style={s.nutrLbl}>{lbl}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      <View style={s.pdFooter}>
        <TouchableOpacity 
          style={[s.greenBtn, inCart && { backgroundColor: C.greenDark }]}
          onPress={() => setInCart(!inCart)}
        >
          <Text style={s.greenBtnText}>{inCart ? `In Cart (${qty})` : 'Add To Basket'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}