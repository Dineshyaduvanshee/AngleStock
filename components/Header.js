// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Stock Market</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#1E2923',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Header;
