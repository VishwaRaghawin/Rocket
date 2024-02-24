

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView ,Image } from 'react-native';
import {FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const  RefundScreen = () => {
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
    <Text style={styles.headerText}>Refund Request</Text>
  </View>
</View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.text}>Hello.I was supposed to get this refund via email. </Text>
          <Text style={styles.text}>Please follow my request.</Text>
          
        </View>
        <Text style={{color:'grey',marginLeft:270,fontSize:13,marginTop: 5,}}>15 Jul 2023 | 15:35</Text>
        <View style={styles.circleCard}>
        <Image  source={{
                uri: 'https://s3.envato.com/files/348298745/profile.jpg', // Replace with the URL of your circular image
              }} style={styles.circleImage} />
      </View>

      <View style={{ backgroundColor: '#50c878',
    padding: 14,
    marginLeft:160,
    borderRadius: 15,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',}}>
          <Text style={{ color: 'white',
    marginBottom: 5,textAlign:"center"}}>Thanks.</Text>
         
         
        </View>
        <Text style={{color:'grey',marginLeft:270,fontSize:13,marginTop: 5,}}>15 Jul 2023 | 15:35</Text>
        <View style={styles.bottomContainer}>
         
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={{width:'80%',backgroundColor: '#50c878',
    padding: 18,
    borderRadius: 15,
  
    marginTop:490,fontWeight:'500',width:"100%"}}>
              <Text style={{textAlign:'center',color:'white'}}>Reply</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // Adjust this value according to your design
  },
  header: {
    
    paddingVertical: 20,
    paddingHorizontal: 20,
   
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:20,
    marginLeft:65
  },
  circleCard: {
    width: 50,
    height: 50,
    borderRadius: 75,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginLeft:20
  },
  circleImage: {
    width: 50,
    height: 50,
    borderRadius: 60,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
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
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  bottomText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:-30
  },
  button: {
    backgroundColor: 'red',
    padding: 17,
    borderRadius: 15,
    marginLeft: 10,
    marginTop:530,
    width:'15%'
  },
  buttonText: {
    color: 'white',
    textAlign:'center',
    fontWeight:'500'
  },
});

export default RefundScreen ;
