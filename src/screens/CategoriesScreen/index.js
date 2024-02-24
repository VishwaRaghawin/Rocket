import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import FeatherIcon from "react-native-vector-icons/Feather";
import { AntDesign } from '@expo/vector-icons';
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";

const data = [
  {
    id: "1",
    title: "Management",
    image: require("../../../assets/image/bag.png"),
    description: "2 Courses",
  },
  {
    id: "2",
    title: "Business Strategy",
    image: require("../../../assets/image/light.png"),
    description: "1 Courses",
  },
  {
    id: "3",
    title: "Lifestyle",
    image: require("../../../assets/image/k.png"),
    description: "3 Courses",
  },
  {
    id: "4",
    title: "Health & Fitness",
    image: require("../../../assets/image/a.png"),
    description: "1 Courses",
  },
  {
    id: "5",
    title: "Science",
    image: require("../../../assets/image/flasks.png"),
    description: "1 Courses",
  },
  {
    id: "6",
    title: "Design",
    image: require("../../../assets/image/color.png"),
    description: "1 Courses",
  },
];

const categories = [
  { title: "Design", icon: "feather" },
  { title: "Academics", content: "Academics", icon: "book", rightArrow: true },
  { title: "Health & Fitness", icon: "heart" },
  {
    title: "Lifestyle",
    content: "Lifestyle",
    icon: "umbrella",
    rightArrow: true,
  },
  { title: "Marketing", icon: "pie-chart" },
  {
    title: "Business",
    content: "Business",
    icon: "briefcase",
    rightArrow: true,
  },
  {
    title: "Development",
    content: "Development",
    icon: "code",
    rightArrow: true,
  },
];

const CategoriesScreen = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState([]);

  const renderCard = ({ item, index }) => (
    <TouchableOpacity onPress={() => handlePress(item.title)}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderAccordionHeader = (section, index, isActive) => (
    <TouchableOpacity onPress={() => handlePress(section.title)}>
      <View
        style={[
          styles.accordionHeader,
          section.title === "Design"
            ? styles.designHeader
            : section.title === "Health & Fitness"
            ? styles.healthFitnessHeader
            : section.title === "Marketing"
            ? styles.marketingHeader
            : styles.defaultHeader,
        ]}
      >
        <FeatherIcon
          name={section.icon}
          size={20}
          color={isActive ? "green" : "gray"}
          style={styles.icon}
        />
        <Text style={styles.accordionHeaderText}>{section.title}</Text>
        {section.rightArrow && (
          <FeatherIcon
            name="chevron-right"
            size={16}
            color="gray"
            style={styles.arrowIcon}
          />
        )}
      </View>
    </TouchableOpacity>
  );

  const SectionContent = ({ navigation, section }) => {
    // Check if section or section.content is missing
    if (!section || !section.content) return null;
  
    // Switch based on section content
    switch (section.content) {
      case "Academics":
        return (
          <View style={styles.accordionContent}>
            {/* Add onPress handlers to TouchableOpacity components */}
            <TouchableOpacity onPress={() => navigation.navigate("math")}>
              <Text>Academics Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("AcademicsOption2")}>
              <Text>Academics Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("AcademicsOption3")}>
              <Text>Academics Option 3</Text>
            </TouchableOpacity>
          </View>
        );
      // Add other cases if necessary
      default:
        return null;
    }
  };

  const toggleAccordion = (index) => {
    setActiveSections(activeSections.includes(index) ? [] : [index]);
  };

  const handlePress = (title) => {
    switch (title) {
      case "Management":
        navigation.navigate("Management");
        break;
      case "Business Strategy":
        navigation.navigate("Business");
        break;
      case "Lifestyle":
        navigation.navigate("Life");
        break;
      case "Health & Fitness":
        navigation.navigate("Health");
        break;
      case "Science":
        navigation.navigate("Science");
        break;
      case "Design":
        navigation.navigate("Design");
        break;
      case "Marketing":
        navigation.navigate("Marketing");
        break;
        case "Academics":
        navigation.navigate("lan");
        break;
        case "Development":
          navigation.navigate("web");
          break;
          case "Business":
            navigation.navigate("Business");
            break;
      default:
        break;
    }
  };

  return (
    <DrawerSceneWrapper> 
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={navigation.openDrawer} style={styles.menuButton}>
            <AntDesign name="menu-fold" size={23} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.trendingText}>Trending</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderCard}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.browseText}>Browse categories</Text>
          <View style={styles.accordionContainer}>
            <Accordion
              sections={categories}
              activeSections={activeSections}
              renderHeader={renderAccordionHeader}
              renderContent={(section) => (
                <SectionContent navigation={navigation} section={section} />
              )}
              onChange={toggleAccordion}
            />
          </View>
        </View>
      </SafeAreaView>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set the background color to grey
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  menuButton: {
    marginLeft: 20,
    marginTop: 50,
  },
  headerText: {
    fontSize: 22,
    color: "black",
    marginTop: 45,
    marginLeft: 120,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderColor: "white",
    borderRadius: 10,
    margin: 8,
    width: 250,
    height: 100,
    marginTop: 70,
    backgroundColor: '#FFFFFF',
    elevation: 6, // Set the background color to white
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#888",
  },
  accordionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    elevation: 6, 
  },
  accordionHeaderText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  accordionContent: {
    padding: 16,
  },
  accordionContainer: {
    
    backgroundColor: "white",
    width: "90%",
    marginLeft: 20,
  },
  icon: {
    marginRight: 10,
  },
  designHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 15,
  },
  defaultHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 10,
  },
  healthFitnessHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 10,
  },
  marketingHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 10,
  },
  trendingText: {
    position: "absolute",
    top: 8,
    left: 8,
    color: "grey",
    fontSize: 16,
    zIndex: 1,
    marginTop: 20,
  },
  browseText: {
    fontSize: 16,
    textAlign: "left",
    paddingVertical: 10,
    marginLeft: 10,
    marginTop: 5,
    color: "grey",
  },
});

export default CategoriesScreen;
