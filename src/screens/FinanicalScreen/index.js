
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView ,SafeAreaView} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Card, Title, } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
  import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
import { FontAwesome } from '@expo/vector-icons';






const  FinanicalScreen = ({ navigation }) => {
  const { openDrawer } = navigation;

  const handleChangePress = () => {
    // Your logic for handling the "Change" button press goes here
    console.log('Change button pressed');
    // Add any additional functionality you need
  };
  
  const FirstRoute = () => (
    <>
    <ScrollView>
     <Card style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Text style={styles.cardTitle}>$281.50</Text>
              <Text style={{marginTop:0,fontSize:15,color:'grey'}}>Account Balance</Text>
              <TouchableOpacity onPress={handleChangePress}>
                <View style={{backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'lightgreen',
      paddingVertical: 10,
      paddingHorizontal: 20,
      width:"90%",
      marginTop:30,
      height:45}}>
                  <Text style={{ color: 'lightgreen',
                  fontWeight:'bold',
      textAlign: 'center',
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      fontSize: 13,}}>Charge</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMIzoWbWcT6PzJB0FaKFjlT4eovTXjN9C1I2iuTSb4tNBuMm5',
              }}
              resizeMode="cover"
              style={{marginLeft:140,
                marginTop:30,
                 width: 80,
                height: 80,
                borderRadius: 20,}}
            />
          </View>
        </Card>
  <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold'}}>Balances History</Text>
  
  {[...Array(10)].map((_, index) => (
          <Card key={index} style={styles.card}>
            <View style={styles.cardContent}>
            <View style={styles.leftContent}>
    <Image
      source={{
        uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3ONbAwcswsIjHFZPWRplMX7z8oAChsaJW058ByWRkngEDQHBD',
      }}
      resizeMode="cover"
      style={{
        width: 70,
        height: 70,
        borderRadius: 20,
      }}
    />
    <View style={{ marginLeft: 90,marginTop:-70, }}>
      <Text style={styles.cardTitle}>Paid Credit Card</Text>
      <Text style={styles.dateText}>27 Jun 2023|13:16</Text>
    </View>
  </View>
  
              <Text style={{marginLeft:100,marginTop: 55,color:'red'}}>-$52.80</Text>
            </View>
          </Card>
        ))}
  
        
        </ScrollView>
    </>
  );
  
  const SecondRoute = () => (
    <>
   
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMIzoWbWcT6PzJB0FaKFjlT4eovTXjN9C1I2iuTSb4tNBuMm5',
                }}
                resizeMode="cover"
                style={styles.circularImage}
              />
            </View>
            <View style={styles.rightContent}>
              <Title style={styles.cardTitle}>James Bond</Title>
              <Text style={{color:'grey'}}>1566787543</Text>
              <View style={styles.rowContainer}>
                <FontAwesome name="calendar" size={12} color="grey" style={{ marginRight: 5,marginTop:20 }} />
                <Text style={styles.dateText}>25 Jul 2023 | 14:35</Text>
              </View>
              <View style={styles.openText}>
                <Text style={{color:'grey'}}>$100</Text>
              </View>
            </View>
          </View>
        </Card>
     
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMIzoWbWcT6PzJB0FaKFjlT4eovTXjN9C1I2iuTSb4tNBuMm5',
                }}
                resizeMode="cover"
                style={styles.circularImage}
              />
            </View>
            <View style={styles.rightContent}>
              <Title style={styles.cardTitle}>JP Morgan</Title>
              <Text style={{color:'grey'}}>5766765762</Text>
              <View style={styles.rowContainer}>
              <FontAwesome name="calendar" size={12} color="grey" style={{ marginRight: 5,marginTop:20 }} />
                <Text style={styles.dateText}>25 Jul 2023 | 14:35</Text>
              </View>
              <View style={styles.openText}>
              <Text style={{color:'grey'}}>$300</Text>
              </View>
            </View>
          </View>
        </Card>
  
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMIzoWbWcT6PzJB0FaKFjlT4eovTXjN9C1I2iuTSb4tNBuMm5',
                }}
                resizeMode="cover"
                style={styles.circularImage}
              />
            </View>
            <View style={styles.rightContent}>
              <Title style={styles.cardTitle}>State Bank of India</Title>
              <Text style={{color:'grey'}}>6675365762</Text>
              <View style={styles.rowContainer}>
              <FontAwesome name="calendar" size={12} color="grey" style={{ marginRight: 5,marginTop:20 }} />
                <Text style={styles.dateText}>25 Jul 2023 | 14:35</Text>
              </View>
              <View style={styles.openText}>
              <Text style={{color:'grey'}}>$500</Text>
              </View>
            </View>
          </View>
        </Card>
      
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMIzoWbWcT6PzJB0FaKFjlT4eovTXjN9C1I2iuTSb4tNBuMm5',
                }}
                resizeMode="cover"
                style={styles.circularImage}
              />
            </View>
            <View style={styles.rightContent}>
              <Title style={styles.cardTitle}>Qatar National Bank</Title>
              <Text style={{color:'grey'}}>7657628234</Text>
              <View style={styles.rowContainer}>
              <FontAwesome name="calendar" size={12} color="grey" style={{ marginRight: 5,marginTop:20 }} />
                <Text style={styles.dateText}>25 Jul 2023 | 14:35</Text>
              </View>
              <View style={styles.openText}>
              <Text style={{color:'grey',marginBottom:-2}}>$1000</Text>
              </View>
            </View>
          </View>
        </Card>
     
  
      </>
  );
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Summary' },
    { key: 'second', title: 'Offline Payments' },
   
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
          <Text style={{ fontSize: 22, color: "black", marginTop: 42,textAlign:'center',marginLeft:125 }}>Financial</Text>
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
    padding: 15,
  },
  circularImage: {
    width: 80,
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
    marginTop:20
   
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
    fontSize:15,
    fontWeight: 'bold',
    marginTop:0,
   
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
    borderRadius: 12,
    padding: 3,
    margin: 18,
    height:21,
    width:45,
  alignItems:'center'
  },
  openTextContent: {
    color: 'white',
    fontSize: 10,
  },
};

export default FinanicalScreen;