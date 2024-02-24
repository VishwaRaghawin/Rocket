import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import {FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
const SoftwareScreen = () => {
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
    <Text style={styles.headerText}>Design Software</Text>
  </View>
</View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ width:"90%",flexDirection: 'row',alignItems: 'center',backgroundColor: 'white',borderRadius: 10,padding: 10, marginBottom: 20,marginLeft: 20,shadowColor: 'black',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.2,shadowRadius: 3,elevation: 5, marginTop:20}}>
          {/* Image on the left */}
          <Image
            source={{ uri: 'https://img.freepik.com/free-vector/video-camera-illustration_1012-100.jpg?size=626&ext=jpg&uid=R123353249&semt=ais' }} // Replace with your image URL
            style={{ width: 60,height: 60,borderRadius: 50,}}
          />

          {/* Text contents on the right */}
          <View style={{ marginLeft: 10,}}>
            <Text style={{fontSize: 13,}}>This is a course support message</Text>
            <Text style={{ fontSize: 15,
    fontWeight: 'bold',
    marginTop:5}}>Web Design for Bginners</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Hello.</Text>
          <Text style={styles.text}>What Software do you recommend to start learning?</Text>
        </View>
        <Text style={{color:'grey',marginLeft:268,fontSize:13,marginTop: 5,}}>15 Jul 2023 | 15:35</Text>
        <View style={styles.bottomContainer}>
        
          
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
    marginLeft:65
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
    width: '75%',
    alignSelf: 'center',
    marginLeft:55
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardSubtitle: {
    color: 'white',
  },
  text: {
    color: 'white',
    marginBottom: 5,
    fontSize:13
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
    marginTop:20,
    marginRight:105
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
    fontSize:16
  },
  replyButton: {
    backgroundColor: '#50c878',
    padding: 18,
    borderRadius: 15,
    marginLeft: 10,
    marginTop: 470,
    width: '90%',
    alignSelf: 'center',
  },
  replyButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
 
});

export default SoftwareScreen;

