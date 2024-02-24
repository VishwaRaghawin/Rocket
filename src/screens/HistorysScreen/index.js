


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView ,Image } from 'react-native';
import { FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
const  HistorysScreen = () => {
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
    <Text style={styles.headerText}>Assignment Details</Text>
  </View>
</View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      

      <View style={{ backgroundColor: 'lightgrey',
    padding: 15,
    marginRight:170,
    borderRadius: 18,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',}}>
          <Text style={{ color: 'grey',
    marginBottom: 5,textAlign:"center"}}>Thanks.</Text>
         
         
        </View>
        <Text style={{color:'grey',marginLeft:30,fontSize:13,marginTop: 5,}}>15 Jul 2023 | 15:35</Text>
        
         
      <View style={styles.card}>
          <Text style={styles.text}>Hello.Thank you. </Text>
          <Text style={styles.text}>I attached it again.</Text>
          <Text style={styles.text}>Please recheck it.</Text>
          <Text style={styles.text}>Regards.</Text>
          
        </View>
        <Text style={{color:'grey',marginLeft:270,fontSize:13,marginTop: 5,}}>15 Jul 2023 | 15:35</Text>
       

        <View style={{ backgroundColor: 'lightgrey',
    padding: 15,
    marginRight:170,
    borderRadius: 18,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',}}>
          <Text style={{ color: 'grey',
    marginBottom: 5,textAlign:"center"}}>Cameron Schofield.</Text>
         </View>
        <Text style={{color:'grey',marginLeft:30,fontSize:13,marginTop: 5,}}>15 Jul 2023 | 15:35</Text>

        <View style={{ backgroundColor: '#50c878',
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    marginLeft: 0,}}>
          <Text style={styles.text}>Hi, </Text>
          <Text style={styles.text}>I reviewed your answers.</Text>
          <Text style={styles.text}>Please check the attached file and solve the problems..</Text>
          <Text style={styles.text}>Regards.</Text>
        </View>
        <Text style={{color:'grey',marginLeft:270,fontSize:13,marginTop: 5,}}>15 Jul 2023 | 15:35</Text>
        

        <View style={{ backgroundColor: 'lightgrey',
    padding: 15,
    marginRight:170,
    borderRadius: 18,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',}}>
          <Text style={{ color: 'grey',
    marginBottom: 5,textAlign:"left"}}>Hi,attached my HomeWork.Please review it and inform me if it has a problem.Regards</Text>
         </View>
        <Text style={{color:'grey',marginLeft:30,fontSize:13,marginTop: 5,}}>15 Jul 2023 | 15:35</Text>

        <View >
  <Image
    source={require('../../../assets/image/jim.png')}
    style={{  width: 50,
      height: 50,
      borderRadius: 25,
      marginLeft: 20,
     marginTop:160}}
  />
  </View>
  <View style={{ flexDirection: 'column',marginLeft:70,marginTop:-50 }}>
  <Text style={{fontWeight:'bold',marginLeft:10,fontSize:18}}>Assignment Passed</Text>
  <Text style={styles.subHeaderText}>You can not send files any more</Text>
  
  </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor:'white'
   // Adjust this value according to your design
  },
  header: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
   
  },
  back: {
    marginLeft:20,
     padding: 12,
     borderRadius: 10,
     color: 'black',
     width:'10%',
     marginTop:20
    
   },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:15,
    marginLeft:45
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
    width: '50%',
    alignSelf: 'center',
    marginLeft: 160,
  },
  text: {
    color: 'white',
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 15,
    color: '#666',
    marginLeft:10,
    marginTop:5
   
  },
});

export default HistorysScreen ;