
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome6,AntDesign } from '@expo/vector-icons';


const SpringScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>New Learning Page</Text>
      </View>
      <ScrollView
  contentContainerStyle={styles.scrollViewContainer}
  showsVerticalScrollIndicator={false}
>
      <Text style ={{marginRight: 270,marginTop: 30,fontWeight:'bold',fontSize:21}}>iSpring SCORM</Text>
       <Text style ={{marginRight: 285,fontSize:15,color:'grey',marginTop:5}}>New Learning Page</Text> 
        
        
        {/* Text below image */}
      
        
        
        {/* Icon row 1 */}
        <View style={styles.iconRow}>
        <AntDesign name="infocirlce"size={15} color="grey" style={{marginLeft:-5 , backgroundColor: 'lightgrey',
      borderRadius: 20,
      padding: 12,}} />
          <Text style={styles.text}> iSpring</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 80 }} />
          
          <AntDesign name="pluscircle" size={15} color="grey" style={{marginLeft:5, backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12,}}/>
          <Text style={styles.text}> 45.76 MB</Text>
        </View>
        
        {/* Icon row 2 */}
        <View style={styles.iconRow}>
        <FontAwesome6 name="calendar-alt" size={15} color="grey" style={{marginRight:0,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12,}} />
          <Text style={styles.text}> 01 Mar 2023</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 155 }} />
          
          
        </View>
        
       
        {/* Additional Icon row */}
        
        <Text style={{color:'grey',textAlign:'left',marginTop:10,textAlign:'center',fontSize:12}}>A Home to test yourself on your grasp of CSS and reassure yourself that you've got this! Please send your homework as soon as possible  test yourself on your grasp of CSS and reassure yourself. </Text>
     
        <Text style={{color:'black',textAlign:'left',marginTop:50,fontSize:18}}>I have read this Lesson.</Text>
        
       

       
        <View style={styles.buttonContainer}>
        
        
        <View style={styles.buttonContainer}>
         
          <TouchableOpacity style={styles.threeDotsButton}>
          <Text style={{
    backgroundColor: '#50c878',padding:12,borderRadius:14,marginTop:-10,textAlign:"center",
    height:50, fontSize: 18,
   color:'white',  marginRight:25}}>Download</Text>
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
    marginTop:20
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
    marginTop:300,
    width:'100%',
  
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

export default SpringScreen ;