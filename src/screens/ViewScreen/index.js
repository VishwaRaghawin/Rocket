import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome5,FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const CardComponent = ({ imageUrl, text1, text2, text3 }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() =>  navigation.navigate('course')}>
  <View style={styles.cardContainer}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.imageBorder}></View>
    </View>
    <View style={styles.contentContainer}>
      <View style={styles.textContainer}>
        <Text style={{fontSize:13,fontWeight:'bold'}}>{text1}</Text>
        <View style={styles.rowContainer}>
          <FontAwesome5 name="user-alt" size={12}  color='grey' style={styles.icon} />
          <Text style={styles.text}>{text2}</Text>
        </View>
        <View style={styles.rowContainer}>
          <FontAwesome name="calendar" size={12}  color='grey' style={styles.icon} />
          <Text style={styles.text}>{text3}</Text>
        </View>
      </View>
      <View style={styles.starContainer}>
        <Text>⭐️⭐️⭐️⭐️⭐️</Text>
        <Text style={{marginTop: 14,color:'#43D477',fontSize:12}}>$35 USD</Text>
      </View>
    </View>
  </View>
</TouchableOpacity>



  );
};

const ViewScreen = ({navigation}) => {
 
  const data = [
    { imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww', text1: 'New Update Features', text2: 'Kate Willams', text3: '1:30 Hours' },
    { imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww', text1: 'New In-App Live System', text2: 'Chris Gayle', text3: '2:30 Hours' },
    { imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww', text1: 'New Learning Page', text2: 'Aron Finch', text3: '3:30 Hours' },
    { imageUrl: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', text1: 'Travel Around the World', text2: 'David Warner', text3: '1:15 Hours' },
    { imageUrl: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', text1: 'Health and Fitness', text2: 'Cris Lynn', text3: '1 Hour' },
    { imageUrl: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', text1: 'Understand Angular JS', text2: 'Jake Fraser-McGurk', text3: '50 Minutes' },
    { imageUrl: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', text1: 'Effective Management', text2: 'Lance Morris', text3: '1:45 Hours' },
    { imageUrl: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', text1: 'Manage Virtual Team', text2: 'Josh Inglis', text3: '1 Hour' },
    { imageUrl: 'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', text1: 'Excel from Beginner', text2: 'Steve Smith', text3: '3:30 Hours' },
    { imageUrl: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', text1: 'Learn Python Programs', text2: 'Adam Zampa', text3: '1:15 Hours' },
    { imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', text1: 'Learn Linux in 5 Days', text2: 'Aaron Hardie', text3: '2:30 Hours' },
    { imageUrl: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D', text1: 'Product Manager', text2: 'Marnus Labuschagne', text3: '4:30 Hours' },
    // Add more data for other cards
  ];

  return (
    <View style={styles.container}>
    <View style={{ flexDirection: 'row', marginTop: 40, alignItems: 'center' }}>
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.back}
  >
    <FontAwesome5 name="chevron-left" size={20} color='black' />
  </TouchableOpacity>

  <View style={styles.header}>
    <Text style={styles.headerText}>Newest Courses</Text>
  </View>
</View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
           <TouchableOpacity key={index} onPress={() => console.log('Card pressed')}>
          <CardComponent key={index} {...item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
   marginLeft:20,
    padding: 12,
    borderRadius: 10,
    color: 'black',
    width:'10%',
    marginTop:-15
   
  },
  header: {
   
    padding: 5,
    alignItems: 'center',
    marginTop:-18
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:80,
   
  },
  cardContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
  imageBorder: {
    position: 'absolute',
    left: 10,
    right: 0,
    bottom: 18, // Adjust this value to move the border up or down
    height: 1,
    width: 110,
    height: 3,
    backgroundColor: "lightgreen", // Set the background color as per your design
    borderRadius: 14,
   
  },
  image: {
    width: 130,
    height: 90,
    marginRight: 10,
    borderRadius: 24,
  },
  icon: {
    marginRight: 5,
    marginTop:16
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  starContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 27, // Align stars with the top of the text
  },
  text: {
    fontSize: 12,
    color:'grey', 
    marginTop:15
  },
 
});

export default ViewScreen;
