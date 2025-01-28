import React, { useState } from 'react';
import { StatusBar, SectionList, StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

const secciones = [
  {
    title: 'Mexicana',
    data: ['Tacos', 'Tortas', 'Antojitos Mexicanos'],
  },
  {
    title: 'Italiana',
    data: ['Pasta', 'Pizza', 'Calzone', 'Ravioli'],
  },
  {
    title: 'Cocina de Mar',
    data: ['Pescado', 'Pulpo', 'Camarón'],
  },
  {
    title: 'Oriental',
    data: ['Sushi', 'Yakimeshi'],
  },
];

export default function TabThreeScreen() {
  const [inputValue, setInputValue] = useState('');

  const handlePress = () => {
    if (inputValue.trim() === '') {
      Alert.alert('Error', 'Por favor ingresa un valor en el campo.');
    } else {
      Alert.alert('Valor enviado', `Tú ingresaste: ${inputValue}`);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
  };


  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    headerImage={
      <IconSymbol
      size={310}
      color="#D83805"
      name="fish"
      style={styles.headerImage}
      />
    }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">¿Qué se te antoja hoy?</ThemedText>
      </ThemedView>

      <View style={styles.container2}>
        <Text style={styles.title}>Encuentra tu categoría favorita</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe algo aquí..."
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button title="Enviar" onPress={handlePress} />
      </View>
      
      <View style={styles.container3}>
        <Text style={styles.title2}>Indicador de Proceso</Text>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#6200ee" />
          <Text style={styles.loadingText}>Cargando, por favor espera...</Text>
        </View>
      ) : (
        <Button title="Iniciar Proceso" onPress={simulateLoading} />
      )}
      </View>

      <SafeAreaProvider>
        <SafeAreaView style={styles.container4} edges={['top']}>
          <SectionList
            sections={secciones}
            keyExtractor={(item2, index) => item2 + index}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.title3}>{item}</Text>
              </View>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header2}>{title}</Text>
            )}
            scrollEnabled={false}
          />
        </SafeAreaView>
      </SafeAreaProvider>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
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
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: '#e0e0e0',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  listFooter: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb8409',
  },
  title2: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#6200ee',
  },
  container4: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item2: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header2: {
    fontSize: 32,
    backgroundColor: '#47a009',
  },
  title3: {
    fontSize: 24,
  },
});
