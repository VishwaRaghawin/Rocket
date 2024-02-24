

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome6,AntDesign,MaterialIcons,Entypo,FontAwesome5  } from '@expo/vector-icons';


const LearnScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Learn and Understand Angular</Text>
      </View>
      <ScrollView
  contentContainerStyle={styles.scrollViewContainer}
  showsVerticalScrollIndicator={false}
>
      <Text style ={{marginRight: 250,marginTop: 30,fontWeight:'bold',fontSize:21}}>Getting Started</Text>
       <Text style ={{marginRight: 195,fontSize:15,color:'grey',marginTop:5}}>Learn and Understand Angular</Text> 
        
        
        {/* Text below image */}
      
        
        
        {/* Icon row 1 */}
        <View style={styles.iconRow}>
        <AntDesign name="infocirlce"size={15} color="grey" style={{marginLeft:-5 , backgroundColor: 'lightgrey',
      borderRadius: 20,
      padding: 12,}} />
          <Text style={styles.text}> Webinar</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 80 }} />
          
          <AntDesign name="pluscircle" size={15} color="grey" style={{marginLeft:5, backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12,}}/>
          <Text style={styles.text}> Conducted</Text>
        </View>
        
        {/* Icon row 2 */}
        <View style={styles.iconRow}>
        <FontAwesome6 name="calendar-alt" size={15} color="grey" style={{marginLeft:10,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12,}} />
          <Text style={styles.text}>  30/01/2023</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 65, }} />
          
          <FontAwesome name="calendar-check-o" size={15} color="grey" style={{marginRight:10,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={styles.text}> 3 Duration</Text>
        </View>
        
       
        {/* Additional Icon row */}
        
        <Text style={{color:'grey',textAlign:'left',marginTop:10,fontSize:1}}>A brief overview of what you'll learn in this course. </Text>
     
        <Text style={{color:'black',textAlign:'left',marginTop:50,fontSize:18}}>I have read this Lesson.</Text>
        
       

        <Text style={{color:'grey',textAlign:'left',marginTop:370}}>This session conducted on 30 jun 2023 | 5:00 </Text>
        <View style={styles.buttonContainer}>
        
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.buttonText}>Add to Calendar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.threeDotsButton}>
          <Text style={{
    backgroundColor: '#50c878',padding:12,borderRadius:14,marginTop:-10,textAlign:"center",
    height:50, fontSize: 18,
   color:'white'}}>Join</Text>
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
  
  text: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:40
  },

  startButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 16,
    width:'45%',
    marginBottom:10,
    height:50,
    marginTop:-30,
    borderWidth: 1,
    borderColor: '#50c878'
    
  },
  threeDotsButton: {
   
    padding: 10,
    marginTop:-30,
    width:'50%'
  },
  buttonText: {
    color: '#50c878',
    fontSize: 18,
    textAlign:'center',
   
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft:15
   
   
  },
});

export default LearnScreen;


