
import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const handleAskQuestion = () => {
  // Implement the logic for handling the "Ask a New Question" action here
  console.log('Ask a new question button pressed');
};

    

const AdvancedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Excel from Beginner to Advanced</Text>
      </View>
      <ScrollView
  contentContainerStyle={styles.scrollViewContainer}
  showsVerticalScrollIndicator={false}
>
      <Text style ={{marginRight: 224,marginTop: 30,fontWeight:'bold',fontSize:21}}>Introduction Class</Text>
       <Text style ={{marginRight: 180,fontSize:15,color:'grey',marginTop:5}}>Excel from Beginner to Advanced</Text> 
        
        
       <Image
          source={{ uri: 'https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuYWdlcnxlbnwwfHwwfHx8MA%3D%3D' }} // Replace with your image URI
          style={{ width: 400, height: 250, marginTop: 20, marginBottom: 20,borderRadius:50 }}
        />
      
        
        
        {/* Icon row 1 */}
        <View style={styles.iconRow}>
        <AntDesign name="infocirlce"size={15} color="grey" style={{marginLeft:-5 , backgroundColor: 'lightgrey',
      borderRadius: 20,
      padding: 12,}} />
          <Text style={styles.text}>  MVK</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 80 }} />
          
          <AntDesign name="pluscircle" size={15} color="grey" style={{marginLeft:5, backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12,}}/>
          <Text style={styles.text}> 15.58 MB</Text>
        </View>
        

        <View style={styles.iconRow}>
        <AntDesign name="infocirlce"size={15} color="grey" style={{marginLeft:5 , backgroundColor: 'lightgrey',
      borderRadius: 20,
      padding: 12,}} />
          <Text style={styles.text}>  29 Jun 2023</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 145 }} />
          
         
        
        </View>
        <Text style={{color:'grey',textAlign:'left',marginTop:10,fontSize:18}}>Microsoft Excel is a spreadsheet developed by Microsoftfor Windows,mac OS,Android and IOS.In this welcome video,I give you a quick overview of what the course is about.</Text>
     
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
   bottomHeader: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    marginTop:190
  },
  askButton: {
    backgroundColor: '#43D477',
    paddingHorizontal: 160,
    paddingVertical: 20,
    borderRadius:15,
   
  },
  askButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AdvancedScreen ;