import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialIcons ,AntDesign,FontAwesome } from "@expo/vector-icons";
import StarRating from "../../components/StarRating";
  import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
  import { useNavigation } from '@react-navigation/native'; 
const Tab = createMaterialTopTabNavigator();


const Card = ({ title, imageSource, category, publishDate, isFirstCard }) => {
  const navigation = useNavigation();
  return (
  
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('course')}>
            <View style={styles.cardContainer}>
              <View style={{ flexDirection: "row" }}>
                <Image source={imageSource} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{title}</Text>
                  <View style={styles.ratingContainer}>
                    <StarRating />
                  </View>
                  <View style={styles.iconTextContainer}>
                    <View style={styles.iconText}>
                      <MaterialIcons name="access-time" size={16} color="grey" />
                      <Text style={styles.iconTextContent}>1:30 hour</Text>
                    </View>
                    <Text style={styles.freeText}>Free</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <View>
                  <Text style={{ color: "grey", marginTop: 5 ,fontSize:12}}>Category</Text>
                  <Text style={styles.additionalInfoTextLeft}>{category}</Text>
                </View>
                <View>
                  <Text style={{ color: "grey", marginTop: 5, marginRight: 110,fontSize:12 }}>
                    Publish Date
                  </Text>
                  <Text style={styles.additionalInfoTextRight}>{publishDate}</Text>
                </View>
              </View>
              <View style={styles.bottomBox}></View>
              {isFirstCard && (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <FontAwesome name="calendar" size={11} color="red" />
    <Text style={{ color: "red", marginLeft: 5,fontSize:10 }}>
      Access Expired on 22 Jun 2023
    </Text>
    <View
      style={{
        width: 20,
        height: 20,
        backgroundColor: "lightred",
        borderRadius: 4,
        marginLeft: 10,
      }}
    />
  </View>
)}


             
            </View>
          </TouchableOpacity>
         
        </View>
      </SafeAreaView>
    
  );
};




const PurchasedScreen = () => {
  const purchasedCardData = [
    {
      title: "New Update Features",
      imageSource: require("../../../assets/image/r.jpg"),
      category: "Lifestyle",
      publishDate: "21 Jun 2022",
    },
    {
      title: "New in-App Live System",
      imageSource: require("../../../assets/image/a.jpg"),
      category: "Web Development",
      publishDate: "15 Sep 2022",
    },
    {
      title: "Travel Management Course",
      imageSource: require("../../../assets/image/j.jpg"),
      category: "Health & Fitness",
      publishDate: "12 Jun 2022",
    },
    {
      title: "Learn Linux in 5 Days",
      imageSource: require("../../../assets/image/y.jpg"),
      category: "Mobile Development",
      publishDate: "10 Nov 2022",
    },
    {
      title: "Health And Fitness Masterclass",
      imageSource: require("../../../assets/image/o.jpg"),
      category: "Lifestyle",
      publishDate: "15 Jan 2022",
    },
    {
      title: "How to Travel Around the World",
      imageSource: require("../../../assets/image/m.jpg"),
      category: "Management",
      publishDate: "5 Sep 2022",
    },
    {
      title: "Learn and Understand AngularJS",
      imageSource: require("../../../assets/image/p.jpg"),
      category: "Web Development",
      publishDate: "15 Sep 2022",
    },
    {
      title: "Excel from Beginner to Advanced",
      imageSource: require("../../../assets/image/f.jpg"),
      category: "Communications",
      publishDate: "1 Feb 2022",
    },
    {
      title: "How to Manage Your Virtual Team",
      imageSource: require("../../../assets/image/x.jpg"),
      category: "Design",
      publishDate: "27 Apr 2022",
    },
    {
      title: "Become a Product Manager",
      imageSource: require("../../../assets/image/g.jpg"),
      category: "Business Strategy",
      publishDate: "15 May 2022",
    },
    {
      title: "Web Design for Beginners",
      imageSource: require("../../../assets/image/p.jpg"),
      category: "Design",
      publishDate: "30 Dec 2022",
    },
    // ... rest of the purchasedCardData array
  ];

  const purchasedCards = purchasedCardData.map(
    ({ title, imageSource, category, publishDate }, index) => (
      <Card
        key={index}
        title={title}
        imageSource={imageSource}
        content1={`Purchased Content 1 for ${title}`}
        content2={`Purchased Content 2 for ${title}`}
        category={category}
        publishDate={publishDate}
        isFirstCard={index === 0}
      />
    )
  );

  return (
    <ScrollView style={styles.screenContainer}>{purchasedCards}</ScrollView>
  );
};

const OrganizationScreen = () => {
  const organizationCardData = [
    {
      title: "Organize Your Business",
      imageSource: require("../../../assets/image//a.jpg"),
      category: "Lifestyle",
      publishDate: "10 Aug 2022",
    },
    {
      title: "Financial Management Workshop",
      imageSource: require("../../../assets/image/p.jpg"),
      category: "Lifestyle",
      price: "$30.0",
      publishDate: "15 Sep 2022",
    },
    {
      title: "Leadership Excellence Program",
      imageSource: require("../../../assets/image/x.jpg"),
      category: "Management",
      price: "$25.0",
      publishDate: "20 Oct 2022",
    },
    // ... add more card data as needed
  ];

  const organizationCards = organizationCardData.map(
    (
      { title, imageSource, content1, content2, category, price, publishDate },
      index
    ) => (
      <Card
        key={index}
        title={title}
        imageSource={imageSource}
        content1={content1}
        content2={content2}
        category={category}
        additionalText={`Price: ${price}`}
        publishDate={publishDate}
      />
    )
  );

  return (
    <ScrollView style={styles.screenContainer}>{organizationCards}</ScrollView>
  );
};

const MyCoursesScreen = ({navigation}) => {
  const { openDrawer } = navigation;

  return ( 
 <DrawerSceneWrapper>
    <SafeAreaView style={{flex:1}}>
     <View style={{ flexDirection: 'row', alignItems: 'center',backgroundColor:'white' }}>
       <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 20, marginTop: 50 }}>
         <AntDesign name="menu-fold" size={23} color="black" />
       </TouchableOpacity>
       <Text style={{ fontSize: 22, color: "black" ,marginTop:45 ,  marginLeft:110}}>Courses</Text>
     </View>
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          marginTop: 0,
        },
      }}
    >
      <Tab.Screen name="Purchased" component={PurchasedScreen} />
      <Tab.Screen name="Organization" component={OrganizationScreen} />
    </Tab.Navigator>
    </SafeAreaView>
     </DrawerSceneWrapper>
  
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  
  },
  cardContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
   
    height: 200, // Adjust the height based on your design
  },
  cardImage: {
    width: 130,
    height: 90,
    marginRight: 10,
    borderRadius: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconTextContent: {
    marginLeft: 5,
    color: "grey",
  },
  freeText: {
    color: "lightgreen",
    fontWeight: "bold",
  },
  bottomBox: {
    width: 325,
    height: 5,
    backgroundColor: "lightgreen", // Set the background color as per your design
    marginTop: 20,
    borderRadius: 14,
    marginRight: 100,
    borderWidth: 1,
    borderColor: "lightgrey", // Adjust the margin as needed
  },
});

export default MyCoursesScreen;                                            