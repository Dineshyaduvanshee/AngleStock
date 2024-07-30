import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';

import { Header } from 'react-native/Libraries/NewAppScreen';
import ProgressBar from './components/ProgressBar';


const StockMarketUI = () => {
  const screenWidth = Dimensions.get('window').width;
  
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [50, 80, 40, 95, 70, 85],
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Stock Market</Text>
      <LineChart
        data={data}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressLabel}>Stock Growth</Text>
        <Progress.Bar progress={0.7} width={screenWidth - 40} />
      </View>

      <ScrollView>
        <View style={styles.progressBarContainer}>
        {/* <StockMarketScreen/> */}
        <Header/>
        </View>
        <View>
          <ProgressBar progress={undefined} label={undefined}></ProgressBar>
        </View>
        
      </ScrollView>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  chart: {
    marginVertical: 20,
    borderRadius: 16,
  },
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

export default StockMarketUI;
