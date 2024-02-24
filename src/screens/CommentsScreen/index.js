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
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";


const CommentsScreen = ({ navigation }) => {
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
              marginTop: 42,
              marginLeft: 120,
            }}
          >
        Comments
          </Text>
        </View>

        <View style={{ paddingVertical: 8 }}>

          {/* First Card */}
          
  <View style={styles.reversedTextContainer}>
    <Text style={styles.reversedText}>My Comments</Text>
  </View>
  <TouchableOpacity onPress={() => navigation.navigate("comment")}>
  <View style={styles.card}>
    <ImageBackground
      source={require("../../../assets/image/p.jpg")}
      style={styles.circleImage}
    >
    </ImageBackground>
    <View style={styles.textSection}>
      <Text style={styles.name}>Become a Product Manager</Text>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <MaterialCommunityIcons name="calendar" size={14} color="gray" style={{ marginRight: 5,marginTop: 15 }} />
  <Text style={{ fontSize: 10, color: "grey",marginTop: 15 }}>20 Nov 2023 | 10:15</Text>
</View>
        </View>
      </View>
    </View>
  </View>
</TouchableOpacity>

{/* Second Card */}
<TouchableOpacity onPress={() => navigation.navigate("comment")}>
  <View style={styles.card}>
    <ImageBackground
      source={require("../../../assets/image/ene.jpg")}
      style={styles.circleImage}
    >

    </ImageBackground>
    <View style={styles.textSection}>
      <Text style={styles.name}>The Future of Energy</Text>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <MaterialCommunityIcons name="calendar" size={14} color="gray" style={{ marginRight: 5,marginTop:15  }} />
  <Text style={{ fontSize: 10, color: "grey",marginTop:15 }}>20 Nov 2023 | 10:15</Text>
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
    height:110,
    marginTop: 20,
    marginLeft: 9,
  },
  circleImage: {
    width: 130,
    height: 80,
    borderRadius: 24, // Adjusted borderRadius here
    marginRight: 10,
   
    overflow: 'hidden', // This is to ensure the border-radius is applied
  },
  textSection: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 13,
  },
  description: {
    marginTop: 1,
    color: "grey",
    fontSize: 11.5,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  completionStatus: {
    marginLeft: 5,
    color: "grey",
    fontSize: 11.5,
  },
  reversedTextContainer: {
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginTop: 15,
    marginLeft: 15,
    width: 120,
  },
  reversedText: {
    fontSize: 17,
    color: "black",
  },
});

export default CommentsScreen;
