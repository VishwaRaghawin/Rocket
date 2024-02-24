import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity ,SafeAreaView} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";


const CertificateScreen = ({ navigation }) => {
  const { openDrawer } = navigation;

  const handleCardPress = () => {
    // Handle the card press action, such as navigating to another screen
    console.log("Card pressed!");
    navigation.navigate('over')
    // Add your logic here, e.g., navigation.navigate('Details');
  };
  
  const handleCardPress1 = () => {
    // Handle the card press action, such as navigating to another screen
    console.log("Card pressed!");
    navigation.navigate('overs')
    // Add your logic here, e.g., navigation.navigate('Details');
  };
  
  const FirstRoute = () => (
    <TouchableOpacity onPress={handleCardPress}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1682974403724-a65bc4238a55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D' }}
              resizeMode="cover"
              style={styles.circularImage}
            />
          </View>
          <View style={styles.rightContent}>
            <Title style={styles.cardTitle}>Elementary Quiz</Title>
            <Paragraph style={styles.cardText}>Become a Product Manager</Paragraph>
            <View style={styles.rowContainer}>
              <IconButton
                icon="calendar"
                color="gray"
                size={14}
                style={styles.iconButton}
              />
              <Text style={styles.dateText}>25 Jul 2023 | 5:20</Text>
  
              <MaterialCommunityIcons name="certificate-outline" size={16} color="#43D477" style={{ marginTop: 12 }} />
              <Text style={styles.valueText}>100.0</Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
  
  const SecondRoute = () => (
    <TouchableOpacity onPress={handleCardPress1}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbW5hZ2VtZW50fGVufDB8fDB8fHww' }}
              resizeMode="cover"
              style={styles.circularImage}
            />
          </View>
          <View style={styles.rightContent}>
            <Title style={{ fontSize: 15, fontWeight: 'bold',marginTop:-5}}>Travel Management Course</Title>
            <Paragraph style={{ fontSize: 13,color:'grey',marginTop:5 }}>COURSE DESCRIPTION...</Paragraph>
            <View style={styles.rowContainer}>
              <IconButton
                icon="calendar"
                color="gray"
                size={14}
                style={styles.iconButton}
              />
              <Text style={styles.dateText}>25 Jul 2023 | 5:20</Text>
  
              <MaterialCommunityIcons name="certificate-outline" size={16} color="#43D477" style={{ marginTop: 12 }} />
              <Text style={styles.valueText}>100.0</Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Quiz Certs.' },
    { key: 'second', title: 'Completion Certs.' },
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
          <Text style={{ fontSize: 22, color: "black", marginTop: 42,textAlign:'center',marginLeft:125 }}>Certificate</Text>
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
  tabLabel: {
    color: 'black',
  },
  card: {
    margin: 16,
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
    width: 130,
    height: 100,
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
    marginTop:14
  },
  dateText: {
    fontSize: 13,
    color: 'gray',
    marginRight: 15,
    marginTop:8
  },
  valueText: {
    fontSize: 13,
    color: '#43D477',
    marginTop:9,
    marginLeft:2
  },
  rightContent: {
    flex: 1,
    padding: 16,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop:-5
  },
  cardText: {
    fontSize: 14,
    color:'grey',
    marginTop:5
  },
};

export default CertificateScreen;
