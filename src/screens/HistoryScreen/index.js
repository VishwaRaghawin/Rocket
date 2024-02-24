import { useNavigation } from '@react-navigation/native'; 
import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome5  } from '@expo/vector-icons';
const  HistoryScreen = () => {
  const navigation = useNavigation();
  return (
    <>
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
    <View style={styles.leftContent}>
  <Image
    source={require('../../../assets/image/765.jpg')}
    style={styles.circleImage}
  />
  </View>
  <View style={{ flexDirection: 'column',marginLeft:70,marginTop:-50 }}>
  <Text style={{fontWeight:'bold',marginLeft:10,fontSize:15}}>Assignment Closed</Text>
  <Text style={styles.subHeaderText}>You can not send files any more</Text>
  
  </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
   alignItems:'center',
    backgroundColor: '#f0f0f0',
    padding: 25,
    marginTop:10
  },
 
  circleImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 20,
    marginTop:730
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop:5,
    marginLeft:40
  },
  subHeaderText: {
    fontSize: 12,
    color: '#666',
    marginLeft:10,
    marginTop:5
   
  },
  back: {
    marginLeft:20,
     padding: 12,
     borderRadius: 10,
     color: 'black',
     width:'10%',
     marginTop:20
    
   },
});

export default HistoryScreen;
