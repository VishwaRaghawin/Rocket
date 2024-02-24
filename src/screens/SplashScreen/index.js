
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
const SplashScreen = ({ navigation }) => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      navigation.replace('sin');
    }
  }, [authLoaded, navigation]);

  return (
    <View style={styles.root}>
      {/* Your splash screen content, e.g., logo */}
      <View style={styles.circularContainer}>
        {/* Lottie animation */}
        <LottieView
          source={require('../../../assets/image/12.json')}
          autoPlay
          loop
          style={styles.lottieView}
        />
      </View>

<View style={{ marginTop: 20 }}>
        <Text style={{fontSize:23,fontWeight:'bold',textAlign:'center',color:'white'}}>Rocket LMS</Text>
        <Text style={{fontSize:16,textAlign:'center',color:'white'}}>    The easiest way for learning...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#43D477',
  },
  circularContainer: {
    width: 350,
    height: 350,
    borderRadius: 175, // Half of the width and height to make it circular
    overflow: 'hidden', // Clip the content to the circle
    backgroundColor: 'white', // Optional background color for the circular container
  },
  lottieView: {
    flex: 1, // Fill the circular container
  },
  
});

export default SplashScreen;
