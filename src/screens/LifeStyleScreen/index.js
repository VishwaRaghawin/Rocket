
import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { AntDesign, Entypo,FontAwesome,FontAwesome6,FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const  LifeStyleScreen = ({ item }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    // Your logic or actions when the card is pressed
    console.log("Card Pressed:", item);
    navigation.navigate('course');
  };

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
    <Text style={styles.headerText}> Life Style</Text>
  </View>
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

      {/* Card */}
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={styles.card}>
          {/* Image */}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1633279305915-3760f40ae70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzk0fHx3b21lbiUyMGFsb25lfGVufDB8fDB8fHww",
            }}
            style={{ width: "100%", height: "100%", borderRadius: 30,marginLeft:25 }}
          />

          {/* Overlay text */}
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>
              New Learning Page 
            </Text>
          </View>

          {/* Overlay star icons */}
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((index) => (
              <AntDesign
                key={index}
                name="star"
                style={{
                  fontSize: 14,
                  marginRight: 2,
                  marginTop: 5,
                  color: 'gold',
                }}
              />
            ))}
          </View>

          {/* Circular image */}
          <View style={styles.circularImageContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1559629819-638a8f0a4303?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95fGVufDB8fDB8fHww",
              }}
              style={styles.circularImage}
            />
            <View style={styles.textInCircleContainer}>
              <Text style={styles.textInCircle}>Robert</Text>
            </View>
          </View>

          {/* $100 text on the right side */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Free</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Additional Card */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -40 }}>
        <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={styles.additionalCard}>
            {/* White border with star icon and rating */}
            <View style={styles.whiteBorder}>
              <FontAwesome name="star" size={12} color="#ffdb58" />
              <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>4.5</Text>
            </View>

            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1616824726805-1c991ae55757?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGFsb25lfGVufDB8fDB8fHww' }}
              style={{ width: "130%", height: "90%", borderRadius: 24,marginLeft:55 }}
            />

            {/* Bottom box inside the image and below the whiteBorder */}
            <View style={styles.bottomBox}></View>

            <Text style={styles.cardText}>New Learning Page</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between",marginLeft:35 }}>
              <Text style={{ marginRight: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
                <FontAwesome name="user" size={14} color="#385a7c" /> Ransdell
              </Text>
              <Text style={{ marginLeft: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
                <FontAwesome name="calendar" size={11} color="#f97171" /> 1:50 hours
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8,marginLeft:35  }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginLeft: -20, marginRight: 15, color: "#50c878", fontSize: 11 }}>
                  Free
                </Text>
                <Text style={{ marginLeft:40, color: "white", borderRadius: 16, backgroundColor: "#50c878", padding: 3, fontSize: 7.5 }}>
                Free Course
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={styles.additionalCard}>
            {/* White border with star icon and rating */}
            <View style={{position: "absolute",
    top: -50,
    left:-40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 3,
    zIndex: 1,}}>
              <FontAwesome name="star" size={12} color="#ffdb58" />
              <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>4.7</Text>
            </View>

            <Image
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1664353833764-09710438adf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbiUyMGFsb25lfGVufDB8fDB8fHww' }}
              style={{ width: "130%", height: "90%", borderRadius: 24,marginLeft:-55 }}
            />

            {/* Bottom box inside the image and below the whiteBorder */}
            <View style={{position: "absolute",
    width: 180,
    height: 5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#f5f5f5",
    bottom: 100,
    left:-42}}></View>

            <Text style={{ fontSize: 12,
    color: "black",
    paddingHorizontal: 8,
    borderRadius: 10,
    fontWeight: "bold",
    marginTop:11,
    marginLeft:-46}}>Travel Around the World </Text>

<View style={{ flexDirection: "row", justifyContent: "space-between",marginRight:50 }}>
  <Text style={{ marginRight: 20, marginTop: 5, color: "grey", fontSize: 11 }}>
    <FontAwesome name="user" size={14} color="#385a7c" /> John Powe
  </Text>
  <Text style={{ marginLeft: -5, marginTop:5, color: "grey", fontSize: 11 }}>
    <FontAwesome name="calendar" size={11} color="#f97171" /> 2:30 hour
  </Text>
</View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10,marginRight:50 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginLeft: 15, marginRight: 15, color: "#50c878", fontSize: 11 }}>
                  $25 USD
                </Text>
                <Text style={{ marginLeft: 18, color: "white", borderRadius: 16, backgroundColor: "#50c878", padding: 3, fontSize: 7.5 }}>
                  In Progress
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  featuredCoursesText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
    marginLeft: 20,
  },
  card: {
    width: 410,
    height: 212,
    backgroundColor: "#ffffff",
    marginHorizontal: 5,
    borderRadius: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
    position: "relative",
    borderRadius: 30,
    overflow: "hidden",
  },
  cardText: {
    fontSize: 12,
    color: "black",
    paddingHorizontal: 8,
    borderRadius: 10,
    fontWeight: "bold",
    marginTop:10,
    marginLeft:0
  },
  bottomBox: {
    position: "absolute",
    width: 180,
    height: 5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#f5f5f5",
    bottom: 85, // Adjust the bottom position as needed
  },
  starContainer: {
    position: "absolute",
    bottom: 70,
    left: 20,
    flexDirection: "row",
  },
  textInCircleContainer: {
    position: "absolute",
    top: 0,
    left: 50,
    width: 50,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textInCircle: {
    color: "white",
    fontSize: 14,
  },
  circularImageContainer: {
    position: "absolute",
    bottom: 15,
    left: 20,
  },
  circularImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  priceContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 4,
    margin: 10,
  },
  priceText: {
    color: 'lightgreen',
    fontSize:14,
    alignSelf:'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
  },
  overlayText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
    left: 20,
  },
  additionalCard: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5,
  },
  whiteBorder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  bottomBox: {
    position: "absolute",
    width: 170,
    height: 5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#f5f5f5",
    bottom: 100,
    left:15 // Adjust the bottom position as needed
  },
  additionalCard: {
    width: 150,
    height: 120,
    backgroundColor: "transparent",
    marginHorizontal: 5,
    borderRadius: 24,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 155,
  },
  whiteBorder: {
    position: "absolute",
    top: -50,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 3,
    zIndex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight:'bold',
    marginTop:20,
    marginLeft:85
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

export default  LifeStyleScreen;