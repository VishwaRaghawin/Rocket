import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
ScrollView,
TextInput,
 

 } from "react-native";
 import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from "expo-image-picker";
import {Feather,AntDesign, FontAwesome } from "@expo/vector-icons";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";




const SettingScreen = ({navigation}) => {
  const { openDrawer } = navigation;

  const [names] = useState(['Email', 'Name', 'Phone Number', 'Language']);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedTimeZone, setSelectedTimeZone] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const timeZones = ['GMT', 'EST', 'CST', 'PST'];
  const provinces = ['Ontario', 'Quebec', 'British Columbia', 'Alberta'];
  const cities = ['Toronto', 'Vancouver', 'Montreal', 'Calgary'];
  const districts = ['Downtown', 'East Side', 'West Side', 'Uptown'];
  const countries = ['USA', 'Canada', 'UK', 'Australia'];
  const banks = [
    'JPMorgan Chase Bank',
    'Bank of America',
    'Industrial and Commercial Bank of China Limited',
    'Agricultural Bank of China',
    'Wells Fargo Bank',
    'Bank of China',
    'China Construction Bank',
    'HSBC Bank',
    'Morgan Stanley Bank',
    'Royal Bank of Canada'
  ];
  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Russian',
    'Portuguese'
  ];


  const GeneralTab = () => {
    
  
    return (

     
      <View style={styles.container}>
       
      <ScrollView style={styles.scrollView } >

     
      <Text style={{marginLeft:25,marginBottom:5,marginTop:30,color:"grey"}}>Current Password</Text>
        <TextInput
          style={{ width: '90%',
          height: 55,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 15,
          marginBottom: 40,
          paddingHorizontal: 10,
          marginLeft:20}}
          placeholder=""
        />
      
      
        <Text style={{marginLeft:25,marginBottom:5,color:"grey"}}>New Password</Text>
        <TextInput
          style={{ width: '90%',
          height: 55,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 15,
          marginBottom: 40,
          paddingHorizontal: 10,
          marginLeft:20}}
          placeholder=""
          secureTextEntry={true}
        />
     
      
        <Text style={{marginLeft:25,marginBottom:5,color:"grey"}}>Retype New Password</Text>
        <TextInput
          style={{ width: '90%',
          height: 55,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 15,
          marginBottom: 40,
          paddingHorizontal: 10,
          marginLeft:20}}
          placeholder=""
          secureTextEntry={true}
        />

<Text style={{marginLeft:30,marginBottom:5,color:"grey"}}>Language</Text>
 <View style={{  borderRadius: 15,
    marginBottom: 30,
    paddingHorizontal: 10,
    width:'90%',
    height:55,
    marginLeft:20,
    borderColor: 'gray',
    borderWidth: 1,}}>
<Picker
      selectedValue={selectedLanguage}
      style={styles.picker}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
    >
      <Picker.Item label="Select Language" value="" />
      {languages.map((language, index) => (
        <Picker.Item key={index} label={language} value={language} />
      ))}
    </Picker>
    </View>
   
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
     
      </View>
     
    );
  };
  
  const SecurityTab = () => {
     return(
    <View style={styles.tabContent}>
     
    
        <Text style={{marginRight:230,marginBottom:5,marginTop:30,color:"grey"}}>Current Password</Text>
        <TextInput
          style={styles.input}
          placeholder=""
        />
      
      
        <Text style={{marginRight:240,marginBottom:5,color:"grey"}}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          secureTextEntry={true}
        />
     
      
        <Text style={{marginRight:190,marginBottom:5,color:"grey"}}>Retype New Password:</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          secureTextEntry={true}
        />
      
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={{ backgroundColor: 'lightgreen',
    paddingHorizontal: 160,
    paddingVertical: 25,
    borderRadius: 15,marginTop:0}}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

    </View>
 
    );
  }
  
  const FinanicalTab = () => (
    <>
    <ScrollView>
    <View style={{ flexDirection: 'row', // Align children horizontally
    alignItems: 'center', // Vertically center the content
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#000',  shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}>
    <View style={{   flexDirection: 'row', // Align children horizontally
    alignItems: 'center', // Vertically center the content
    marginRight: 10,}}>
      <Image
        style={{width: 50,
            height: 50,
            borderRadius: 25, // Half of the width and height to make it circular
            marginRight: 5,}}
        source={require('../../../assets/image/olp.png')} // Provide your image path here
      />
      {/* You can add more Image components here for additional circular images */}
    </View>
    <View style={{ flex: 1,}}>
      <Text style={{ fontSize: 15,
    fontWeight: 'bold',}}>Finanical Approval</Text>
      <Text style={{  fontSize: 12,
    color: '#888',}}>Your finanical information ae not approved!</Text>
    </View>
  </View>

  
 
  <Text style={{marginLeft:25,marginBottom:5,color:"grey"}}>Account Type</Text>
  <View style={{  borderRadius: 15,
    marginBottom: 30,
    paddingHorizontal: 10,
    width:'90%',
    height:55,
    marginLeft:20,
    borderColor: 'gray',
    borderWidth: 1,}}>
 <Picker
  selectedValue={selectedBank}
  style={styles.picker}
  onValueChange={(itemValue, itemIndex) => setSelectedBank(itemValue)}
>
  <Picker.Item label="Select Bank" value="" />
  {banks.map((bank, index) => (
    <Picker.Item key={index} label={bank} value={bank} />
  ))}
</Picker>

</View>

   
      
        <Text style={{marginLeft:30,marginBottom:5,color:"grey"}}>IBAN</Text>
        <TextInput
         style={{width: '90%',
         height: 55,
         borderColor: 'gray',
         borderWidth: 1,
         borderRadius: 15,
         marginBottom: 30,
         paddingHorizontal: 10,
         marginLeft:20,
        color:'white'}}
          placeholder=""
          secureTextEntry={true}
        />
     
      
        <Text style={{marginLeft:30,marginBottom:5,color:"grey"}}>Account ID</Text>
        <TextInput
          style={{width: '90%',
          height: 55,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 15,
          marginBottom: 30,
          paddingHorizontal: 10,
          marginLeft:20}}
          placeholder=""
          secureTextEntry={true}
        />
      
      <Text style={{marginLeft:30,marginBottom:5,color:"grey"}}>Identify Scan</Text>
<View style={{ flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center', marginVertical: 20,}}>
      <View style={{ backgroundColor: 'lightgreen',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: "40%",
    height: 55,}}>
        <View style={{ flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',}}>
          <TouchableOpacity onPress={pickImage}>
            <FontAwesome name="camera" size={24} color="white" />
          </TouchableOpacity>
         
        </View>
      </View>
      <View style={{ backgroundColor: 'lightgreen',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: "40%",
    height: 55,}}>
       
        <View style={{flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',}}>
         
          <TouchableOpacity onPress={() => console.log('Upload icon pressed')}>
            <FontAwesome name="upload" size={24} color="white" />
          </TouchableOpacity>
        </View>
        </View>


        
      </View>

      <Text style={{marginLeft:30,color:"grey"}}>Certificates & Documents</Text>
      <View style={{ backgroundColor: 'lightgreen',
    padding: 15,
    borderRadius: 15,
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    height: 55,
    marginLeft:20,marginBottom:30}}>
        <View style={{ flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',}}>
          <TouchableOpacity onPress={() => console.log('Camera icon pressed')}>
            <FontAwesome name="upload" size={24} color="white" />
          </TouchableOpacity>
         
        </View>
      </View>

      <Text style={{marginLeft:30,marginBottom:5,color:"grey",marginTop:5}}>Address</Text>
        <TextInput
         style={{width: '90%',
         height: 55,
         borderColor: 'gray',
         borderWidth: 1,
         borderRadius: 15,
         marginBottom: 30,
         paddingHorizontal: 10,
         marginLeft:20,
        color:'white'}}
          placeholder="C-13,3rd Cross,kannan Nagar,Thanjavur"
          secureTextEntry={true}
        />
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
  </>
  );
  
  const LocalizationTab = () => (
    <>

<ScrollView>
    <View style={styles.tabContent}>
    <Text style={{marginRight:260,marginBottom:5,color:"grey",marginTop:5}}>Time Zone</Text>
    <View style={styles.pickerContainer}>
   <Picker
        selectedValue={selectedTimeZone}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedTimeZone(itemValue)}
      >
        <Picker.Item label="Select Time Zone" value="" />
        {timeZones.map((zone, index) => (
          <Picker.Item key={index} label={zone} value={zone} />
        ))}
      </Picker>
      </View>
      <Text style={{marginRight:270,marginBottom:5,color:"grey",marginTop:5}}>Country</Text>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedCountry}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedCountry(itemValue)}
      >
        <Picker.Item label="Select Country" value="" />
        {countries.map((country, index) => (
          <Picker.Item key={index} label={country} value={country} />
        ))}
      </Picker>
      </View>
      <Text style={{marginRight:270,marginBottom:5,color:"grey",marginTop:5}}>Province</Text>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedProvince}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedProvince(itemValue)}
      >
        <Picker.Item label="Select Province" value="" />
        {provinces.map((province, index) => (
          <Picker.Item key={index} label={province} value={province} />
        ))}
      </Picker>
      </View>
      <Text style={{marginRight:280,marginBottom:5,color:"grey",marginTop:5}}> City</Text>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedCity}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
      >
        <Picker.Item label="Select City" value="" />
        {cities.map((city, index) => (
          <Picker.Item key={index} label={city} value={city} />
        ))}
      </Picker>
      </View>
      <Text style={{marginRight:270,marginBottom:5,color:"grey",marginTop:5}}> District</Text>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedDistrict}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedDistrict(itemValue)}
      >
        <Picker.Item label="Select District" value="" />
        {districts.map((district, index) => (
          <Picker.Item key={index} label={district} value={district} />
        ))}
      </Picker>
      </View>
     
      <Text style={{marginRight:260,marginBottom:5,color:"grey",marginTop:5}}>Address</Text>
        <TextInput
         style={{width: '90%',
         height: 55,
         borderColor: 'gray',
         borderWidth: 1,
         borderRadius: 15,
         marginBottom: 30,
         paddingHorizontal: 10,
         marginLeft:10,
        color:'white'}}
          placeholder="C-13,3rd Cross,kannan Nagar,Thanjavur"
          secureTextEntry={true}
        />
    </View>

    </ScrollView>
<View style={styles.bottomContainer}>
<TouchableOpacity style={styles.saveButton}>
  <Text style={styles.saveButtonText}>Save</Text>
</TouchableOpacity>
</View>
</>
  );
  
  
  
  
  
  
  const CircleImage = () => (
    <View style={styles.container}>
    
    </View>
  );



  const [image, setImage] = useState(null);
  // for pick the image
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };





  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'general', title: 'General' },
    { key: 'security', title: 'Security' },
    { key: 'finanical', title: 'Finanical' },
    { key: 'localization', title: 'Localization' },
    
  
  ]);

  const renderScene = SceneMap({
    general: GeneralTab, 
    security: SecurityTab,
    finanical: FinanicalTab,
    localization: LocalizationTab,
    
  });

  const renderTabBar = (props) => (
    <React.Fragment>
      <CircleImage />
      <TabBar
        {...props}
        style={styles.tabBar}
        indicatorStyle={styles.indicator}
        labelStyle={styles.label}
      />
    </React.Fragment>
  );

 
  return (
    <View style={styles.container}>
     
     <DrawerSceneWrapper>
   
     <View style={{ flexDirection: 'row', alignItems: 'center',backgroundColor:'white' }}>
       <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 20, marginTop: 35 }}>
         <AntDesign name="menu-fold" size={23} color="black" />
       </TouchableOpacity>
       <Text style={{ fontSize: 22, color: "black" ,marginTop:35 ,  marginLeft:110}}>Settings</Text>
     </View>
      <View style={styles.profileContainer}>
        <Pressable onPress={pickImage}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
          ) : (
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
              }}
              style={{  borderWidth: 6,
                borderColor: 'lightgreen',
                overflow: 'hidden',width: 130, height: 130, borderRadius: 100 ,marginTop:20}}
            />
          )}
        </Pressable>
        <Pressable style={styles.icons} onPress={pickImage}>
          <Feather
            name="settings"
            size={16}
            color='black'
            style={{
              elevation: 1,
              marginTop: -25,
              backgroundColor: 'white',
              padding: 6,
              borderRadius: 100,
            }}
          />
        </Pressable>
        <Text style={{fontSize:22,fontWeight:'bold',marginTop:20}}>Cameron Schofield</Text>
        <Text>user</Text>
      </View>


     




<TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
     </DrawerSceneWrapper>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc', // Set background color to white
  },
 
 
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
 
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#FAFAFA',
    marginTop:-380,
  },
  indicator: {
    backgroundColor: 'black',
  },
  label: {
    fontSize: 10,
    color: 'black',
  },
 
  



 
  scrollView: {
    flex: 1,
    width: '100%',
  },
  textInputContainer: {
    flexDirection: 'column', // Change to column
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textInput: {
    width: '100%', // Adjusted width
    height: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10, // Added padding horizontal
    marginBottom: 10,
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 0,
  },
  languageItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  bottomContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: 'lightgreen',
    paddingHorizontal: 160,
    paddingVertical: 25,
    borderRadius: 15,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'columns',
    alignItems: 'left',
    marginBottom: 10, // Add margin bottom for spacing between rows
  },
  inputLabel: {
    marginRight: 10, // Add some space between label and input
    marginBottom: 10,
    color:'grey'
     // Add some styling to label
  },




  
 
  input: {
    width: '90%',
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginLeft:0
  },


  pickerContainer: {
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    width:'90%',
    height:55,
    marginLeft:5,
    borderColor: 'gray',
    borderWidth: 1,
   
  },

 
});

export default SettingScreen;
