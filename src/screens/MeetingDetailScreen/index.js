

import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MeetingDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.back}
  >
    <FontAwesome5 name="chevron-left" size={20} color='black' />
  </TouchableOpacity>

  <View style={styles.header}>
    <Text style={styles.headerText}>Meeting Details</Text>
  </View>
</View>
      <ScrollView
  contentContainerStyle={styles.scrollViewContainer}
  showsVerticalScrollIndicator={false}
>
        {/* Your content here */}
        {/* Your circular image */}
        <View style={styles.circleImage}>
          {/* Image goes here */}
          <Image
            source={require('../../../assets/image/say.jpg')}
            style={styles.image}
          />
        </View>
        
        {/* Text below image */}
        <Text style={{fontSize:20,fontWeight:'bold'}}>Robert Ransdell</Text>
        <Text style={{color:'grey'}}>Teacher</Text>
        
        {/* Icon row 1 */}
        <View style={styles.iconRow}>
          <FontAwesome name="calendar" size={15} color="grey" style={{marginLeft:0 , backgroundColor: 'lightgrey',
      borderRadius: 20,
      padding: 12,}} />
          <Text style={styles.text}> 15 Mar 2023</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 80 }} />
          
          <FontAwesome6 name="user-clock" size={15} color="grey" style={{marginLeft:0, backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 10,}}/>
          <Text style={styles.text}> 12 Hour</Text>
        </View>
        
        {/* Icon row 2 */}
        <View style={styles.iconRow}>
          <FontAwesome6 name="user-clock" size={15} color="grey" style={{marginLeft:2,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 10,}} />
          <Text style={styles.text}> 10:30AM</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 80 }} />
          
          <FontAwesome6 name="user-clock" size={15} color="grey" style={{marginLeft:20,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 10}} />
          <Text style={styles.text}> 11:30PM</Text>
        </View>
        
        {/* Icon row 3 */}
        <View style={styles.iconRow}>
          <FontAwesome name="video-camera" size={15} color="grey" style={{marginRight:0,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{marginRight:25,fontWeight:'bold'}}>  Online</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 80 }} />
          
          <FontAwesome6 name="users" size={15} color="grey" style={{marginLeft:10,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 10}} />
          <Text style={styles.text}> Group(6)</Text>
        </View>
        
        {/* Icon row 4 */}
        <View style={styles.iconRow}>
          <FontAwesome5 name="wallet" size={15} color="grey" style={{marginRight:8,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{marginRight:40,fontWeight:'bold'}}>$750</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 80 }} />
          
          <FontAwesome name="commenting" size={15} color="grey" style={{marginRight:8,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={styles.text}>Pending</Text>
        </View>
  
        {/* Additional Icon row */}
        
        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Descrption</Text>
          <Text style={styles.cardContent}>We are the managers of a company and we want to get acquaninted with the concepts of risk in resource management.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Address</Text>
          <Text style={{fontSize: 12,
   color:'grey',
   marginTop: 5,
   marginRight:100}}>Qatar,Al Wakrah,27904 Hilpert Knoll.</Text>
        </View>

        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.threeDotsButton}>
            <FontAwesome5 name="ellipsis-h" size={20} color="lightgreen" style={{borderWidth: 1,
    borderColor: 'lightgreen',padding:12,borderRadius:14,marginTop:2}} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 20,
   
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight:118,
    marginTop:10
  },
  scrollViewContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  circleImage: {
    marginTop: 50,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: 'orange',
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    borderRadius:50,
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
  },
  card: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    height:110,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight:230
   
  },
  cardContent: {
    fontSize: 12,
   color:'grey',
   marginTop: 5,
   marginRight:25
  },
  startButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 16,
    width:'80%',
    marginBottom:10,
    height:55,
    marginLeft:10,marginTop:8
  },
  threeDotsButton: {
    marginLeft: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
     marginTop:12
    
   },
});

export default  MeetingDetailScreen ;
