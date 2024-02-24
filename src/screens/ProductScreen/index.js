

import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image,TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = () => {
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
    <Text style={styles.headerText}> Become a Product Manager</Text>
  </View>
</View>
      <ScrollView
  contentContainerStyle={styles.scrollViewContainer}
  showsVerticalScrollIndicator={false}
>
      <Text style ={{marginRight: 260,marginTop: 30,fontWeight:'bold',fontSize:18}}>Course Overview</Text>
       <Text style ={{marginRight: 220,fontSize:14,color:'grey',marginTop:2}}>Become a Product Manager</Text> 
        
        
       <Image
          source={{ uri: 'https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuYWdlcnxlbnwwfHwwfHx8MA%3D%3D' }} // Replace with your image URI
          style={{ width: 400, height: 250, marginTop: 20, marginBottom: 20,borderRadius:30 }}
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
        
        <Text style={{color:'grey',textAlign:'left',marginTop:10,fontSize:12.5}}>A Home to test yourself on your grasp of CSS and reassure yourself that you've got this! Please send your homework as soon as possible  test yourself on your grasp of CSS and reassure yourself. </Text>
     
        <Text style={{color:'black',textAlign:'left',marginTop:50,fontSize:16}}>I have read this Lesson.</Text>
        
       

      
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

export default ProductScreen ;