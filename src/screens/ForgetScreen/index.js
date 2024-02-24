import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const CustomTextInput = ({ placeholder, icon, ...rest }) => {
  return (
    <View style={[styles.inputContainer, rest.email ? styles.emailInputContainer : null]}>
      <MaterialIcons name={icon} size={24} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

const ForgetScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
        {/* First text with emoji */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: -60 }}>Forget Password!</Text>
          <Text style={{ fontSize: 25, marginTop: -60,marginRight: 90, }}>✌️</Text>
        </View>

        <Text style={{ fontSize: 14, marginRight: 90, marginTop: -30, marginLeft: 24 }}> Don't be worried, your password will reset.</Text>

        {/* Email input */}
        <CustomTextInput placeholder="Email" icon="mark-email-unread" email />

        {/* Reset password button */}
        <TouchableOpacity style={{ marginTop: 20, width: '90%', height: 60, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 18, marginBottom: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Reset Password</Text>
        </TouchableOpacity>

        {/* Have an account */}
        <View style={{ flexDirection: 'row', marginTop: 270 }}>
          <Text style={{ fontSize: 16 }}>Have an account? </Text>
          <TouchableOpacity  onPress={() => navigation.navigate('login')}>
            <Text style={{ color: 'grey', fontSize: 16 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
    marginTop: 190,
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 15,
   
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
    color:'grey'
  },
  emailInputContainer: {
    backgroundColor: 'white',
  },
});

export default ForgetScreen;
