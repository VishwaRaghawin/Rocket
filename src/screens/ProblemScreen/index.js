
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const  ProblemScreen = () => {
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
    <Text style={styles.headerText}>Problem with quiz</Text>
  </View>
</View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.text}>Hello.</Text>
          <Text style={styles.text}>In thequiz of course that iI bought was the wrong question.</Text>
          <Text style={styles.text}>Course Name : Photoshop course from beginner to advanced</Text>
          <Text style={styles.text}>Question Number : 3 Please check it.thank you</Text>
        </View>
        <Text style={{color:'grey',marginLeft:270,fontSize:13,marginTop: 5,}}>15 Jul 2023 | 15:35</Text>
        <View style={styles.bottomContainer}>
         
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={{width:'80%',backgroundColor: '#50c878',
    padding: 18,
    borderRadius: 15,
    marginLeft: 5,
    marginTop:600,fontWeight:'500'}}>
              <Text style={{textAlign:'center',color:'white'}}>Reply</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>X</Text>
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
  back: {
    marginLeft:20,
     padding: 12,
     borderRadius: 10,
     color: 'black',
     width:'10%',
     marginTop:22
    
   },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:20,
    marginLeft:53
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
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
    marginTop:-80
  },
  button: {
    backgroundColor: 'red',
    padding: 17,
    borderRadius: 15,
    marginLeft: 10,
    marginTop:600,
    width:'15%'
  },
  buttonText: {
    color: 'white',
    textAlign:'center',
    fontWeight:'500'
  },
});

export default ProblemScreen ;
