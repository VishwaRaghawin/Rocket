
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground,title,SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Card, Title, } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
  import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
import { FontAwesome6 } from '@expo/vector-icons';




const SupportScreen = ({ navigation }) => { 
  const { openDrawer } = navigation;






  const handleAddButtonPress = () => {
    console.log("Add button pressed!");
    // Add your logic for the add button action here
  };
  
  const FirstRoute = () => (
    <>
      <TouchableOpacity  onPress={() =>  navigation.navigate("with")}>
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/564x/7b/7b/c6/7b7bc658d3fce83780679e84dc62f2fa.jpg',
                }}
                resizeMode="cover"
                style={styles.circularImage}
              />
            </View>
            <View style={styles.rightContent}>
              <Title style={styles.cardTitle}>Problem with Quiz</Title>
              <View style={styles.rowContainer}>
                <Text style={styles.dateText}>25 Jul 2023 | 14:35</Text>
              </View>
              <View style={styles.openText}>
                <Text style={styles.openTextContent}>open</Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
  
      <TouchableOpacity  onPress={() =>  navigation.navigate("run")}>
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/564x/7b/7b/c6/7b7bc658d3fce83780679e84dc62f2fa.jpg',
                }}
                resizeMode="cover"
                style={styles.circularImage}
              />
            </View>
            <View style={styles.rightContent}>
              <Title style={styles.cardTitle}>Refund Request # 64237</Title>
              <View style={styles.rowContainer}>
                <Text style={styles.dateText}>2 Sep 2023 | 09:50</Text>
              </View>
              <View style={styles.openText}>
                <Text style={styles.openTextContent}>close</Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={() =>  navigation.navigate("screen")}>
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/564x/7b/7b/c6/7b7bc658d3fce83780679e84dc62f2fa.jpg',
                }}
                resizeMode="cover"
                style={styles.circularImage}
              />
            </View>
            <View style={styles.rightContent}>
              <Title style={styles.cardTitle}>Pre-Purchase Question</Title>
              <View style={styles.rowContainer}>
                <Text style={styles.dateText}>10 Nov 2023 | 10:30</Text>
              </View>
              <View style={styles.openText}>
                <Text style={styles.openTextContent}>close</Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </>
  );
  
  const SecondRoute = () => (
    <>
    <TouchableOpacity  onPress={() =>  navigation.navigate("version")}>
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/564x/7b/7b/c6/7b7bc658d3fce83780679e84dc62f2fa.jpg',
                }}
                resizeMode="cover"
                style={styles.circularImage}
              />
            </View>
            <View style={styles.rightContent}>
              <Title style={styles.cardTitle}>Version of Linux</Title>
              <View style={styles.rowContainer}>
                <Text style={styles.dateText}>25 Jul 2023 | 14:35</Text>
              </View>
              <View style={styles.openText}>
                <Text style={styles.openTextContent}>close</Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
  
      <TouchableOpacity  onPress={() =>  navigation.navigate("soft")}>
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/564x/7b/7b/c6/7b7bc658d3fce83780679e84dc62f2fa.jpg',
                }}
                resizeMode="cover"
                style={styles.circularImage}
              />
            </View>
            <View style={styles.rightContent}>
              <Title style={styles.cardTitle}>Design Software</Title>
              <View style={styles.rowContainer}>
                <Text style={styles.dateText}>25 Jul 2023 | 14:35</Text>
              </View>
              <View style={styles.openText}>
                <Text style={styles.openTextContent}>Open</Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
  
      </>
  );
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'My Results' },
    { key: 'second', title: 'No Participated' },
   
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
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
          <Text style={{ fontSize: 22, color: "black", marginTop: 42,textAlign:'center',marginLeft:85 }}>Support Message</Text>
        </View>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
        />
      </View>
      <TouchableOpacity onPress={handleAddButtonPress} style={styles.addButton}>
      <FontAwesome6 name="add" size={24} color="white" />
        </TouchableOpacity>
        </SafeAreaView>
      </DrawerSceneWrapper>
  );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',  // Set the background color here
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
    fontSize: 12,
    color: 'gray',
    marginRight: 15,
    marginTop:15
   
  },
  valueText: {
    fontSize: 12,
    color: '#43D477',
   
    marginLeft:2
  },
  rightContent: {
    flex: 1,
    padding: 16,
  },
  cardTitle: {
    fontSize: 15,
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
};

export default SupportScreen;