
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const Header = () => {
  const navigation = useNavigation();
  return (
   <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.back}
    >
      <FontAwesome5 name="chevron-left" size={20} color='black' />
    </TouchableOpacity>
  
    <View style={styles.header}>
      <Text style={styles.headerText}>Comment Details</Text>
    </View>
  </View>
  );
};
const Card = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('course')}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtVZLTXM9KJ63QFPFkpRhthntU2Lrk2WhBLVkF7qhuMXSAusMN' }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.rightText}>This command is for</Text>
       
      </View>
      <Text style={{marginLeft:70,fontWeight:'bold',fontSize:13,marginTop:-20}}>The Future of Energy</Text>
    </TouchableOpacity>
  );
};

const BottomButtons = () => {
  return (
    <View style={styles.bottomButtonsContainer}>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'red',height: 55, }]}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#50c878' }]}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const CommentDetailScreen = () => {
  return (
    <View style={styles.container}>
       <Header />
      <Card />
      <BottomButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    paddingVertical: 30,
    alignItems: 'center',
  },
  back: {
    marginLeft:20,
     padding: 12,
     borderRadius: 10,
     color: 'black',
     width:'10%',
     marginTop:22
    
   },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop:20,
    marginLeft:80
  },
  card: {
    height: 80,
    marginTop: -650,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.25, // For iOS shadow
    shadowRadius: 3.84, // For iOS shadow
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 60,
    height: 70,
    borderRadius: 10,
    marginTop:0
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rightText: {
    fontSize: 13,
    marginLeft: 70,
    marginTop: -60, // Adjust the spacing between the image and text
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  button: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:5
  },
});

export default CommentDetailScreen;
