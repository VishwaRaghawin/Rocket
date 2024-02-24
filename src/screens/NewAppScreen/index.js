import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome6,AntDesign,FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 


const NewAppScreen = () => {
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
    <Text style={styles.headerText}> New In-App Live System</Text>
  </View>
</View>
      <ScrollView
  contentContainerStyle={styles.scrollViewContainer}
  showsVerticalScrollIndicator={false}
>
      <Text style ={{marginRight: 265,marginTop: 30,fontWeight:'bold',fontSize:21}}>First Sesions</Text>
       <Text style ={{marginRight: 230,fontSize:15,color:'grey',marginTop:5}}>New In-App Live System</Text> 
        
        
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
        
        <Text style={{color:'grey',textAlign:'left',marginTop:10,fontSize:15}}>Online Course Creation can be simple once you have mastered the art of Speaking in front of camera.A brief overview of what you'll learn in this course. </Text>
     
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight:'bold',
    marginTop:22,
  marginRight:115
  },
  back: {
    marginLeft:20,
     padding: 12,
     borderRadius: 10,
     color: 'black',
     width:'10%',
     marginTop:22
    
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

export default NewAppScreen;
