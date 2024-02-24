import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import {FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
const PurchaseScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.back}
  >
    <FontAwesome5 name="chevron-left" size={20} color='black' />
  </TouchableOpacity>

  <View style={styles.header}>
    <Text style={styles.headerText}>Pre-Purchase Question</Text>
  </View>
</View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.text}>Hello </Text>
          <Text style={styles.text}>Please follow my request.Is it posible to refund it after the purchase if you are dissatisfied with the course?</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.circleContainer}>
            <Image source={{ uri: 'https://s3.envato.com/files/348298745/profile.jpg' }} style={styles.circleImage} />
            <View style={styles.thanksCard}>
              <Text style={styles.thanksText}>Hello Cameron.</Text>
              <Text style={styles.thanksText}>Yes it possible.</Text>
            </View>
          </View>
         
        </View>
        <TouchableOpacity style={styles.replyButton}>
            <Text style={styles.replyButtonText}>Reply</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
   
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:20,
    marginLeft:35
  },
  back: {
    marginLeft:20,
     padding: 12,
     borderRadius: 10,
     color: 'black',
     width:'10%',
     marginTop:22
    
   },
  card: {
    backgroundColor: '#50c878',
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 5,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  thanksCard: {
    backgroundColor: 'grey',
    padding: 14,
    borderRadius: 15,
    marginLeft: 10,
  },
  thanksText: {
    color: 'white',
    textAlign: 'center',
  },
  replyButton: {
    backgroundColor: '#50c878',
    padding: 18,
    borderRadius: 15,
    marginLeft: 10,
    marginTop:545,
    width:'90%',
    marginLeft:21
    },
  replyButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
});

export default PurchaseScreen;

