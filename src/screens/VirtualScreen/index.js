

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FontAwesome5 } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';
import { Card, Title, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 


const handleAskQuestion = () => {
  // Implement the logic for handling the "Ask a New Question" action here
  console.log('Ask a new question button pressed');
};

    
 
const VirtualScreen = () => {
  const navigation = useNavigation();

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
          <Text style={{ marginLeft: 10, fontSize: 15,fontWeight:'bold' }}>Introduction</Text>
        </View>
        <Collapsible collapsed={isCollapsed}>
          <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, marginTop: 10 ,width:'90%',marginLeft:21}}>
            <TouchableOpacity onPress={() => navigation.navigate('team')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/123.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 15,fontWeight:'bold' }}>Introduction</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('team')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/123.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 15,fontWeight:'bold' }}>Principles of Behavior Change</Text>
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
          <Text style={{ marginLeft: 10, fontSize: 15,fontWeight:'bold' }}>Tactics of Influence & Persuasion</Text>
        </View>
        <Collapsible collapsed={isCollapsed}>
          <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, marginTop: 10 ,width:'90%',marginLeft:21}}>
           
            <TouchableOpacity onPress={() => navigation.navigate('team')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/123.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 15,fontWeight:'bold' }}>Before the Meeting</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('team')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/123.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 15,fontWeight:'bold' }}>After the Meeting</Text>
              </View>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => navigation.navigate('team')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={require('../../../assets/image/123.png')}
                  style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 15,fontWeight:'bold' }}>During the Meeting</Text>
              </View>
            </TouchableOpacity>

           
          </View>
        </Collapsible>
      </View>
    </SafeAreaView>
  );
};




const SecondRoute = () => (
  <>
   <TouchableOpacity  onPress={() =>  navigation.navigate("waiting")}>
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
              <Title style={styles.cardTitle}>First Quiz</Title>
              <View style={styles.rowContainer}>
                <Text style={styles.dateText}>5 Questions | 20 Minutes</Text>
              </View>
              
            </View>
          </View>
        </Card>
      </TouchableOpacity>

</>
);
             






const FourthRoute = () => (
  <View style={{flex:1,backgroundColor:'white'}}>
  <View style={styles.content}>
    <Image
      source={require('../../../assets/image/12.png')}
      style={styles.image}
    />
    <Text style={{fontSize:20,fontWeight:'bold'}}>No Noticeboards!</Text>
    <Text style={{fontSize:15}}>There is no noticeboards for this course!.</Text>
  </View>

</View>
);

const  FifthRoute = () => (
  <View style={{flex:1,backgroundColor:'white'}}>
  <View style={styles.content}>
    <Image
      source={require('../../../assets/image/asd.jpg')}
      style={{width:'50%',height:150}}
    />
    <Text style={{fontSize:20,fontWeight:'bold'}}>No Questions</Text>
    <Text style={{fontSize:15}}>Ask a new question communicate with other students...</Text>
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
    { key: 'second', title: 'Quizzes' },
   
    { key: 'fourth', title: 'Notices' },
    { key: 'fifth', title: 'Forums' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    fourth: FourthRoute,
    fifth: FifthRoute

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
    
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
      
      <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.back}
  >
    <FontAwesome5 name="chevron-left" size={20} color='black' />
  </TouchableOpacity>

  <View style={styles.header}>
    <Text style={styles.headerText}> How to Manage Your Virtual Team</Text>
  </View>
</View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
        />
      </View>
     
        </SafeAreaView>
      
  );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor:'#F2F2F2'// Set the background color here
      },
  tabBar: {
    backgroundColor: '#F2F2F2',
    marginTop: 0,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 17,
    color: 'black', 
    marginTop:8,
    marginRight:70
  },
  back: {
    marginLeft:20,
     padding: 12,
     borderRadius: 10,
     color: 'black',
     width:'10%',
     marginTop:11
    
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
    fontSize:13
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
    width: 75,
    height: 75,
    borderRadius:10,
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
    fontSize: 13,
    color: 'gray',
    marginRight: 15,
    marginTop:8
   
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
    fontSize: 16,
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
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
};

export default  VirtualScreen ;