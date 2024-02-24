
import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image,TouchableOpacity} from 'react-native';
import { FontAwesome5,AntDesign  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const handleAskQuestion = () => {
  // Implement the logic for handling the "Ask a New Question" action here
  console.log('Ask a new question button pressed');
};

    

const TeamScreen = () => {
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
    <Text style={styles.headerText}> How to Manage Your Virtual Team</Text>
  </View>
</View>
      <ScrollView
  contentContainerStyle={styles.scrollViewContainer}
  showsVerticalScrollIndicator={false}
>
      <Text style ={{marginRight: 290,marginTop: 30,fontWeight:'bold',fontSize:18}}>Introduction</Text>
       <Text style ={{marginRight: 180,fontSize:13,color:'grey'}}>How to Manage your Virtual Team</Text> 
        
        
       <Image
          source={{ uri: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D' }} // Replace with your image URI
          style={{ width: 400, height: 250, marginTop: 20, marginBottom: 20,borderRadius:30 }}
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
          <Text style={styles.text}> 10.58 MB</Text>
        </View>
        
        <Text style={{color:'grey',textAlign:'center',marginTop:10,fontSize:15}}>In this welcome video,I give you a quick overview of what the course is about.</Text>
     
        <Text style={{color:'black',textAlign:'left',marginTop:50,fontSize:15}}>I have read this Lesson.</Text>
        
        <View style={styles.bottomHeader}>
     <TouchableOpacity style={styles.askButton} onPress={handleAskQuestion}>
       <Text style={styles.askButtonText}>Download</Text>
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    color: 'black', 
    marginTop:19,
    marginRight:100
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
    marginTop: -60,
  },
  askButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TeamScreen ;