import { StyleSheet, FlatList, Text, View, StatusBar } from 'react-native';

import React from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

const data = [
  { id: 1, title: 'Tacos El Trompito' },
  { id: 2, title: 'P.F. Chang¨s' },
  { id: 3, title: 'La VacaArgentina' },
  { id: 4, title: 'La Jaiba' },
  { id: 5, title: 'El Pez Vela' },
  { id: 6, title: 'Taquería Arandas' },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    headerImage={
      <IconSymbol
      size={310}
      color="#eb8409"
      name="hand.tap"
      style={styles.headerImage}
      />
    }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">¡Encuentra tu restaurante!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => <Item title={item.title} />}
          scrollEnabled={false}
          //keyExtractor={item => item.id}
        />
      </ThemedView>
    </ParallaxScrollView>
    
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#eb8409',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#eb8409',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
