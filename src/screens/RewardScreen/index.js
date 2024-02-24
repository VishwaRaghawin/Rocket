

import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import {Entypo,FontAwesome,FontAwesome6,FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const RewardScreen = ({ item }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    // Your logic or actions when the card is pressed
    console.log("Card Pressed:", item);
    navigation.navigate('course');
  };

  return (
    <View style={styles.container}>
      {/* Buttons */}
      <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.back}
  >
    <FontAwesome5 name="chevron-left" size={20} color='black' />
  </TouchableOpacity>

  <View style={styles.header}>
    <Text style={styles.headerText}>Reward Course</Text>
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -40 }}>
        <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={styles.additionalCard}>
            {/* White border with star icon and rating */}
            <View style={styles.whiteBorder}>
              <FontAwesome name="star" size={13} color="#ffdb58" />
              <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>4.5</Text>
            </View>

            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D' }}
              style={{ width: "130%", height: "90%", borderRadius: 24,marginLeft:55 }}
            />

            {/* Bottom box inside the image and below the whiteBorder */}
            <View style={styles.bottomBox}></View>

            <Text style={styles.cardText}>New App Live System </Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between",marginLeft:25 }}>
              <Text style={{ marginRight: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
                <FontAwesome name="user" size={14} color="#385a7c" /> Ransdell
              </Text>
              <Text style={{ marginLeft: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
                <FontAwesome name="calendar" size={11} color="#f97171" /> 1:50 hours
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8,marginLeft:-15 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginLeft: 15, marginRight: 15, color: "#ffdb58", fontSize: 15,fontWeight:'bold' }}>
                  300
                </Text>
                <Text style={{ marginLeft: 28, color: "white", borderRadius: 16, backgroundColor: "#50c878", padding: 3, fontSize: 7.5 }}>
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
    top: -57,
    left:-35,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 3,
    zIndex: 1,}}>
              <FontAwesome name="star" size={13} color="#ffdb58" />
              <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>4.2</Text>
            </View>

            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D' }}
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
    marginLeft:-46}}>Active Can Great Listener</Text>

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
                <Text style={{ marginLeft: 15, marginRight: 15, color: "#ffdb58", fontSize: 15,fontWeight:'bold' }}>
                 400
                </Text>
                <Text style={{ marginLeft: 18, color: "white", borderRadius: 16, backgroundColor: "#50c878", padding: 3, fontSize: 7.5 }}>
                 Text Course
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        
      </View>
      <View style={{ marginTop:-50,flexDirection: 'row', justifyContent: 'space-between',}}>
      <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={styles.additionalCard}>
            {/* White border with star icon and rating */}
            <View style={styles.whiteBorder}>
              <FontAwesome name="star" size={13} color="#ffdb58" />
              <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>5.0</Text>
            </View>

            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1507209575474-fa61e9d3086b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D' }}
              style={{ width: "130%", height: "90%", borderRadius: 24,marginLeft:55 }}
            />

            {/* Bottom box inside the image and below the whiteBorder */}
            <View style={styles.bottomBox}></View>

            <Text style={styles.cardText}>Learn Linux in 5 Days  </Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between",marginLeft:10}}>
              <Text style={{ marginRight: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
                <FontAwesome name="user" size={14} color="#385a7c" /> James
              </Text>
              <Text style={{ marginLeft: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
                <FontAwesome name="calendar" size={11} color="#f97171" /> 8:50 Hours
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8,marginLeft:10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginLeft: -25, marginRight: 15, color: "#ffdb58",  fontSize: 15,fontWeight:'bold' }}>
                  600
                </Text>
                <Text style={{ marginLeft: 15, color: "white", borderRadius: 16, backgroundColor: "#50c878", padding: 3, fontSize: 7.5 }}>
                  In Progress
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={styles.additionalCard}>
            {/* White border with star icon and rating */}
            <View style={{position: "absolute",
    top: -57,
    left:-35,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 3,
    zIndex: 1,}}>
              <FontAwesome name="star" size={13} color="#ffdb58" />
              <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>4.7</Text>
            </View>

            <Image
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1664478093846-bf24d89dd5e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29sYXIlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D' }}
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
    marginLeft:-46}}>The Future of Energy is Life</Text>

<View style={{ flexDirection: "row", justifyContent: "space-between",marginRight:50 }}>
  <Text style={{ marginRight: 20, marginTop: 5, color: "grey", fontSize: 11 }}>
    <FontAwesome name="user" size={15} color="#385a7c" /> Andrew 
  </Text>
  <Text style={{ marginLeft: -5, marginTop:5, color: "grey", fontSize: 11 }}>
    <FontAwesome name="calendar" size={12} color="#f97171" /> 2:30 hour
  </Text>
</View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10,marginRight:80 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginLeft: 15, marginRight: 15, color: "#ffdb58",  fontSize: 15,fontWeight:'bold' }}>
                  500
                </Text>
                <Text style={{ marginLeft: 15, color: "white", borderRadius: 16, backgroundColor: "#50c878", padding: 3, fontSize: 7.5 }}>
                 Text Course
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
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
    marginLeft: 10,
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
  back: {
    marginLeft:20,
     padding: 12,
     borderRadius: 10,
     color: 'black',
     width:'10%',
     marginTop:3
    
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
    fontSize: 21,
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
    top: -55,
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
    fontSize: 18,
    color: 'black',
    fontWeight:'bold',
    marginLeft:70
  },
});

export default RewardScreen ;