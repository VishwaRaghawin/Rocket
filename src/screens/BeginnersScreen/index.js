
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground,title,SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AntDesign } from '@expo/vector-icons';
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
import Collapsible from 'react-native-collapsible';

 const handleAskQuestion = () => {
    // Implement the logic for handling the "Ask a New Question" action here
    console.log('Ask a new question button pressed');
  };

  
    
 
const BeginnersScreen = ({ navigation }) => {
  const { openDrawer } = navigation;

  const FirstRoute = () => {
    const [isCollapsed, setIsCollapsed] = useState(true); // Define the state here
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 21,backgroundColor:'white',width:'90%' ,borderRadius:12,height:90}}>
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <Image
              source={isCollapsed ? require('../../../assets/image/hjk.png') : require('../../../assets/image/hjk.png')}
              style={{ width: 70, height: 70, marginLeft: 20,borderRadius:14 }}
            />
            </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 18,fontWeight:'bold' }}>Essentials</Text>
        </View>
        <Collapsible collapsed={isCollapsed}>
          <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, marginTop: 10 ,width:'90%',marginLeft:21}}>
            <TouchableOpacity onPress={() => navigation.navigate('beginner')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/890.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 17,fontWeight:'bold' }}>Welcome!!</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('beginner')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/890.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 17,fontWeight:'bold' }}>CSS Essentials</Text>
              </View>
            </TouchableOpacity>
            {/* Add more images with TouchableOpacity for touchable behavior */}
            <TouchableOpacity onPress={() => navigation.navigate('beginner')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/890.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 17,fontWeight:'bold' }}>Intermediate CSS</Text>
              </View>
            </TouchableOpacity>
           
           
          </View>
        </Collapsible>
      </View>
    </SafeAreaView>
  );
};

const SecondRoute = () => (
  <View style={{flex:1,backgroundColor:'white'}}>
  <View style={styles.content}>
    <Image
      source={require('../../../assets/image/12.png')}
      style={styles.image}
    />
    <Text style={{fontSize:24,fontWeight:'bold'}}>No Noticeboards!</Text>
    <Text style={{fontSize:18}}>There is no noticeboards for this course!.</Text>
  </View>

</View>
);


const ThirdRoute = () => (
  
  <View style={{flex:1,backgroundColor:'white'}}>
  <View style={styles.content}>
    <Image
      source={require('../../../assets/image/asd.jpg')}
      style={{width:'50%',height:150}}
    />
    <Text style={{fontSize:24,fontWeight:'bold'}}>No Questions</Text>
    <Text style={{fontSize:18}}>Ask a new question communicate with other students...</Text>
  </View>
  <View style={styles.bottomHeader}>
    <TouchableOpacity style={styles.askButton} onPress={handleAskQuestion}>
      <Text style={styles.askButtonText}>Ask a New Question</Text>
    </TouchableOpacity>
  </View>
</View>

);







  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Content' },
    { key: 'second', title: 'Notices' },
    { key: 'third', title: 'Forums' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
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
          <Text style={{ fontSize: 22, color: "black", marginTop: 42,textAlign:'center',marginLeft:70 }}>Web Design for Beginners</Text>
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
    width: 100,
    height: 80,
    borderRadius: 20,
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
    marginTop:30
   
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
    marginTop:5
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

export default BeginnersScreen;

