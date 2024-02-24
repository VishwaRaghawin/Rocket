import React from 'react';
import { View, Image, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: 1, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Certificate', text2: '01 Jul 2023 | 15:20' },
  { id: 2, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'New Financial Document', text2: '28 Jun 2023 | 1:50' },
  { id: 3, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'New Badge', text2: '12 Apr 2023 | 12:00' },
  { id: 4, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Certificate', text2: '01 Jul 2023 | 15:20' },
  { id: 5, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'New Financial Document', text2: '28 Jun 2023 | 1:50' },
  { id: 6, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'New Badge', text2: '12 Apr 2023 | 12:00' },
  { id: 7, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Offline Payment Submitted', text2: '28 Jun 2023 | 1:50' },
  { id: 8, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Certificate', text2: '01 Jul 2023 | 15:20' },
  { id: 9, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'New Badge', text2: '12 Apr 2023 | 12:00' },
  { id: 10, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Offline Payment Submitted', text2: '28 Jun 2023 | 1:50' },
  { id: 11, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'New Badge', text2: '01 Jul 2023 | 15:20' },
  { id: 12, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'New Badge', text2: '01 Jul 2023 | 15:20' },
  { id: 13, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'New Badge', text2: '01 Jul 2023 | 15:20' },
  { id: 14, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'New Badge', text2: '01 Jul 2023 | 15:20' },
  { id: 15, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'New Badge', text2: '01 Jul 2023 | 15:20' },
  { id: 16, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Certificate ', text2: '28 Jun 2023 | 1:50' },
  { id: 17, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Certificate ', text2: '28 Jun 2023 | 1:50' },
  { id: 18, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Certificate ', text2: '28 Jun 2023 | 1:50' },
  { id: 19, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Certificate ', text2: '28 Jun 2023 | 1:50' },
  { id: 20, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Certificate ', text2: '28 Jun 2023 | 1:50' },
  { id: 21, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Offline Payment Submitted ', text2: '01 Jul 2023 | 15:20' },
  { id: 22, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Offline Payment Submitted 1A', text2: '12 Apr 2023 | 12:00' },
  { id: 23, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Offline Payment Submitted 1A', text2: '12 Apr 2023 | 12:00' },
  { id: 24, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Offline Payment Submitted 1A', text2: '12 Apr 2023 | 12:00' },
  { id: 25, imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocvUS23RSyXKOFqxNAIrvL0lCQ-6w3tRTPvsTSgqC7TFqJyZt', text1: 'Offline Payment Submitted 1A', text2: '12 Apr 2023 | 12:00' },
  // ... add data for 19 more cards
];

const Card = ({ imageUrl, text1, text2 }) => (
  <TouchableOpacity onPress={() => console.log('Card Pressed')}>
  <View style={styles.cardContainer}>
    <Image source={{ uri: imageUrl }} style={styles.circleImage} />
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text1}</Text>
      <Text style={styles.text}>{text2}</Text>
    </View>
  </View>
  </TouchableOpacity>
);

const  NotificationScreen = () => {
  const navigation = useNavigation(); 
  return (<>
   
    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.back}
    >
      <FontAwesome5 name="chevron-left" size={20} color='black' />
    </TouchableOpacity>
    
    <Text style={styles.header}>Notifications</Text>
    
  </View>
  
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    {data.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </ScrollView>
  </>
 
  );
};

const styles = StyleSheet.create({
 
  header: {
    fontSize: 21,
    marginBottom: 10,
    textAlign: 'center',
    marginLeft:95,
    marginTop:10
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width:'95%',
    margin:10
  },
  circleImage: {
    width: 70,
    height: 70,
    borderRadius: 10, // To make it a circle
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 14.5,
    marginBottom: 5,
    marginTop:10
  },
  back: {
   marginLeft:15,
    padding: 12,
    borderRadius: 10,
    color: 'black',
    marginTop:5,
    width:'10%',
   
  },
});

export default NotificationScreen;