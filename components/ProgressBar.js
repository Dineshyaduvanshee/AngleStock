// components/ProgressBar.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBar = ({ progress, label }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.progressBarContainer}>
      <Text style={styles.progressLabel}>{label}</Text>
      <Progress.Bar progress={progress} width={screenWidth - 40} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  progressLabel: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProgressBar;
