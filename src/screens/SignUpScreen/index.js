
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
        {/* First text with emoji */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', marginRight: 5, marginTop: -50 }}>Create Account</Text>
          <Text style={{ fontSize: 25, marginTop: -50, marginRight: 150 }}>✌️</Text>
        </View>
        <Text style={{ fontSize: 14, marginRight:95, marginTop: -20 }}>Join us now and start learning and teaching</Text>

        {/* Two small cards */}
        <View style={{ width: '100%', alignItems: 'center', marginBottom: 10, marginTop: 80 }}>
          <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, borderRadius: 15 }}>
              <Image source={require('../../../assets/image/vis.png')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, borderRadius: 15 }}>
              <Image source={require('../../../assets/image/ioi.jpg')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Text inputs */}
        <View style={{ width: '90%', marginBottom: 10, marginTop: 50 }}>
          <TextInput placeholder="Email" style={{ padding: 15, borderRadius: 16, backgroundColor: 'white' }} />
          <TextInput placeholder="Password" secureTextEntry style={{ padding: 15, borderRadius: 16, marginTop: 10, color: 'grey', backgroundColor: 'white' }} />
          <TextInput placeholder="Retype Password" secureTextEntry style={{ padding: 15, borderRadius: 16, marginTop: 10, color: 'grey', backgroundColor: 'white' }} />
        </View>

        {/* Login button */}
        <TouchableOpacity style={{ marginTop: 20, width: '90%', height: 60, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 18, marginBottom: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Create an account</Text>
        </TouchableOpacity>

        {/* Content */}
        <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 15.5, color: 'grey' }}>By using our services, you agree to our Terms & Policies</Text>

        {/* Don't have an account? */}
        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <Text style={{ fontSize: 16 }}>Have an account? </Text>
          <TouchableOpacity  onPress={() => navigation.navigate('login')}>
            <Text style={{ color: 'grey', fontSize: 16 }}>Sign in</Text>
          </TouchableOpacity>
        </View>

        {/* Forgot password */}
      
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUpScreen ;

