import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native'; 
import { Platform, View, StyleSheet,TouchableOpacity,Text,ScrollView ,KeyboardAvoidingView ,Image,  TextInput } from "react-native";
import MyCoursesScreen from "../screens/MyCoursesScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import ProvidersScreen from "../screens/ProvidersScreen";
import BlogScreen from "../screens/BlogScreen";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/homeScreen";
import MeetingScreen from "../screens/MeetingScreen";
import AssignmentScreen from "../screens/AssignmentScreen";
import SubscriptionScreen from "../screens/SubscriptionScreen";
import CertificateScreen from "../screens/CertificateScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import QuizzesScreen from "../screens/QuizzesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import SupportScreen from "../screens/SupportScreen";
import FinanicalScreen from "../screens/FinanicalScreen";
import DashboardScreen from "../screens/DashboardScreen";
import SettingScreen from "../screens/SettingScreen";
import DrawerSceneWrapper from "../components/DrawerSceneWrapper";


const HomeTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
     <DrawerSceneWrapper>
    <Tab.Navigator
      initialRouteName="Categories"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: "#43D477",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Categories",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore1" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Providers"
        component={ProvidersScreen}
        options={({ route, navigation }) => ({
          headerShown: false,
          tabBarLabel: "Providers",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
          tabBarVisible: navigation.isFocused(), // Hide the label if not focused
        })}
      />
 <Tab.Screen
        name="HomeTabs"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <View
              style={[styles.homeTabButton, { backgroundColor: "#8CF7B3" }]}
            >
              <Foundation
                name="home"
                color={color}
                size={size}
                style={styles.homeIcon}
              />
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Blog",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen 
        name="Courses"
        component={MyCoursesScreen}
      
        options={{
          headerShown: false,
          tabBarLabel: "My Courses",
        
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="video-camera" color={color} size={size} />
          ),
        }}
      />  
    </Tab.Navigator>
     </DrawerSceneWrapper> 
  );
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const drawerIcon = ({ focused, size }, name) => {
    return (
     
      <Icon
        name={name}
        size={size}
        color={focused ? Colors.active : Colors.inactive}
      />
   
    );
  };

  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.transparent,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerHideStatusBarOnOpen: Platform.OS === "ios" ? true : false,
        overlayColor: Colors.transparent,
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: "65%",
        },
        sceneContainerStyle: {
          backgroundColor: Colors.bg,
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "account-settings"),
        }}
      />



      <Drawer.Screen
        name="Home"
        component={HomeTabs}
        options={{
          drawerIcon: (options) => drawerIcon(options, "home-outline"),
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "chart-line"),
        }}
      />
      <Drawer.Screen
        name="Courses"
        component={MyCoursesScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "video"),
        }}
      />
      <Drawer.Screen
        name="Meeting"
        component={MeetingScreen}
        options={{
          drawerIcon: (options) =>
            drawerIcon(options, "calendar-clock-outline"),
        }}
      />
      <Drawer.Screen
        name="Assignments"
        component={AssignmentScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "file-document"),
        }}
      />
      <Drawer.Screen
        name="Quizzes"
        component={QuizzesScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "sticker-check"),
        }}
      />
      <Drawer.Screen
        name="Certificates"
        component={CertificateScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "certificate"),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "heart"),
        }}
      />
      <Drawer.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "comment-processing"),
        }}
      />
      <Drawer.Screen
        name="Finanical"
        component={FinanicalScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "wallet-plus"),
        }}
      />
      <Drawer.Screen
        name="Subscription"
        component={SubscriptionScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "file-download-outline"),
        }}
      />
      <Drawer.Screen
        name="Supports"
        component={SupportScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "marker-check"),
        }}
      />
     <Drawer.Screen name="Logout"  options={{
          drawerIcon: (options) => drawerIcon(options, "logout"),
        }}>
        {() => (
          
          <ScrollView contentContainerStyle={{ flexGrow: 1,backgroundColor:'#F2F2F2' }} keyboardShouldPersistTaps='handled'>
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
        {/* First text with emoji */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10,marginTop: 0, }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', marginRight: 5 }}>Welcome back!</Text>
          <Text style={{ fontSize: 25, marginRight: 150 }}>✌️</Text>
        </View>
        <Text style={{ fontSize: 14, marginRight: 110, marginTop: -10 }}>Login to your account and enjoy learning...</Text>

        {/* Two small cards */}
        <View style={{ width: '100%', alignItems: 'center', marginBottom: 10, marginTop: 80 }}>
          <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, borderRadius: 15 }}>
              <Image source={require('../../assets/image/vis.png')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, borderRadius: 15 }}>
              <Image source={require('../../assets/image/ioi.jpg')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Text inputs */}
        <View style={{ width: '90%', marginBottom: 10, marginTop: 70 }}>
          <TextInput placeholder="Email" style={{ padding: 15, borderRadius: 16, backgroundColor: 'white' }} />
          <TextInput placeholder="Password" secureTextEntry style={{ padding: 15, borderRadius: 16, marginTop: 10, color: 'grey', backgroundColor: 'white' }} />
        </View>

        {/* Login button */}
        <TouchableOpacity style={{ marginTop: 20, width: '90%', height: 60, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 18, marginBottom: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Login</Text>
        </TouchableOpacity>

        {/* Content */}
        <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 15, color: 'grey' }}>By using our services, you agree to our Terms & Policies</Text>

        {/* Don't have an account? */}
        <View style={{ flexDirection: 'row', marginTop: 150 }}>
          <Text style={{ fontSize: 16 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('sign')}>
            <Text style={{ color: 'grey', fontSize: 16 }}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Forgot password */}
        <TouchableOpacity onPress={() => navigation.navigate('for')} style={{ marginTop: 20 }}>
          <Text style={{ color: 'grey', fontWeight: '400', fontSize: 16 }}>Forgot password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
        )}
     </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const Colors = {
  bg: "#50c878",
  active: "#fff",
  inactive: "#eee",
  transparent: "transparent",
};

const styles = StyleSheet.create({
  homeTabButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    transform: [{ rotate: "45deg" }],
    justifyContent: "center",
    alignItems: "center",
    top: -20,
  },
  homeIcon: {
    color: "white",
    transform: [{ rotate: "-45deg" }],
  },

});