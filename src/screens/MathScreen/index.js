
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Entypo,FontAwesome6 } from '@expo/vector-icons';


const  MathScreen = ({ item }) => {
  const handlePress = () => {
    // Your logic or actions when the card is pressed
    console.log("Card Pressed:", item);
  };

  return (
    <View style={styles.container}>
      {/* Buttons */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Math</Text>
        </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        {/* Button 1 with icon and text */}
        <Button
          icon={
            <FontAwesome6 
            name="arrow-down-up-across-line" 
              size={15}
              color="lightgreen"
              style={{ marginRight: 10 }}
            />
          }
          title="Options"
          containerStyle={{
            marginLeft: 20,
            marginTop: 30,
            width: "35%",
            height: 45,
            borderRadius:5,
            borderWidth: 1,
            borderColor: 'lightgreen',
          }}
          buttonStyle={{ backgroundColor: 'white' }}
          titleStyle={{ color: 'lightgreen' }}
          onPress={() => handlePress(item)}
        />

        {/* Button 2 with icon and text */}
        <Button
          icon={
            <Icon
              name="user"
              type="font-awesome"
              size={20}
              color="lightgreen"
              style={{ marginRight: 10 }}
            />
          }
          title="Filters"
          containerStyle={{
            marginLeft: 20,
            marginTop: 30,
            width: "35%",
            height: 45,
            borderRadius:5,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'lightgreen',
          }}
          buttonStyle={{ backgroundColor: 'white' }}
          titleStyle={{ color: 'lightgreen' }}
          onPress={() => handlePress(item)}
        />

        {/* Button 3 with only icon */}
        <Button
          icon={
            <Entypo
              name="menu"
              size={22}
              color="lightgreen"
              style={{ marginLeft: 0 }}
            />
          }
          containerStyle={{
            borderWidth: 1,
            borderColor: 'lightgreen',
            marginLeft: 20,
            marginTop: 30,
            height: 45,
            borderRadius:5,
            width: '12%',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          buttonStyle={{ backgroundColor: 'white' }}
          titleStyle={{ color: 'white' }}
          onPress={() => handlePress(item)}
        />
      </View>
      <Text style={styles.featuredCoursesText}>Featured Courses</Text>

      <Image
        source={{
          uri: 'https://www.igv.com/_nuxt/de-list.21f0e078.png', // Replace with the actual image URL
        }}
        style={styles.featuredCoursesImage}
      />
    

    <Text style={{fontSize:26,fontWeight:'bold', textAlign: 'center'}}>Data not found...</Text>
      <Text style={styles.additionalText}>There is no item on this page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  additionalText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  featuredCoursesImage: {
    width: '45%',
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
    marginTop: 150,
    alignSelf: 'center', 
  },
  featuredCoursesText: {
    color: "black",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "left",
    marginLeft: 10,
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: 'black',
    marginTop:10,
    fontWeight:'bold', 
  },
});

export default  MathScreen;