


import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome,MaterialIcons,Entypo,FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const PlacementScreen = () => {
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
    <Text style={styles.headerText}>Quiz Information</Text>
  </View>
</View>
      <ScrollView
  contentContainerStyle={styles.scrollViewContainer}
  showsVerticalScrollIndicator={false}
>
      <Text style ={{marginRight: 275,marginTop: 20,fontWeight:'bold',fontSize:18}}>Placement Quiz</Text>
       <Text style ={{marginRight: 195,fontSize:13,color:'grey',marginTop:2}}>Learn and Understand Angular JS </Text> 
        
        <View style={styles.circleImage}>
          {/* Image goes here */}
          <Image
            source={{uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9SSol6E14bd6yb8BYWv4-vTr1wMR5HN7m9qC2dzBbfKOlB9MI'}}
            style={styles.image}
          />
        </View>
        
        {/* Text below image */}

        
        {/* Icon row 3 */}
        <View style={styles.iconRow}>
        <MaterialIcons name="settings" size={15} color="grey" style={{marginLeft:5,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{marginRight:25,fontWeight:'bold'}}>  100.0</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 110 }} />
          
          <MaterialIcons name="check-circle" size={15} color="grey" style={{marginRight:10,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={styles.text}>  70.0</Text>
        </View>
        
        {/* Icon row 4 */}
        <View style={styles.iconRow}>
        <Entypo name="bar-graph" size={15} color="grey" style={{marginLeft:66,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{marginRight:40,fontWeight:'bold'}}>  10</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 105 }} />
          
          <FontAwesome name="commenting" size={15} color="grey" style={{marginRight:0,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
       <Text style={{color:'black',fontWeight:'bold'}}> 5 Minutes Time</Text>
          
        </View>
  <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('site')}>
            <Text style={styles.buttonText}>Start</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:20,
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
  circleImage: {
    marginTop: 160,
    width:'100%',
    height: 200,
    borderRadius:14,
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '64%',
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
    textAlign:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 175,
  },
});

export default  PlacementScreen ;
