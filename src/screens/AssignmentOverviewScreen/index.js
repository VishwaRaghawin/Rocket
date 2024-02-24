import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome6,AntDesign,MaterialIcons,Entypo,FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 


const AssignmentOverviewScreen = () => {
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

      <ScrollView
  contentContainerStyle={styles.scrollViewContainer}
  showsVerticalScrollIndicator={false}
>
      <Text style ={{marginRight: 220,marginTop: 20,fontWeight:'bold',fontSize:15}}>Meeting-term Home Work</Text>
       <Text style ={{marginRight: 285,fontSize:12.5,color:'grey'}}>New Learning Page</Text> 
        
        <View style={styles.circleImage}>
          {/* Image goes here */}
          <Image
            source={require('../../../assets/image/h.jpg')}
            style={styles.image}
          />
        </View>
        
        {/* Text below image */}
        <Text style={{fontSize:20,fontWeight:'bold'}}>Assignment Details</Text>
        <Text style={{color:'grey',textAlign:'left',marginTop:10,fontSize:12}}>A Home to test yourself on your grasp of CSS and reassure yourself that you've got this!.Please send your homework as soon as possible. </Text>
        <Text style={{color:'grey',textAlign:'left',fontSize:12}}>Regards.</Text>
        
        {/* Icon row 1 */}
        <View style={styles.iconRow}>
        <AntDesign name="infocirlce"size={15} color="grey" style={{marginLeft:-5 , backgroundColor: 'lightgrey',
      borderRadius: 20,
      padding: 12,}} />
          <Text style={styles.text}> 05 Nov 2023</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 80 }} />
          
          <AntDesign name="pluscircle" size={15} color="grey" style={{marginLeft:5, backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12,}}/>
          <Text style={styles.text}> 0/1</Text>
        </View>
        
        {/* Icon row 2 */}
        <View style={styles.iconRow}>
        <FontAwesome6 name="calendar-alt" size={15} color="grey" style={{marginLeft:10,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12,}} />
          <Text style={styles.text}> 30/01/2023</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 95 }} />
          
          <FontAwesome name="calendar-check-o" size={15} color="grey" style={{marginRight:30,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={styles.text}>-</Text>
        </View>
        
        {/* Icon row 3 */}
        <View style={styles.iconRow}>
        <MaterialIcons name="settings" size={15} color="grey" style={{marginLeft:5,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{marginRight:25,fontWeight:'bold'}}>  100</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 115 }} />
          
          <MaterialIcons name="check-circle" size={15} color="grey" style={{marginRight:10,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={styles.text}> 75</Text>
        </View>
        
        {/* Icon row 4 */}
        <View style={styles.iconRow}>
        <Entypo name="bar-graph" size={15} color="grey" style={{marginLeft:68,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{marginRight:40,fontWeight:'bold'}}> -</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 120}} />
          
          <FontAwesome name="commenting" size={15} color="grey" style={{marginRight:0,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{color:'red',fontWeight:'bold',fontSize:12}}>    Not Submitted</Text>
        </View>
  
        {/* Additional Icon row */}
        
        {/* Card */}
        <Text style={{marginRight: 285,fontWeight:'bold',fontSize:15}}>Attachments</Text>
        
        <TouchableOpacity onPress={() => console.log('Touchable pressed')}>
        <View style={styles.card}>
        <FontAwesome5 name="file-download" size={18} color="grey" />
        <Text style={styles.cardContent}>Home File</Text>
        </View>
        </TouchableOpacity>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('his')}>
            <Text style={styles.buttonText}>View Assignment</Text>
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
   marginRight:125
  },
  scrollViewContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  circleImage: {
    marginTop: 30,
    width:'90%',
    height: 220,
    borderRadius:14,
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
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
    marginTop:10
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    borderRadius: 10,
    marginTop: 20,
    width:200,
    height:60,
    marginRight:180 
   },
    cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight:220,
    elevation: 3,
    backgroundColor: 'white',
   
  },
  cardContent: {
    fontSize: 15,
   color:'black',
   fontWeight:'bold',
   textAlign: 'center',
   marginLeft:10,
   marginTop:-20


  },
  startButton: {
    backgroundColor: '#50c878',
    padding: 15,
    borderRadius: 16,
    width:'90%',
    marginBottom:10,
    height:60
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
    marginTop: 20,
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

export default AssignmentOverviewScreen ;






























        






