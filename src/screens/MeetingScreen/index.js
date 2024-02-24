import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
  import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
import { AntDesign } from "@expo/vector-icons";


const MeetingScreen = ({ navigation }) => {
  const { openDrawer } = navigation;
  return (
<DrawerSceneWrapper>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center",backgroundColor:'white' }}>
          <TouchableOpacity
            onPress={openDrawer}
            style={{ marginLeft: 20, marginTop: 40 }}
          >
            <AntDesign name="menu-fold" size={23} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              color: "black",
              marginTop: 38,
              marginLeft: 130,
            }}
          >
            Meeting
          </Text>
        </View>

        <View style={{ paddingVertical: 8 }}>
         
            {/* Reversed text with border and space */}
            <View style={styles.reversedTextContainer}>
              <Text style={styles.reversedText}>Reversed</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("detail")}>
            <View style={styles.card}>
              <Image
                source={require("../../../assets/image/a.jpg")}
                style={styles.circleImage}
              />
              <View style={styles.textSection}>
                <Text style={styles.name}>Robert Ranssdell</Text>
                <View style={styles.dateTimeContainer}>
                  <Text>
                    <Text style={styles.calendarIcon}>📅</Text> Tue 15 Mar 2023
                  </Text>
                  <Text style={styles.clockIcon}>⏰ 10:30AM-11:30AM</Text>
                </View>
              </View>
              {/* "Pending" text inside the card */}
              <View style={styles.pendingTextWrapper}>
                <Text style={styles.pendingText}>Pending</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
     </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    width: "95%",
    marginTop: 20,
    marginLeft:9
  
  },
  circleImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  textSection: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
  },
  dateTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  calendarIcon: {
    marginRight: 5,
    fontSize:13

  },
  clockIcon: {
    marginLeft: 15,
    fontSize:13
  },
  // Style for the "Pending" text wrapper
  pendingTextWrapper: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "orange",
    borderRadius: 18,
    overflow: "hidden",
    
  },
  // Style for the "Pending" text
  pendingText: {
    color: "white",
    padding: 4,
    fontSize: 10,
  },
  // New style for the reversed text container
  reversedTextContainer: {
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginTop:15,
    marginLeft:15 ,
    width: 65,// Add space between reversed text and card
  },
  // Style for the reversed text
  reversedText: {
    fontSize: 15,
    color: "black",
    
  },
});

export default MeetingScreen;
