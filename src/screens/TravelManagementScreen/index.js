

import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome6,AntDesign,MaterialIcons,Entypo  } from '@expo/vector-icons';


const  TravelManagementScreen  = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Course Overview</Text>
      </View>
      <ScrollView
  contentContainerStyle={styles.scrollViewContainer}
  showsVerticalScrollIndicator={false}
>
      <Text style ={{marginRight: 200,marginTop: 20,fontWeight:'bold',fontSize:18}}>Travel Management Course</Text>
      <View style={styles.starContainer}>
          {[...Array(5)].map((_, index) => (
            <FontAwesome key={index} name="star" size={14} color="gold" />
          ))}
        </View>
        
        <View style={styles.circleImage}>
          {/* Image goes here */}
          <Image
            source={require('../../../assets/image/lll.jpg')}
            style={styles.image}
          />
        </View>
        <Text style={{fontWeight:'bold',fontSize:18,marginTop:20}}>Course Overview</Text>
        {/* Text below image */}
       
        {/* Icon row 1 */}
        <View style={styles.iconRow}>

        <AntDesign name="infocirlce"size={15} color="grey" style={{marginLeft:-5 , backgroundColor: 'lightgrey',
      borderRadius: 20,
      padding: 12,}} />
          <Text style={styles.text}> 15 Dec 2023</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 80 }} />
          
          <AntDesign name="pluscircle" size={15} color="grey" style={{marginLeft:5, backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12,}}/>
          <Text style={styles.text}> 3 Hour</Text>
        </View>
        
        {/* Icon row 2 */}
        <View style={styles.iconRow}>
        <FontAwesome6 name="calendar-alt" size={15} color="grey" style={{marginLeft:10,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12,}} />
          <Text style={styles.text}> 22/06/2023</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 90 }} />
          
          <FontAwesome name="calendar-check-o" size={15} color="grey" style={{marginRight:0,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={styles.text}> LifeStyle</Text>
        </View>
        
        {/* Icon row 3 */}
        <View style={styles.iconRow}>
        <MaterialIcons name="settings" size={15} color="grey" style={{marginLeft:5,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{marginRight:25,fontWeight:'bold'}}>   2023</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 180 }} />
          
         
        </View>
        
        {/* Icon row 4 */}
      
  
        {/* Additional Icon row */}
        
        {/* Card */}
       
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.buttonText}>View Assignment</Text>
          </TouchableOpacity>
          
         
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:15
  },
  scrollViewContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  circleImage: {
    marginTop: 30,
    width:'85%',
    height: 180,
    borderRadius:14,
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:20
  },
  card: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width:200,
    height:70,
    marginRight:180  },
    cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight:220,
    elevation: 3,
    backgroundColor: 'white',
   
  },
  cardContent: {
    fontSize: 18,
   color:'black',
   fontWeight:'bold',
   textAlign: 'center',
   marginLeft:10,
   marginTop:-20


  },
  startButton: {
    backgroundColor: '#50c878',
    padding: 10,
    borderRadius: 16,
    width:'90%',
    marginBottom:10,
    height:50
  },
  threeDotsButton: {
    marginLeft: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 160,
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 340,
    marginTop:5

  },
  iconContainer: {
    marginTop: -70,
  },
});

export default  TravelManagementScreen ;


