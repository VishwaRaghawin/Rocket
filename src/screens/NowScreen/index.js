
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import LottieView from 'lottie-react-native';

const NowScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      {/* Two Text Contents */}
     
      <LottieView
        source={require('../../../assets/image/777.json')}
        autoPlay
        loop
        style={{ width: 430, height: 350 }}
      />
     
     
     
     
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Start Learning Now</Text>
        <Text style={{ fontSize: 14, textAlign: 'center' }}>Start learning from the best </Text>
      </View>

      {/* Two TouchableOpacity Buttons */}
      <View style={{ flexDirection: 'row', marginTop:100 }}>
  <TouchableOpacity onPress={() => navigation.navigate('login')} style={{ backgroundColor: '#50c878', padding: 22, borderRadius: 18, width: '45%', marginRight: 10 }}>
    <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }}>Login</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() =>  navigation.navigate('sign')} style={{  padding: 22, borderRadius: 18, width: '45%', backgroundColor: 'white',

    borderWidth: 1.2,
    borderColor: 'lightgreen',
   
    paddingHorizontal: 30,}}>
    <Text style={{ fontSize: 15, color: '#50c878', textAlign: 'center',justifyContent:'center',alignItems:'center' }}>Sign Up</Text>
  </TouchableOpacity>
</View>


      {/* TouchableOpacity Text */}
      <TouchableOpacity onPress={() => navigation.navigate('index') } style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 15, color: 'black',marginTop:50 }}>Skip Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NowScreen;

