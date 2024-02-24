


import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome6,MaterialIcons,FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const CertificateOverviewsScreen = () => {
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
      <Text style ={{marginRight: 210,marginTop: 30,fontWeight:'bold',fontSize:15}}>Travel Management Course</Text>
       <Text style ={{marginRight: 275,fontSize:11.5,color:'grey',marginTop:2}}>COURSE DESCRIPTION</Text> 
       <Text style ={{marginRight: 0,fontSize:10,color:'grey',marginTop:10}}>Travel management courses typically cover a range of topics related to the travel industry, including tourism, hospitality, transportation, and business management. The specifics of a course can vary depending on the institution offering it and its focus, but here are some common details you might find in a travel management course</Text> 
        <View style={styles.circleImage}>
          {/* Image goes here */}
          <Image
            source={require('../../../assets/image/6543.jpg')}
            style={styles.image}
          />
        </View>
        
        {/* Text below image */}
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>Share Certificate</Text>
        <Text style={{color:'grey',textAlign:'center',marginTop:5,fontSize:13}}>You can share this certificate using social networks and encourage others to learn </Text>

 <View style={styles.iconRow}>
 <FontAwesome6 name="calendar-alt" size={16} color="grey" style={{marginLeft:45,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{marginRight:25,fontWeight:'bold'}}>  04 Jun 2023</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 50 }} />
          
          <MaterialIcons name="check-circle" size={16} color="grey" style={{marginRight:5,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={styles.text}> 6 Certificates</Text>
        </View>
      
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.buttonText}>Download</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.threeDotsButton}>
          <Text style={{
    backgroundColor: '#50c878',padding:12,borderRadius:14,marginTop:-10,textAlign:"center",
    height:50, fontSize: 18,
   color:'white'}}>Share</Text>
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
  scrollViewContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  circleImage: {
    marginTop: 30,
    width:'85%',
    height: 205,
    borderRadius:14,
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '125%',
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
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 16,
    width:'50%',
    marginBottom:10,
    height:50,
    marginTop:215,
    borderWidth: 1,
    borderColor: '#50c878'
    
  },
  threeDotsButton: {
    marginLeft: 10,
    padding: 10,
    marginTop:215,
    width:'50%'
  },
  buttonText: {
    color: '#50c878',
    fontSize: 18,
    textAlign:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft:10
  },
  back: {
    marginLeft:20,
     padding: 12,
     borderRadius: 10,
     color: 'black',
     width:'10%',
     marginTop:22
    
   },
});

export default CertificateOverviewsScreen;
