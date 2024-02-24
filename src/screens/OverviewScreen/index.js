import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,item } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome,FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';




const AboutTab = () => (
  <View style={styles.tabContent}>
    {/* Card */}
    <View style={styles.card}>
      {/* Image on the left */}
      <Image
        source={{ uri: 'https://img.freepik.com/free-vector/video-camera-illustration_1012-100.jpg?size=626&ext=jpg&uid=R123353249&semt=ais' }} // Replace with your image URL
        style={styles.cardImage}
      />

      {/* Text contents on the right */}
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>Instructor is Unavailable</Text>
        <Text style={styles.cardSubtitle}>I will not be available for 2 weeks until end of Januar...</Text>
       
      </View>
    </View>

    {/* Master Text */}
    <Text style={styles.masterText}>Master Certified Coach</Text>

    {/* Experiences */}
    <Text style={styles.sectionHeader}>Experiences</Text>
    <Text style={styles.sectionText}>-Five-time TED Speaker</Text>
    

    {/* Education */}
    <Text style={styles.sectionHeader}>Educations</Text>
    <Text style={{fontSize:12.5,marginRight:60,color:'grey'}}>-Associate of Applied Bussiness from Standard University.</Text>
    <Text style={{fontSize:12.5,marginRight:60,color:'grey'}}>-Bachelor of Science in Bussiness from Harvard University.</Text>
    <Text style={{fontSize:12.5,marginRight:60,color:'grey'}}>-Master of Computational Financees University of Chicago.</Text>
    {/* Follow button */}
    <TouchableOpacity style={styles.followButton}>
      <Text style={styles.followButtonText}>Follow</Text>
    </TouchableOpacity>
  </View>
);

const CoursesTab = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.tabContent}>
      {/* First Card */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -30 }}>
        <TouchableOpacity onPress={() => navigation.navigate('course')}>
          <View style={styles.additionalCard}>
            {/* White border with star icon and rating */}
            <View style={styles.whiteBorder}>
              <FontAwesome name="star" size={13} color="#ffdb58" />
              <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>
                4.5
              </Text>
            </View>

            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1617870952348-7524edfb61b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D' }}
              style={{ width: "100%", height: "80%", borderRadius: 24 }}
            />

            {/* Bottom box inside the image and below the whiteBorder */}
            <View style={styles.bottomBox}></View>

            <Text style={styles.cardText}>Understand Angular JS</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ marginRight: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
                <FontAwesome name="user" size={14} color="#385a7c" /> James Kong
              </Text>
              <Text style={{ marginLeft: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
                <FontAwesome name="calendar" size={11} color="#f97171" /> 1 hour
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8,marginRight:15 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginLeft: 15, marginRight: 15, color: "#00A400", fontSize: 11 }}>
                  $20 USD
                </Text>
                <Text style={{ marginLeft: 15, color: "white", borderRadius: 16, backgroundColor: "#ffdb58", padding: 3, fontSize: 7.5 }}>
                  In Progress
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Second Card (Similar structure as the first card) */}
        <TouchableOpacity onPress={() => navigation.navigate('course')}>
          <View style={styles.additionalCard}>
            {/* White border with star icon and rating */}
            <View style={styles.whiteBorder}>
              <FontAwesome name="star" size={15} color="#ffdb58" />
              <Text style={{ color: "#454545", marginLeft: 5, fontSize: 10 }}>
                4.5
              </Text>
            </View>

            <Image
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1661405552531-1af06e50c6a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fHww' }}
              style={{ width: "100%", height: "80%", borderRadius: 24 }}
            />

            {/* Bottom box inside the image and below the whiteBorder */}
            <View style={styles.bottomBox}></View>

            <Text style={styles.cardText}>You Can be a Great Listener</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ marginRight: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
                <FontAwesome name="user" size={13} color="#385a7c" /> Another User
              </Text>
              <Text style={{ marginLeft: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
                <FontAwesome name="calendar" size={11} color="#f97171" /> 2 hours
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8,marginRight:15 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginLeft: 15, marginRight: 15, color: "#00A400", fontSize: 11 }}>
                  $30 USD
                </Text>
                <Text style={{ marginLeft: 15, color: "white", borderRadius: 16, backgroundColor: "#ffdb58", padding: 3, fontSize: 7.5 }}>
                  Not Started
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const BadgesTab = () => (
  <View style={styles.tabContent}>
    <ScrollView showsVerticalScrollIndicator={false}>
   <View>
      {/* First set of views */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20,marginTop: 20, }}>
        <View style={{ width: "45%", height: 190, flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10, marginRight: 5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5 }}>
          <Image source={require('../../../assets/image/im.jpg')} style={{ width: 70, height: 70, borderRadius: 50, marginBottom: 10,marginTop: 30, }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Faithful User</Text>
          <Text style={{ fontSize: 10,  textAlign: 'center',color:'grey',marginTop: 5, }}>Old Membership</Text>
        </View>

        <View style={{ width: "45%", height: 190, flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10, marginLeft: 5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5 }}>
          <Image source={require('../../../assets/image/images.jpg')} style={{ width: 70, height: 70, borderRadius: 50, marginBottom: 10,marginTop: 30 }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Senior Vendor</Text>
          <Text style={{ fontSize: 12,  textAlign: 'center',color:'grey',marginTop: 5 }}>Has 2 Classes</Text>
        </View>
      </View>

      {/* Second set of views */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <View style={{ width: "45%", height: 190, flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10, marginRight: 5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5 }}>
          <Image source={require('../../../assets/image/ui.jpg')} style={{ marginTop: 30,width: 70, height: 70, borderRadius: 50, marginBottom: 10 }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Golden Classes</Text>
          <Text style={{ fontSize: 10,  textAlign: 'center',color:'grey',marginTop:5 }}>Classes Rating from 4 to 5</Text>
        </View>

        <View style={{ width: "45%", height: 190, flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10, marginLeft: 5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5 }}>
          <Image source={require('../../../assets/image/i.jpg')} style={{marginTop:30, width: 70, height: 70, borderRadius: 50, marginBottom: 10 }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Best Seller</Text>
          <Text style={{ fontSize: 10,  textAlign: 'center',color:'grey',marginTop:5 }}>Classes Sales from 1 to 2</Text>
        </View>
      </View>

      {/* Third set of views */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <View style={{ width: "45%", height: 190, flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10, marginRight: 5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5 }}>
          <Image source={require('../../../assets/image/image.jpg')} style={{ marginTop:30,width: 70, height: 70, borderRadius: 50, marginBottom: 10 }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}> Fantastic Support</Text>
          <Text style={{ fontSize: 10,  textAlign: 'center',color:'grey',marginTop:5 }}>Support Rating from 4 to 5</Text>
        </View>

        <View style={{ width: "45%", height: 190, flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10, marginLeft: 5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5 }}>
         
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center',marginTop:111 }}>Forums Top User</Text>
          <Text style={{ fontSize: 10,  textAlign: 'center',color:'grey',marginTop:5 }}>Has 2 to 5 Topics</Text>
          
        </View>
      </View>
    </View>
    </ScrollView>
     </View>
);

const MeetingTab = () => (
  <View style={styles.tabContent}>
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{uri:'https://www.etf-nachrichten.de/wp-content/uploads/2021/04/ETF-Nachrichten-Icon25-e1620632035295.png.webp'}} // Replace with the path to your image
        style={styles.image}
      />

      {/* Text */}
      <Text style={styles.text}> Meetings Unavailable</Text>
    </View>
  </View>
);


const renderStars = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Icon key={i} name="star" size={18} color="gold" style={styles.starIcon} />
    );
  }
  return stars;
};

const CircleImage = () => (
  <View style={styles.container}>
  <View style={styles.circleImageContainer}>
    <Image
      source={{ uri: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D' }} // Updated image URL
      style={styles.circleImage}
    />
     <Text style={styles.nameText}>James Kong</Text>

{/* 5-Star Icon */}
<View style={styles.starIconContainer}>
        {renderStars()}
      </View>


{/* Camera, User, Users Icons */}
<View style={styles.iconContainer}>
<View style={[styles.iconWrapper, { backgroundColor: '#90EE90' }]}>
    <Icon name="video-camera" size={15} color="#008001" />
  </View>
  <View style={[styles.iconWrapper, { backgroundColor: '#ACD8E5' }]}>
  <FontAwesome5 name="user-alt" size={15} color="#0000FD" />
  </View>

  <View style={[styles.iconWrapper, { backgroundColor: '#FF8B01' }]}>
    <Icon name="users" size={15} color="#FEA500" />
  </View>
</View>

{/* 2, 1, 0 Numbers */}
<View style={styles.numberContainer}>
  <Text style={styles.numberText}>2</Text>
  <Text style={styles.numberText}>1</Text>
  <Text style={styles.numberText}>0</Text>
</View>

{/* Courses, Students, Followers */}
<View style={styles.infoContainer}>
  <Text style={styles.infoText}>Courses</Text>
  <Text style={styles.infoText}>Students</Text>
  <Text style={styles.infoText}>Followers</Text>
</View>
  </View>
  </View>
);

const OverviewScreens = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'about', title: 'About' },
    { key: 'courses', title: 'Courses' },
    { key: 'badges', title: 'Badges' },
    { key: 'meeting', title: 'Meeting' },
  
  ]);
  
  const renderScene = SceneMap({
    about: AboutTab,
    courses: CoursesTab,
    badges: BadgesTab,
    meeting: MeetingTab,
   
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
       <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.back}
  >
    <FontAwesome5 name="chevron-left" size={20} color='black' />
  </TouchableOpacity>

  <View style={styles.header}>
    <Text style={styles.headerText}>James Kong Profile</Text>
  </View>
</View>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color to white
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:20,
    marginLeft:45
  },
  back: {
    marginLeft:20,
     padding: 12,
     borderRadius: 10,
     color: 'black',
     width:'10%',
     marginTop:22
    
   },
  iconWrapper: {
    borderRadius: 28, // Set the border radius as needed
    overflow: 'hidden',
    padding:20,
    justifyContent:'center',
    alignSelf:'center'
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: 'white',
    marginTop:-65,
  },
  indicator: {
    backgroundColor: 'black',
  },
  label: {
    fontSize: 10,
    color: 'black',
  },
  circleImageContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  circleImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
   marginTop: 5, // Adjust as needed
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  starIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  starIcon: {
    marginHorizontal: 2,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  numberText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:-15
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  infoText: {
    marginTop:-15,
    fontSize: 14,
    color:'grey'
  },
  card: {
    width:"95%",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginRight: 0,
    // Add shadow properties
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Elevation for Android
    elevation: 5,
    marginTop:20
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  cardTextContainer: {
    marginLeft: 10,

  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'grey',
    marginTop:10
  },
  masterText: {
    fontSize: 14,
    marginVertical: 10,
    color:'grey',
    marginRight:260,
    marginTop:-0
  },
  sectionHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 10,
    color:'black',
    marginRight:310,
   
  },
  sectionText: {
    fontSize: 14,
    color: 'grey',
    marginRight:255,
    marginTop:0
  },
  followButton: {
    backgroundColor: 'white',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'lightgreen',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 50,
    width:"90%",
    height:50
  },
  followButtonText: {
    color: 'lightgreen',
    textAlign: 'center',
    fontSize: 18,
  },
  additionalCard: {
    width: 200,
    height: 150,
    backgroundColor: "transparent",
    marginHorizontal: 5,
    borderRadius: 24,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: -80,
  },
  whiteBorder: {
    position: "absolute",
    top: -30,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    zIndex: 1,
  },
  cardText: {
    fontSize: 13,
    color: "black",
    paddingHorizontal: 8,
    borderRadius: 10,
    fontWeight: "bold",
    marginTop: 5,
  },
  bottomBox: {
    position: "absolute",
    width: 180,
    height: 5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#f5f5f5",
    bottom: 85, // Adjust the bottom position as needed
  },
  image: {
    width: 320, // Set your desired width
    height: 270, // Set your desired height
    resizeMode: 'cover', // Choose the appropriate resizeMode (cover, contain, stretch, etc.)
    marginBottom: 20,
    marginTop:40 // Adjust as needed
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color:'grey',
    marginTop: -50,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  space: {
    width: 10, // Add space between cards
  },
});

export default OverviewScreens;
