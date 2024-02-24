import React, { useState, useRef } from "react";
import {View,TextInput,StyleSheet,Text,KeyboardAvoidingView,FlatList,Image,TouchableOpacity,ScrollView,SafeAreaView} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const { openDrawer } = navigation;
  const [textInputVisible, setTextInputVisible] = useState(true);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    setTextInputVisible(yOffset <= 0);
  };

  const handleEcommercePress = () => {
   
    console.log('Ecommerce icon pressed');
    navigation.navigate('cart')
    
  };

  const handleNotificationPress = () => {
    
    console.log('Notification icon pressed');
    navigation.navigate('notification')
    
  };
  
  const renderFeaturedCard = ({ item }) => {
    const handlePress = () => {
     
      console.log("Card Pressed:", item.text);
      navigation.navigate('course')
    };
    return (
        <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={styles.card}>
            {/* Image */}
            <Image
              source={item.image}
              style={{ width: "100%", height: "100%", borderRadius: 30 }}
            />
      
           
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>
                {item.title}Excel from Beginner to Advance
              </Text>
            </View>
      
            
            <View style={styles.starContainer}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Icon
                  key={index}
                  name="star"
                  type="FontAwesome"
                  style={styles.starIcon}
                />
              ))}
            </View>
      
          
            <View style={styles.circularImageContainer}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
                }}
                style={styles.circularImage}
              />
              <View style={styles.textInCircleContainer}>
                <Text style={styles.textInCircle}>Ransdell</Text>
              </View>
            </View>
      
           
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>$100</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
      
  };

  const renderAdditionalCard = ({ item }) => {
    const handlePress = () => {
     
      console.log("Card Pressed:", item.text);
      navigation.navigate('course')
    };

    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={styles.additionalCard}>
          
          <View style={styles.whiteBorder}>
            <FontAwesome name="star" size={13} color="#ffdb58" />
            <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>
              {item.rating}4.5
            </Text>
          </View>

          <Image
            source={item.image}
            style={{ width: "100%", height: "80%", borderRadius: 24 }}
          />

         
          <View style={styles.bottomBox}></View>

          <Text style={styles.cardText}>{item.text}</Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                marginRight: 10,
                marginTop: 7,
                color: "grey",
                fontSize: 11,
              }}
            >
              <FontAwesome name="user" size={15} color="#385a7c" /> Willam
            </Text>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 7,
                color: "grey",
                fontSize: 11,
              }}
            >
              <FontAwesome name="calendar" size={12} color="#f97171" /> 1:30 Hr
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center",marginRight: 22, }}>
              <Text
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  color: "#00A400",
                  fontSize: 11,
                }}
              >
                $20 USD
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  color: "white",
                  borderRadius: 16,
                  backgroundColor: "#ffdb58",
                  padding: 3,
                  fontSize: 7.5,
                }}
              >
                In Progress
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSpecialCard = ({ item }) => {
    const handlePress = () => {
      
      console.log("Special Card Pressed:", item.text);
      navigation.navigate('course')
    };

    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={styles.additionalCard}>
          <View style={styles.whiteBorder}>
            <FontAwesome name="star" size={13} color="#ffdb58" />
            <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>
              {item.rating}4.0
            </Text>
          </View>

          <Image
            source={item.image}
            style={{ width: "100%", height: "80%", borderRadius: 24 }}
          />

          <View style={styles.bottomBox}></View>

          <Text style={styles.cardText}>{item.text}</Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                marginRight: 10,
                marginTop: 7,
                color: "grey",
                fontSize: 11,
              }}
            >
              <FontAwesome name="user" size={15} color="#ee4b2b" /> Robert
            </Text>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 7,
                color: "grey",
                fontSize: 11,
              }}
            >
              <FontAwesome name="calendar" size={12} color="#B76E79" /> 15:30 Hr
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" ,marginRight:22}}>
              <Text
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  color: "#00A400",
                  fontSize: 11,
                }}
              >
                $50 USD
              </Text>
              <Text
                style={{
                  marginLeft: 18,
                  color: "white",
                  borderRadius: 16,
                  backgroundColor: "#30d5c8",
                  padding: 3,
                  fontSize: 7.5,
                }}
              >
                In Progress
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMoreAdditionalCard = ({ item }) => {
    const handlePress = () => {
      console.log("New Card Pressed:", item.text);
      navigation.navigate('course')
    };

    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={styles.additionalCard}>
          <View style={styles.whiteBorder}>
            <FontAwesome name="star" size={13} color="#ffdb58" />
            <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>
              {item.rating}4.8
            </Text>
          </View>

          <Image
            source={item.image}
            style={{ width: "100%", height: "80%", borderRadius: 24 }}
          />

          <View style={styles.bottomBox}></View>

          <Text style={styles.cardText}>{item.text}</Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                marginRight: 10,
                marginTop: 7,
                color: "grey",
                fontSize: 11,
              }}
            >
              <FontAwesome name="user" size={15} color="#7f7053" /> Linda
            </Text>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 7,
                color: "grey",
                fontSize: 11,
              }}
            >
              <FontAwesome name="calendar" size={12} color="#e0479e" /> 30 Min
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center",marginRight:22, }}>
              <Text
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  color: "#00A400",
                  fontSize: 11,
                }}
              >
                $30 USD
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  color: "white",
                  borderRadius: 16,
                  backgroundColor: "#a288e3",
                  padding: 3,
                  fontSize: 7.5,
                }}
              >
                In Progress
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderNewCard = ({ item }) => {
    const handlePress = () => {
      console.log("New Card Pressed:", item.text);
      navigation.navigate('reward')
    };

    return (
        <View
        style={{
          backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    elevation: 6, 
          width: 390,
          height: 200,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
          justifyContent: "center",
        marginLeft:17,
        marginBottom:10
        }}
      >
      
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 5,
              marginTop: -5,
            }}
          >
            Reward Courses! {item.text}
          </Text>
          <Text style={{ fontSize: 13, color: "gray", marginTop: -5,marginRight:5 }}>
            {item.reward} By Spending Points
          </Text>

        
          <TouchableOpacity
            style={{
              backgroundColor: "#50c878",
              padding: 6, 
              borderRadius: 24,
              marginTop: 40,
              width: "65%",
              justifyContent: "center", 
              alignItems: "center",
              height: 45,
              
            }}
            onPress={() => handlePress(item)}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>View</Text>
          </TouchableOpacity>
        </View>

        
        <Image
          source={item.image}
          style={{ width: "40%", height: 190, borderRadius: 8, marginRight: 10 }} 
        />
      </View>
    );
  };

  const renderAdditionalSpecialCard = ({ item }) => {
    const handlePress = () => {
      console.log("Additional Special Card Pressed:", item.text1);
      navigation.navigate('course')
    };

    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={styles.additionalCard}>
          <View style={styles.whiteBorder}>
            <FontAwesome name="star" size={13} color="#ffdb58" />
            <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>
              {item.rating}4.2
            </Text>
          </View>

          <Image
            source={item.image}
            style={{ width: "100%", height: "80%", borderRadius: 24 }}
          />

          <View style={styles.bottomBox}></View>

          <Text style={styles.cardText}>{item.text}</Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                marginRight: 10,
                marginTop: 7,
                color: "grey",
                fontSize: 11,
              }}
            >
              <FontAwesome name="user" size={15} color="#30d5c8" /> Ransdell
            </Text>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 7,
                color: "grey",
                fontSize: 11,
              }}
            >
              <FontAwesome name="calendar" size={12} color="#483248" /> 7:45 Hr
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center",marginRight:22 }}>
              <Text
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  color: "#00A400",
                  fontSize: 11,
                }}
              >
                $100 USD
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  color: "white",
                  borderRadius: 16,
                  backgroundColor: "#c5832b",
                  padding: 3,
                  fontSize: 7.5,
                }}
              >
                In Progress
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCustomCardsData = ({ item }) => {
    const handlePress = () => {
      console.log("Additional Special Card Pressed:", item.text1);
      navigation.navigate('course')
    };

    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={styles.additionalCard}>
          <View style={styles.whiteBorder}>
            <FontAwesome name="star" size={13} color="#ffdb58" />
            <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>
              {item.rating}4.7
            </Text>
          </View>

          <Image
            source={item.image}
            style={{ width: "100%", height: "80%", borderRadius: 24 }}
          />

          <View style={styles.bottomBox}></View>

          <Text style={styles.cardText}>{item.text}</Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                marginRight: 10,
                marginTop: 7,
                color: "grey",
                fontSize: 11,
              }}
            >
              <FontAwesome name="user" size={15} color="#C54B8C" /> Vishwa
            </Text>
            <Text
              style={{
                marginRight: 10,
                marginTop: 7,
                color: "grey",
                fontSize: 11,
              }}
            >
              <FontAwesome name="calendar" size={12} color="#2C041C" /> 1:45 Hr
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center",marginRight: 22, }}>
              <Text
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  color: "#00A400",
                  fontSize: 11,
                }}
              >
                Free
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  color: "white",
                  borderRadius: 16,
                  backgroundColor: "#32cd32",
                  padding: 3,
                  fontSize: 7.5,
                }}
              >
                In Progress
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleViewAllPress = () => {
  
    console.log("View All Pressed");
    navigation.navigate('view')
  };

  const data = [
    
    {
      id: "1",
      image: {
        uri: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyb3Vwc3xlbnwwfHwwfHx8MA%3D%3D",
      },
    },
    {
      id: "2",
      image: {
        uri: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyb3VwJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
    },
   
  ];

 
  const additionalData = [
    {
      id: "new_1",
      image: {
        uri: "https://plus.unsplash.com/premium_photo-1703385177412-2f4930c9fe2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
      },
      text: "New Update Features",
    },
    {
      id: "new_2",
      image: {
        uri: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
      },
      text: "New In-App Live System",
    },
    {
      id: "new_3",
      image: {
        uri: "https://plus.unsplash.com/premium_photo-1669863283591-16fd2844c521?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      },
      text: "New Learning Page",
    },
    {
      id: "new_4",
      image: {
        uri: "https://images.unsplash.com/photo-1682685797527-63b4e495938f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D",
      },
      text: "How to Travel the World",
    },
    {
      id: "new_5",
      image: {
        uri: "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",
      },
      text: "Design for Beginners",
    },
    {
      id: "new_6",
      image: {
        uri: "https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D",
      },
      text: "The Futures of Energy",
    },
    {
      id: "new_7",
      image: {
        uri: "https://images.unsplash.com/photo-1705642373439-27963d4b9908?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D",
      },
      text: "Listening Great Listener",
    },
    {
      id: "new_8",
      image: {
        uri: "https://images.unsplash.com/photo-1705579610200-d7e0f6000bb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D",
      },
      text: "Health And Fitness",
    },
    {
      id: "new_9",
      image: {
        uri: "https://images.unsplash.com/photo-1682687219800-bba120d709c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
      },
      text: "Learn AngularJS",
    },
    {
      id: "new_10",
      image: {
        uri: "https://images.unsplash.com/photo-1705650065370-656dafd3e20d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTd8fHxlbnwwfHx8fHw%3D",
      },
      text: "Effective Management",
    },
  ];

 
  const specialCardsData = [
    {
      id: "special_1",
      image: {
        uri: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
      text: "Microsoft Office",
    },
    {
      id: "special_2",
      image: {
        uri: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
      text: "A-Z web Programming",
    },
    {
      id: "special_3",
      image: {
        uri: "https://plus.unsplash.com/premium_photo-1681691911660-a40d4163ed9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVuZ2luZWVyfGVufDB8fDB8fHww",
      },
      text: "Solar Energy Design",
    },
  ];

  const moreAdditionalData = [
    {
      id: "new_1",
      image: {
        uri: "https://plus.unsplash.com/premium_photo-1661663660920-9b8009a791b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwJTIwd2F0Y2hpbmclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      },
      text: "Learn Python",
    },
    {
      id: "new_2",
      image: {
        uri: "https://plus.unsplash.com/premium_photo-1661526758846-1b45ddb59d6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4lMjAlMjB3YXRjaGluZyUyMHR2fGVufDB8fDB8fHww",
      },
      text: "Effect Management",
    },
    {
      id: "new_3",
      image: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBPRYRb2BEMCcISJLDXCsfA-xHVXyRoWFQQ&usqp=CAU",
      },
      text: "Health And Fitness",
    },
    {
      id: "new_4",
      image: {
        uri: "data:image/jpeg;base64,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",
      },
      text: "Active Listening You",
    },
    {
      id: "new_5",
      image: {
        uri: "data:image/jpeg;base64,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",
      },
      text: "Design for Beginners",
    },
    {
      id: "new_6",
      image: {
        uri: "data:image/jpeg;base64,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",
      },
      text: "New Learning Page",
    },
    {
      id: "new_7",
      image: {
        uri: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwJTIwd2F0Y2hpbmclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      },
      text: "Product Manger",
    },
    {
      id: "new_8",
      image: {
        uri: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hlZXQlMjBpbiUyMHRhYmxlfGVufDB8fDB8fHww",
      },
      text: "Excel from Beginner",
    },
    {
      id: "new_9",
      image: {
        uri: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvdXAlMjAlMjB3YXRjaGluZyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      },
      text: "Learn AngularJS",
    },
    {
      id: "new_10",
      image: {
        uri: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwJTIwd2F0Y2hpbmclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      },
      text: "Travel Around The World",
    },

   
  ];

  const newCardData = [
    {
      id: "13",
      image: {
        uri: "https://img.freepik.com/free-vector/winner-background-first-place-competition_91128-1587.jpg?size=626&ext=jpg",
      }, 
    },
   
  ];

  const additionalSpecialCardsData = [
    {
      id: "new_1",
      image: {
        uri: "https://images.unsplash.com/photo-1622151834677-70f982c9adef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      },
      text: "Learn Python",
    },
    {
      id: "new_2",
      image: {
        uri: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      },
      text: "Effect Management",
    },
    {
      id: "new_3",
      image: {
        uri: "https://plus.unsplash.com/premium_photo-1661265951476-f72c210b7e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhcnR8ZW58MHx8MHx8fDA%3D",
      },
      text: "Health And Fitness",
    },
    {
      id: "new_4",
      image: {
        uri: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      },
      text: "Active Listening You",
    },
    {
      id: "new_5",
      image: {
        uri: "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D",
      },
      text: "Design for Beginners",
    },
    {
      id: "new_6",
      image: {
        uri: "https://images.unsplash.com/photo-1603575448878-868a20723f5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      },
      text: "New Learning Page",
    },
    {
      id: "new_7",
      image: {
        uri: "https://plus.unsplash.com/premium_photo-1663045802820-d81fae9b1898?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D",
      },
      text: "Product Manger",
    },
    {
      id: "new_8",
      image: {
        uri: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fHww",
      },
      text: "Excel from Beginner",
    },
    {
      id: "new_9",
      image: {
        uri: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVuZ2luZWVyfGVufDB8fDB8fHww",
      },
      text: "Learn AngularJS",
    },
    {
      id: "new_10",
      image: {
        uri: "https://images.unsplash.com/photo-1581091224003-01e7c2e69f6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVuZ2luZWVyfGVufDB8fDB8fHww",
      },
      text: "Travel Around The World",
    },

    
  ];

  const customCardsData = [
    {
      id: "special_1",
      image: {
        uri: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
      text: "New Update Features",
    },
    {
      id: "special_2",
      image: {
        uri: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
      text: "New Learning Page",
    },
    {
      id: "special_3",
      image: {
        uri: "https://plus.unsplash.com/premium_photo-1681691911660-a40d4163ed9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVuZ2luZWVyfGVufDB8fDB8fHww",
      },
      text: "Learn Python",
    },
    {
      id: "special_4",
      image: {
        uri: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVuZ2luZWVyfGVufDB8fDB8fHww",
      },
      text: "Learn Linux",
    },
    {
      id: "special_5",
      image: {
        uri: "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVuZ2luZWVyfGVufDB8fDB8fHww",
      },
      text: "Product Manager",
    },
  ];
 return (
    <KeyboardAvoidingView
      style={styles.container}
    >
       <DrawerSceneWrapper> 
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
          <View style={styles.header}>
          <View style={{right:40,flexDirection: 'row', alignItems: 'center',marginTop:5 }}>
  <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 20 , marginTop:10}}>
  <AntDesign name="menu-fold" size={23} color="white" />
  </TouchableOpacity>
  <View style={{ marginLeft: 15, flexDirection: 'row', alignItems: 'center' }}>
  <Text>
    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white',marginTop:-5 }}>Hi Cameron Schofield</Text>
    <Text style={{ fontSize: 22, color: 'yellow' }}> 👋</Text>
  </Text>
  <TouchableOpacity onPress={handleEcommercePress} style={styles.iconContainer}>
  <MaterialIcons name="shopping-cart" size={25} color="white" />
  </TouchableOpacity>
  <TouchableOpacity onPress={handleNotificationPress} style={styles.iconContainer}>
    <Ionicons name="notifications" size={25} color="white" />
  </TouchableOpacity>
  </View>
</View>
<View style={{ marginLeft: 20, marginTop: 5 }}>
  <Text style={{ fontSize: 14, color: 'white' }}>Let's Start Learning!</Text>
</View>
<View style={styles.searchContainer}>

      <TextInput
        style={[
          styles.searchInput,
          {
            display: textInputVisible ? 'flex' : 'none',
          },
        ]}
        placeholder="What are you going to find?"
        placeholderTextColor="grey"
      >
        
      </TextInput>

    </View>
            </View>


            <ScrollView
              style={styles.scrollView}
              onScroll={handleScroll}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.featuredCoursesText}>Featured Courses</Text>
              <FlatList
                ref={flatListRef}
                horizontal
                data={data}
                renderItem={renderFeaturedCard}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                snapToInterval={410}
                decelerationRate={0.9}
              />

              <View style={styles.bottomTextContainer}>
                <Text style={styles.newestCoursesText}>Newest Courses</Text>
                <TouchableOpacity onPress={() => handleViewAllPress()}>
                  <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
              </View>
              {/* Additional FlatList for the 11 cards */}
              <FlatList
                horizontal
                data={additionalData}
                renderItem={renderAdditionalCard}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
              />

              {/* Special Cards Section */}
              <View style={styles.bottomTextContainer}>
                <Text style={styles.newestCoursesText}>Newest Bundles</Text>
                <TouchableOpacity onPress={() => handleViewAllPress()}>
                  <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                data={specialCardsData}
                renderItem={renderSpecialCard}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: 10, marginTop: 0 }}
              />

              <FlatList
                horizontal
                data={newCardData}
                renderItem={renderNewCard}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: 10, marginTop: 0 }}
              />

              {/* New 12 Cards Section */}
              <View style={styles.bottomTextContainer}>
                <Text style={styles.newestCoursesText}>Best Rated</Text>
                <TouchableOpacity onPress={() => handleViewAllPress()}>
                  <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
                {/* You can add a "View All" text for these cards if needed */}
              </View>
              <FlatList
                horizontal
                data={moreAdditionalData}
                renderItem={renderMoreAdditionalCard}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: 10, marginTop: 0 }}
              />

              {/* New 12 Cards Section */}
              <View style={styles.bottomTextContainer}>
                <Text style={styles.newestCoursesText}>Best Selling</Text>
                <TouchableOpacity onPress={() => handleViewAllPress()}>
                  <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
                {/* You can add a "View All" text for these cards if needed */}
              </View>
              <FlatList
                horizontal
                data={additionalSpecialCardsData}
                renderItem={renderAdditionalSpecialCard}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: 10, marginTop: 0 }}
              />

              <View style={styles.bottomTextContainer}>
                <Text style={styles.newestCoursesText}>Free Courses</Text>
                <TouchableOpacity onPress={() => handleViewAllPress()}>
                  <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
                {/* You can add a "View All" text for these cards if needed */}
              </View>
              <FlatList
                horizontal
                data={customCardsData}
                renderItem={renderCustomCardsData}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: 160, marginTop: 0 }}
              />
            </ScrollView>
          </View>
        </SafeAreaView>
       </DrawerSceneWrapper> 
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
     backgroundColor: "#fff",
      flex: 1, 
    },
 
  header: {
    backgroundColor:"#43D477",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 40,
    position: "relative",
  },
  searchContainer: {
    alignItems: "center",
  },
  searchInput: {
    width: 385,
    height: 60,
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 10,
    color: "black",
    textAlign: "left",
    marginTop: 15,
  },
  featuredCoursesText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "left",
    marginLeft: 15,
  },
  card: {
    width: 410,
    height: 212,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
    position: "relative",
    overflow: "hidden",
    marginLeft:12,
    
  },
  additionalCard: {
    width: 150,
    height: 120,
    backgroundColor: "transparent",
    marginHorizontal: 5,
    borderRadius: 24,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 55,
  },
  newestCoursesText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginLeft:10
  },
  viewAllText: {
    color: "grey",
    fontSize: 13,
    textAlign: "center",
    marginTop: 45,
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 11,
    color: "black",
    paddingHorizontal: 8,
    borderRadius: 10,
    fontWeight: "bold",
    marginTop: 5,
  },
  moreAdditionalCard: {
    width: 150,
    height: 120,
    backgroundColor: "transparent",
    marginHorizontal: 5,
    borderRadius: 24,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 55,
    // Add any additional styles as needed for the new cards
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
  },
  overlayText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    left: 20,
  },
  starContainer: {
    position: "absolute",
    bottom: 70,
    left: 20,
    flexDirection: "row",
  },
  starIcon: {
    fontSize: 15,
    color: "gold",
    marginRight: 2,
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
  textInCircleContainer: {
    position: "absolute",
    top: 0,
    left: 50,
    width: 50,
    height: 50,
    justifyContent: "space-between", // Adjust as needed
    alignItems: "center",
    flexDirection: "row",
  },
  textInCircle: {
    color: "white",
    fontSize: 12,
  },
  
  whiteBorder: {
    position: "absolute",
    top: -36,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 2,
    zIndex: 1,
  },
  bottomBox: {
    position: "absolute",
    width: 120,
    height: 5,
    backgroundColor: "#50c878",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#f5f5f5",
    bottom: 83, // Adjust the bottom position as needed
  },
 
    iconContainer: {
        padding:8,
        borderRadius: 10, // Adjust the border radius as needed
        backgroundColor: '#36AA5F',
        opacity: 0.9,
        marginRight: 15,
        left:5
      },
      priceContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'white', // Set your desired green color
        borderRadius: 10,
        padding: 5,
        margin: 10,
      },
      priceText: {
        color: 'lightgreen', // Set your desired text color
        fontWeight: 'bold',
      },
      
 
});
export default HomeScreen;
