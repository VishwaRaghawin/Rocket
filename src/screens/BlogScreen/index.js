import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
import { AntDesign } from "@expo/vector-icons";

const BlogScreen = ({ navigation }) => {
  const { openDrawer } = navigation;

  const CardItem = ({ cardData, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Card containerStyle={styles.cardContainer}>
        <Image source={{ uri: cardData.image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{cardData.title}</Text>
          <Text style={styles.description}>{cardData.description}</Text>
          <View style={styles.metadataContainer}>
            <View style={styles.authorContainer}>
              <Icon
                name="calendar"
                type="font-awesome"
                color="gray"
                size={14}
                style={styles.icon}
              />
              <Text style={styles.author}>{cardData.author}</Text>
            </View>
            <View style={styles.dateContainer}>
              <MaterialCommunityIcons
                name="dots-horizontal-circle"
                color="gray"
                size={14}
                style={styles.icon}
              />
              <Text style={styles.date}>{cardData.date}</Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  const handleCardPress = (cardData) => {
    // Handle the press event for the card
    console.log("Card pressed:", cardData.title);
    navigation.navigate('become')
    // Add your navigation logic or any other action here
  };

  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1682974407026-581fe0e550ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGxlZ2UlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Become a Straight-A Student",
      description:
        "In this article, I'll explain the two rules I followed to become a straight-A student. If you take my advice, you'll get better grades and lead a more...",
      author: "John Doe",
      date: "01 Jul 2023",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683120804333-28c5cc16c3ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZSUyMHN0dWRlbnRzfGVufDB8fDB8fHww",
      title: "How To Teach Your Kid Easily",
      description:
        "The primary reason Kids struggle with schools is fear. And in most cases, it's their parent's fault. I started tutoring math out of financial desperation...",
      author: "Jane Doe",
      date: "01 Jul 2023",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1682974403182-4cbbaa811d1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGVnZSUyMHN0dWRlbnRzfGVufDB8fDB8fHww",
      title: "Better Relationship Between Friends",
      description:
        "The tutor-parent relationship is an important relationship and unfortunately greatly overlooked. Why is it important? Well, a good relationship between you...",
      author: "Bob Smith",
      date: "01 Jul 2023",
    },
  ];

  return (
     <DrawerSceneWrapper>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer} style={styles.menuIcon}>
            <AntDesign name="menu-fold" size={23} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Blog</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((item, index) => (
            <CardItem key={index} cardData={item} onPress={() => handleCardPress(item)} />
          ))}
        </ScrollView>
      </SafeAreaView>
  </DrawerSceneWrapper> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 40, // Adjust the top padding here
    paddingHorizontal: 20,
  },
  menuIcon: {
    marginLeft: 5,
    marginTop:-40
  },
  headerText: {
    fontSize: 22,
    color: "black",
    marginLeft: 140,
    marginTop: -50
  },
  cardContainer: {
    marginTop: 10,
    borderRadius: 16,
    backgroundColor: "white",
    borderWidth: 0,
    marginBottom: 10,
  },
  cardImage: {
    height: 185,
    borderRadius: 10,
    borderWidth: 0,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
    color: "grey",
    marginTop: 10,
  },
  metadataContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
  },
  icon: {
    marginRight: 5,
  },
  author: {
    fontSize: 14,
    color: "gray",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
});

export default BlogScreen;

