
import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const BeginnerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Web Design for Beginners</Text>
      </View>
      <ScrollView
  contentContainerStyle={styles.scrollViewContainer}
  showsVerticalScrollIndicator={false}
>
      <Text style ={{marginRight: 285,marginTop: 30,fontWeight:'bold',fontSize:21}}>Welcome !!</Text>
       <Text style ={{marginRight: 225,fontSize:15,color:'grey',marginTop:5}}>Web Design for Beginners</Text> 
        
        
       <Image
          source={{ uri: 'https://images.unsplash.com/photo-1707653057281-63c23bd267a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8' }} // Replace with your image URI
          style={{ width: 400, height: 200, marginTop: 20, marginBottom: 20,borderRadius:50 }}
        />
      
        
        
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
          <Text style={styles.text}> 29 Jun 2023</Text>
        </View>
        
        <Text style={{color:'grey',textAlign:'left',marginTop:10,fontSize:18}}>A Home to test yourself on your grasp of CSS and reassure yourself that you've got this! Please send your homework as soon as possible  test yourself on your grasp of CSS and reassure yourself. </Text>
     
        <Text style={{color:'black',textAlign:'left',marginTop:50,fontSize:18}}>I have read this Lesson.</Text>
        
       

      
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
    marginTop:20
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

export default BeginnerScreen ;
