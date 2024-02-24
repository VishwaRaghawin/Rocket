
import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign,MaterialIcons,FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const CertificateOverviewScreen = () => {
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
      <Text style ={{marginRight: 270,marginTop: 20,fontWeight:'bold',fontSize:16}}>Elementary Quiz</Text>
       <Text style ={{marginRight: 220,fontSize:13,color:'grey'}}>Become a Product Manager</Text> 
        
        <View style={styles.circleImage}>
          {/* Image goes here */}
          <Image
            source={require('../../../assets/image/ty.jpg')}
            style={styles.image}
          />
        </View>
        
        {/* Text below image */}
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>Share Certificate</Text>
        <Text style={{color:'grey',textAlign:'center',marginTop:5,fontSize:13}}>You can share this certificate using social networks and encourage others to learn </Text>

        
        
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
          <Text style={styles.text}> 70.0</Text>
        </View>
        
        {/* Icon row 2 */}
        
        
        {/* Icon row 3 */}
        <View style={styles.iconRow}>
        <MaterialIcons name="settings" size={15} color="grey" style={{marginLeft:45,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{marginRight:25,fontWeight:'bold'}}>  80.0</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 110 }} />
          
          <MaterialIcons name="check-circle" size={15} color="grey" style={{marginRight:5,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={styles.text}> Certificates</Text>
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
    marginTop: 60,
    width:'85%',
    height: 205,
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
    marginTop:40
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
    marginTop:165,
    borderWidth: 1,
    borderColor: '#50c878'
    
  },
  threeDotsButton: {
    marginLeft: 10,
    padding: 10,
    marginTop:165,
    width:'50%'
  },
  buttonText: {
    color: '#50c878',
    fontSize: 18,
    textAlign:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:5,
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

export default CertificateOverviewScreen;