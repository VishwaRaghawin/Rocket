import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native'; 
const SkillScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      {/* Centered Lottie Animation */}
      <LottieView
        source={require('../../../assets/image/09.json')}
        autoPlay
        loop
        style={{ width: 450, height: 350 }}
      />

      {/* Two Text Contents */}
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Teach your Skills!</Text>
        <Text style={{ fontSize: 14, textAlign: 'center' }}>Start teaching right now and share your valuable Knowledge.</Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
         onPress={() => navigation.navigate('now') }
        style={{ marginTop: 160, backgroundColor: '#50c878', padding: 20, borderRadius: 22,width:'50%' }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold',textAlign:'center' }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SkillScreen;
