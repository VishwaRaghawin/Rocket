
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground,title,SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";



const QuizzesScreen = ({ navigation }) => {
  const { openDrawer } = navigation;
  const handleCardPress = () => {
    // Handle the card press action, such as navigating to another screen
    console.log("Card pressed!");
    navigation.navigate('result')
    // Add your logic here, e.g., navigation.navigate('Details');
  };
  
  const handleCardPress1 = () => {
    // Handle the card press action, such as navigating to another screen
    console.log("Card pressed!");
    navigation.navigate('waiting')
    // Add your logic here, e.g., navigation.navigate('Details');
  };
  
  const handleCardPress2 = () => {
    // Handle the card press action, such as navigating to another screen
    console.log("Card pressed!");
    navigation.navigate('fail')
    // Add your logic here, e.g., navigation.navigate('Details');
  };
  
  const handleCardPress3 = () => {
    // Handle the card press action, such as navigating to another screen
    console.log("Card pressed!");
    navigation.navigate('entrance')
    // Add your logic here, e.g., navigation.navigate('Details');
  };

  const handleCardPress4 = () => {
    // Handle the card press action, such as navigating to another screen
    console.log("Card pressed!");
    navigation.navigate('final')
    // Add your logic here, e.g., navigation.navigate('Details');
  };

  const handleCardPress5 = () => {
    // Handle the card press action, such as navigating to another screen
    console.log("Card pressed!");
    navigation.navigate('place')
    // Add your logic here, e.g., navigation.navigate('Details');
  };

  
  const FirstRoute = () => (
  <>

<TouchableOpacity onPress={ handleCardPress1}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1556817977-2ee623b6f8f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fHww' }}
              resizeMode="cover"
              style={styles.circularImage}
            />
             <View style={{ position: 'absolute', top: 25, left: 25, backgroundColor: "#ffce00", padding: 2,borderRadius: 10 }}>
             <Text style={{ color: "white", fontSize: 10 }}>Waiting</Text>
             </View>
          </View>
          <View style={styles.rightContent}>
            <Title style={styles.cardTitle}>Entrance Quiz</Title>
            <Paragraph style={styles.cardText}>New Learning Page</Paragraph>
            <View style={styles.rowContainer}>
              <IconButton
                icon="calendar"
                color="gray"
                size={14}
                style={styles.iconButton}
              />
              <Text style={styles.dateText}>2 Jan 2024</Text>
  
              <MaterialCommunityIcons name="certificate-outline" size={16} color="#ffce00" style={{ marginTop: 4 }} />
              <Text style={{ fontSize: 12,color: '#ffce00',marginLeft:2}}>0.0/100.0</Text>
            </View>
          </View>
        </View>
      </Card>
      </TouchableOpacity>

    <TouchableOpacity onPress={handleCardPress}>
    <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D' }}
              resizeMode="cover"
              style={styles.circularImage}
            />
             <View style={{ position: 'absolute', top: 25, left: 25, backgroundColor: "#43D477", borderRadius: 10, padding: 2 }}>
             <Text style={{ color: "white", fontSize: 10 }}>Passed</Text>
             </View>
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
              <Text style={styles.dateText}>25 Jul 2023</Text>
  
              <MaterialCommunityIcons name="certificate-outline" size={16} color="#43D477" style={{ marginTop: 5 }} />
              <Text style={styles.valueText}>100.0</Text>
            </View>
          </View>
        </View>
      </Card>
      </TouchableOpacity>
     
     <TouchableOpacity onPress={ handleCardPress1}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1661779063367-0576efaad7d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0dWRlbnRzfGVufDB8fDB8fHww' }}
              resizeMode="cover"
              style={styles.circularImage}
            />
             <View style={{ position: 'absolute', top: 25, left: 25, backgroundColor: "#ffce00", padding: 2,borderRadius: 10 }}>
             <Text style={{ color: "white", fontSize: 10 }}>Waiting</Text>
             </View>
          </View>
          <View style={styles.rightContent}>
            <Title style={styles.cardTitle}>First Quiz</Title>
            <Paragraph style={styles.cardText}>How to Manage Your Team</Paragraph>
            <View style={styles.rowContainer}>
              <IconButton
                icon="calendar"
                color="gray"
                size={14}
                style={styles.iconButton}
              />
              <Text style={styles.dateText}>2 Sep 2023</Text>
  
              <MaterialCommunityIcons name="certificate-outline" size={16} color="#ffce00" style={{ marginTop: 4 }} />
              <Text style={{ fontSize: 12,color: '#ffce00',marginLeft:2}}>40.0/100.0</Text>
            </View>
          </View>
        </View>
      </Card>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleCardPress2}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWRlbnRzfGVufDB8fDB8fHww' }}
              resizeMode="cover"
              style={styles.circularImage}
            />
             <View style={{ position: 'absolute', top: 25, left: 25, backgroundColor: "red", borderRadius: 10, padding:2 }}>
             <Text style={{ color: "white", fontSize: 10 }}>Failed</Text>
             </View>
          </View>
          <View style={styles.rightContent}>
            <Title style={styles.cardTitle}>Midterm Quiz</Title>
            <Paragraph style={{fontSize:13,color:'grey'}}>Excel from Beginner to Advanced</Paragraph>
            <View style={styles.rowContainer}>
              <IconButton
                icon="calendar"
                color="gray"
                size={14}
                style={styles.iconButton}
              />
              <Text style={styles.dateText}>10 Nov 2023</Text>
  
              <MaterialCommunityIcons name="certificate-outline" size={16} color="red" style={{ marginTop: 5 }} />
              <Text style={{ fontSize: 12,color: 'red',marginLeft:2}}>40.0/100.0</Text>
            </View>
          </View>
        </View>
      </Card>
      </TouchableOpacity>
      </>
    );
  
  const SecondRoute = () => (
    <>
    <TouchableOpacity onPress={handleCardPress3}>
    <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{ uri: 'https://img.freepik.com/free-photo/front-view-young-musician-girl-holding-guitar-looking-something-carefully-dark_140725-98092.jpg?size=626&ext=jpg&uid=R123353249&semt=ais' }}
              resizeMode="cover"
              style={styles.circularImage}
            />
            
          </View>
          <View style={styles.rightContent}>
            <Title style={styles.cardTitle}>Entrance Quiz</Title>
            <Paragraph style={styles.cardText}>New Learning Page</Paragraph>
            <View style={styles.rowContainer}>
              <IconButton
                icon="clock"
                color="gray"
                size={14}
                style={styles.iconButton}
              />
              <Text style={styles.dateText}>4 Minutes</Text>
              <AntDesign name="questioncircle" size={12} color="grey" />
              <Text style={{ fontSize: 12,color: 'grey',marginLeft:2}}>5</Text>
            </View>
          </View>
        </View>
      </Card>
      </TouchableOpacity>
     
     <TouchableOpacity onPress={ handleCardPress4}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{ uri: 'https://img.freepik.com/free-photo/teen-boy-doing-homework-library_23-2147860830.jpg?size=626&ext=jpg&uid=R123353249&semt=ais' }}
              resizeMode="cover"
              style={styles.circularImage}
            />
           
          </View>
          <View style={styles.rightContent}>
            <Title style={styles.cardTitle}>Final Quiz</Title>
            <Paragraph style={styles.cardText}>Learn Linux in 5 days</Paragraph>
            <View style={styles.rowContainer}>
              <IconButton
                icon="clock"
                color="gray"
                size={14}
                style={styles.iconButton}
              />
              <Text style={styles.dateText}>5 Minutes</Text>
  
              <AntDesign name="questioncircle" size={12} color="grey" />
              <Text style={{ fontSize: 12,color: 'grey',marginLeft:2}}>5</Text>
            </View>
          </View>
        </View>
      </Card>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleCardPress5}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{ uri: 'https://img.freepik.com/free-photo/looking-through-online-statistics_1098-16208.jpg?size=626&ext=jpg&uid=R123353249&semt=ais' }}
              resizeMode="cover"
              style={styles.circularImage}
            />
             
          </View>
          <View style={styles.rightContent}>
            <Title style={styles.cardTitle}>Placement Quiz</Title>
            <Paragraph style={{fontSize:13,color:'grey'}}>Learn and Understand Angular JS</Paragraph>
            <View style={styles.rowContainer}>
              <IconButton
                icon="clock"
                color="gray"
                size={14}
                style={styles.iconButton}
              />
              <Text style={styles.dateText}>8 Minutes</Text>
  
              <AntDesign name="questioncircle" size={12} color="grey" />
              <Text style={{ fontSize: 12,color: 'grey',marginLeft:2}}>5</Text>
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
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>
          <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 20, marginTop: 50 }}>
            <AntDesign name="menu-fold" size={23} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, color: "black", marginTop: 42,textAlign:'center',marginLeft:130 }}>Quizzes</Text>
        </View>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
        />
      </View>
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
    width: 130,
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
    fontSize: 12,
    color: 'gray',
    marginRight: 15,
   
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
    marginTop:-5
  },
  cardText: {
    fontSize: 13,
    color:'grey',
    marginTop:1
  },
};

export default QuizzesScreen;