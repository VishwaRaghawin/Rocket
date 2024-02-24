import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
const StartingScreen= () => {

  const navigation = useNavigation(); 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
      {/* Centered Lottie Animation */}
      <LottieView
        source={require('../../../assets/image/50.json')}
        autoPlay
        loop
        style={{ width: 450, height: 350 }}
      />

      {/* Two Text Contents */}
      <View style={{ marginTop: 20 }}>
        <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center'}}>Start Learning Now!</Text>
        <Text style={{fontSize:13}}>Interested in to learn from the best teachers around the world</Text>
      </View>

      {/* Bottom Header */}
      <View style={{ position: 'absolute', bottom: 20, flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('index')} style={{ flex: 1 }}>
          <Text style={{ textAlign: 'left',fontSize:15 }}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('start')} style={{ flex: 1 }}>
          <Text style={{ textAlign: 'right',fontSize:15}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default StartingScreen;
