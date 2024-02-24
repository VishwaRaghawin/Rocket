import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5,MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
const QuizWaitingScreen = () => {
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
    <Text style={styles.headerText}>Quiz Result</Text>
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
          {/* <Image
            source={require('../../../assets/image/kl.jpg')}
            style={styles.image}
          /> */}<Text style={{fontWeight:'bold',fontSize:13}}>Wait for Final Result</Text>
        </View>
        
        {/* Text below image */}
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:30}}>Wait for Final Result</Text>
        <Text style={{color:'grey',marginTop:1,fontSize:13,textAlign:"center"}}>Your Quiz Include descriptive questions.Please wait for instructor review.</Text>
        
        {/* Icon row 1 */}

        {/* Icon row 3 */}
        <View style={styles.iconRow}>
        <MaterialIcons name="settings" size={20} color="grey" style={{marginLeft:5,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{marginRight:25,fontWeight:'bold'}}>  100.0</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 80 }} />
          
          <MaterialIcons name="check-circle" size={20} color="grey" style={{marginRight:10,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={styles.text}> 60.0</Text>
        </View>
        
        {/* Icon row 4 */}
        <View style={styles.iconRow}>
        <FontAwesome5 name="user-alt" size={20} color="grey" style={{marginLeft:15,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{marginRight:40,fontWeight:'bold'}}> 40.0</Text>
          
          {/* Add a little space between the icons */}
          <View style={{ width: 60 }} />
          
          <FontAwesome name="commenting" size={20} color="grey" style={{marginLeft:20,backgroundColor: 'lightgrey',
      borderRadius: 36,
      padding: 12}} />
          <Text style={{color:'orange',fontWeight:'bold'}}> Waiting</Text>
        </View>
        
        <View style={styles.buttonContainer}>
         
          <TouchableOpacity style={styles.threeDotsButton}>
          <Text style={{
    backgroundColor: '#50c878',padding:15,borderRadius:14,marginTop:-30,textAlign:"center",
    height:55, fontSize: 15,
   color:'white'}}>Back to Quizzes</Text>
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
    padding: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:20,
    marginRight:120
  },
  scrollViewContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  circleImage: {
    marginTop: 100,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 12,
    borderColor: 'orange',
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius:48,
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
    marginTop:30
    
  },
  startButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 16,
    width:'50%',
    marginBottom:10,
    height:50,
    marginTop:170,
    borderWidth: 1,
    borderColor: '#50c878'
    
  },
  threeDotsButton: {
    padding: 10,
    marginTop:160,
    width:'95%',marginRight:10,
  },
  buttonText: {
    color: '#50c878',
    fontSize: 18,
    textAlign:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 80,
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

export default  QuizWaitingScreen;
