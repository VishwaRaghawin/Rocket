import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";


const AssignmentScreen = ({ navigation }) => {
  const { openDrawer } = navigation;

  return (
    <DrawerSceneWrapper>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: 'white' }}>
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
              marginTop: 32,
              marginLeft: 113,
            }}
          >
          Assignments
          </Text>
        </View>

        <View style={{ paddingVertical: 8 }}>

          {/* First Card */}
          
  <View style={styles.reversedTextContainer}>
    <Text style={styles.reversedText}>My Assignments</Text>
  </View>
  <TouchableOpacity onPress={() =>  navigation.navigate("overview")}>
  <View style={styles.card}>
    <ImageBackground
      source={require("../../../assets/image/a.jpg")}
      style={styles.circleImage}
    >
      {/* Add "Not Submitted" text inside the ImageBackground */}
      <View style={{ position: 'absolute', top: 10, left: 10, backgroundColor: "red", borderRadius: 10, padding: 5 }}>
        <Text style={{ color: "white", fontSize: 10 }}>Not Submitted</Text>
      </View>
    </ImageBackground>
    <View style={styles.textSection}>
      <Text style={styles.name}>Mid-Term HomeWork</Text>
      <Text style={styles.description}>
        A HomeWork to test yourself on your grasp of CSS and reassure yourself
        that you've got this...
      </Text>
      <View style={styles.iconContainer}>
        <MaterialIcons name="add-box" size={14} color="grey" />
        <Text style={styles.completionStatus}>0/1</Text>
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "red", marginTop: 5, marginRight: 10, fontSize: 10 }}>
              Deadline
            </Text>
            <Text style={{ fontSize: 8, color: "grey" }}>06 Nov 2023|15:05</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                color: "lightgreen",
                marginTop: 4,
                marginLeft: 10,
                fontSize: 10,
              }}
            >
              Last Submission
            </Text>
            <Text style={{ marginLeft: 55, fontSize: 8, color: "grey" }}>_</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
</TouchableOpacity>

{/* Second Card */}
<TouchableOpacity onPress={() =>   navigation.navigate("overviews")}>
  <View style={styles.card}>
    <ImageBackground
      source={require("../../../assets/image/f.jpg")}
      style={styles.circleImage}
    >
      {/* Add "Not Submitted" text inside the ImageBackground */}
      <View style={{ position: 'absolute', top: 10, left: 10, backgroundColor: "#43D477", borderRadius: 10, padding: 5 }}>
        <Text style={{ color: "white", fontSize: 10 }}>Passed</Text>
      </View>
    </ImageBackground>
    <View style={styles.textSection}>
      <Text style={styles.name}>Students Assignments</Text>
      <Text style={styles.description}>
        HomeWork, or a homework assignment, is a set of tasks assigned to
        students by their teachers...
      </Text>
      <View style={styles.iconContainer}>
        <MaterialIcons name="add-box" size={14} color="grey" />
        <Text style={styles.completionStatus}>2/5</Text>
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "red", marginTop: 10, marginRight: 10, fontSize: 10 }}>
              Deadline
            </Text>
            <Text style={{ fontSize: 10, color: "grey" }}>20 Nov 2023|10:15</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                color: "lightgreen",
                marginTop: 8,
                marginRight: 10,
                fontSize: 10,
              }}
            >
              Grade
            </Text>
            <Text style={{ fontSize: 8, color: "grey" }}>80/100</Text>
          </View>
        </View>
      </View>
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
    flex: 1,
    backgroundColor: 'white',
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
    marginLeft: 9,
  },
  circleImage: {
    width: 130,
    height: 120,
    borderRadius: 24, // Adjusted borderRadius here
    marginRight: 10,
    marginTop: 3,
    overflow: 'hidden', // This is to ensure the border-radius is applied
  },
  textSection: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  description: {
    marginTop: 5,
    color: "grey",
    fontSize: 9,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  completionStatus: {
    marginLeft: 5,
    color: "grey",
    fontSize: 10,
  },
  reversedTextContainer: {
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginTop: 15,
    marginLeft: 15,
    width: 120,
  },
  reversedText: {
    fontSize: 15.5,
    color: "black",
  },
});

export default AssignmentScreen;
