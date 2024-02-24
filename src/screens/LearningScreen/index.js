

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView,SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Card, Title, } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
  import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
  import { FontAwesome } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';
 const handleAskQuestion = () => {
    // Implement the logic for handling the "Ask a New Question" action here
    console.log('Ask a new question button pressed');
  };

  
    
const LearningScreen= ({ navigation }) => {
  const { openDrawer } = navigation;

  const FirstRoute = () => {
    const [isCollapsed, setIsCollapsed] = useState(true); // Define the state here
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
         <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 21,backgroundColor:'white',width:'90%' ,borderRadius:12,height:90}}>
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <Image
              source={isCollapsed ? require('../../../assets/image/hjk.png') : require('../../../assets/image/hjk.png')}
              style={{ width: 70, height: 70, marginLeft: 20,borderRadius:14 }}
            />
            </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 18,fontWeight:'bold' }}>SCORM Files</Text>
         
        </View>
        <Collapsible collapsed={isCollapsed}>
          <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, marginTop: 10 ,width:'90%',marginLeft:21}}>
            <TouchableOpacity onPress={() => navigation.navigate('ring')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/1.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 17,fontWeight:'bold' }}>iSpring SCORM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('app')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/1.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 17,fontWeight:'bold' }}>Adoble Captivate SCORM</Text>
              </View>
            </TouchableOpacity>
            {/* Add more images with TouchableOpacity for touchable behavior */}
            <TouchableOpacity onPress={() => navigation.navigate('app')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/1.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 17,fontWeight:'bold' }}> custom SCORM</Text>
              </View>
            </TouchableOpacity>
           
           
          </View>
        </Collapsible>



        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 21,backgroundColor:'white',width:'90%' ,borderRadius:12,height:90}}>
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <Image
              source={isCollapsed ? require('../../../assets/image/hjk.png') : require('../../../assets/image/hjk.png')}
              style={{ width: 70, height: 70, marginLeft: 20,borderRadius:14 }}
            />
            </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 18,fontWeight:'bold' }}>Different File Types</Text>
        </View>
        <Collapsible collapsed={isCollapsed}>
          <View style={{ marginBottom:20,padding: 20, backgroundColor: 'white', borderRadius: 10, marginTop: 10 ,width:'90%',marginLeft:21}}>
            <TouchableOpacity onPress={() => navigation.navigate('ring')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/1.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 17,fontWeight:'bold' }}>Update Source</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ring')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/1.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 17,fontWeight:'bold' }}>Google Drive Source</Text>
              </View>
            </TouchableOpacity>
            {/* Add more images with TouchableOpacity for touchable behavior */}
            <TouchableOpacity onPress={() => navigation.navigate('ring')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/1.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 17,fontWeight:'bold' }}>Direct Link</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('ring')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/67.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 17,fontWeight:'bold' }}>Entrance Quiz</Text>
              </View>
            </TouchableOpacity>
            </TouchableOpacity>
           
           
          </View>
        </Collapsible>

       

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 21,backgroundColor:'white',width:'90%' ,borderRadius:12,height:90}}>
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <Image
              source={isCollapsed ? require('../../../assets/image/hjk.png') : require('../../../assets/image/hjk.png')}
              style={{ width: 70, height: 70, marginLeft: 20,borderRadius:14 }}
            />
            </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 18,fontWeight:'bold' }}>Assignments</Text>
        </View>
        <Collapsible collapsed={isCollapsed}>
          <View style={{ marginBottom:20,padding: 20, backgroundColor: 'white', borderRadius: 10, marginTop: 10 ,width:'90%',marginLeft:21}}>
            <TouchableOpacity onPress={() => navigation.navigate('assignment')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/8.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 17,fontWeight:'bold' }}>Mid-term HomeWork</Text>
              </View>
            </TouchableOpacity>
            
          </View>
        </Collapsible>
      </View>


      </ScrollView>
    </SafeAreaView>
  );
};

const SecondRoute = () => (
  <>
   <TouchableOpacity  onPress={() =>  navigation.navigate("entrance")}>
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Image
                source={{
                  uri: 'https://cdn.shopify.com/app-store/listing_images/6e52ba168c13e73c5b10efb941921014/icon/CIiiw9Pl4e8CEAE=.png',
                }}
                resizeMode="cover"
                style={styles.circularImage}
              />
            </View>
            <View style={styles.rightContent}>
              <Title style={styles.cardTitle}>Entrance Quiz</Title>
              <View style={styles.rowContainer}>
                <Text style={styles.dateText}>6 Question | 15 Mintues</Text>
              </View>
              
            </View>
          </View>
        </Card>
      </TouchableOpacity>

</>
);



const ThirdRoute = () => (
  <>
    <TouchableOpacity>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWzmkjiYJzuBiD83WQ_BZVtgUFqZ2OP1LuLXGf-Ubpf6V0WgB',
              }}
              resizeMode="cover"
              style={styles.circularImage}
            />
          </View>
          <View style={styles.rightContent}>
            <Title style={styles.cardTitle}>Import Notice</Title>
            <View style={styles.rowContainer}>
            <FontAwesome name="calendar" size={12} color="grey" style={{marginTop:15}}/>
              <Text style={styles.dateText}> 25 Jul 2023 | 14:35</Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>

    <TouchableOpacity>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
           
            <Image
              source={{
                uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkHBFbNQX-wxzCz6ZLx8AnLSJ0sU6Pn5dVJHONMDeDUnMfcZ2c',
              }}
              resizeMode="cover"
              style={styles.circularImage}
            />
          </View>
          <View style={styles.rightContent}>
            <Title style={styles.cardTitle}>Quiz Date Changed</Title>
            <View style={styles.rowContainer}>
            <FontAwesome name="calendar" size={12} color="grey" style={{marginTop:15}}/>
              <Text style={styles.dateText}> 25 Jul 2023 | 14:35</Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>

    <TouchableOpacity>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{
                uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-83uEL6KnlgRjwGiQ7gefhwGxrYlz2QJ_q1d1-NPzwq6jgZBu',
              }}
              resizeMode="cover"
              style={styles.circularImage}
            />
          </View>
          <View style={styles.rightContent}>
            <Title style={styles.cardTitle}>Update Final Chapter</Title>
            <View style={styles.rowContainer}>
            <FontAwesome name="calendar" size={12} color="grey" style={{marginTop:15}}/>
              <Text style={styles.dateText}> 25 Jul 2023 | 14:35</Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>

    <TouchableOpacity>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{
                uri: 'https://cdn.shopify.com/app-store/listing_images/6e52ba168c13e73c5b10efb941921014/icon/CIiiw9Pl4e8CEAE=.png',
              }}
              resizeMode="cover"
              style={styles.circularImage}
            />
          </View>
          <View style={styles.rightContent}>
            <Title style={styles.cardTitle}>Top Students</Title>
            <View style={styles.rowContainer}>
            <FontAwesome name="calendar" size={12} color="grey" style={{marginTop:15}}/>
              <Text style={styles.dateText}> 25 Jul 2023 | 14:35</Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  </>
);
const FourthRoute = () => (
  
  <>
    <View style={{backgroundColor:'white',flex:1}}>
  <View style={styles.content}>
    <Image
      source={require('../../../assets/image/asd.jpg')}
      style={styles.image}
    />
    <Text style={{fontSize:24,fontWeight:'bold'}}>Cart is Empty</Text>
    <Text style={styles.text}>Add your favorite courses to cart.</Text>
  </View>
  <View style={styles.bottomHeader}>
    <TouchableOpacity style={styles.askButton} onPress={handleAskQuestion}>
      <Text style={styles.askButtonText}>Ask a New Question</Text>
    </TouchableOpacity>
  </View>
  </View>
</>

);






  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Content' },
    { key: 'second', title: 'Quizzes' },
    { key: 'third', title: 'Notices' },
    { key: 'fourth', title: 'Forums' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth:FourthRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'black' }}
      style={styles.tabBar}
      labelStyle={styles.tabLabel}
    />
  );

  return (
     <DrawerSceneWrapper>
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>
          <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 20, marginTop: 50 }}>
            <AntDesign name="menu-fold" size={23} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, color: "black", marginTop: 42,textAlign:'center',marginLeft:70 }}>New In-App Live System</Text>
        </View>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
        />
      </View>
     
        </SafeAreaView>
      </DrawerSceneWrapper>
  );
};

const styles = {
    container: {
        flex: 1,
        // Set the background color here
      },
  tabBar: {
    backgroundColor: 'white',
    marginTop: 0,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#43D477',
    borderRadius: 16,
    padding: 11,
    alignItems: 'center',
  },
  tabLabel: {
    color: 'black',
  },
  card: {
    margin: 12,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white'
  },
  cardContent: {
    flexDirection: 'row',
  },
  leftContent: {
    padding: 16,
  },
  circularImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -5
  },
  iconButton: {
    marginRight: -6,
    marginLeft: -9,
   
   
  },
 
  dateText: {
    fontSize: 14,
    color: 'gray',
    marginRight: 15,
    marginTop:15
   
  },
  valueText: {
    fontSize: 12,
    color: '#43D477',
   
    marginLeft:2
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContent: {
    flex: 1,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:10
  },
  cardText: {
    fontSize: 16,
    color:'grey',
    marginTop:1
  },
  openText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFD699',
    borderRadius: 12,
    padding: 3,
    margin: 16,
    height:20,
    width:45,
  alignItems:'center'
  },
  openTextContent: {
    color: 'white',
    fontSize: 10,
  },
  bottomHeader: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  askButton: {
    backgroundColor: '#43D477',
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius:15,
  },
  askButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
};

export default LearningScreen;
