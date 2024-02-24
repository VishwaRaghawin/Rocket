
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome,FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const AboutTab = () => (
  <View style={styles.tabContent}>
    

    <Text style={styles.masterText}>High Quality Training</Text>

  
    

    <TouchableOpacity style={styles.followButton}>
      <Text style={styles.followButtonText}>Follow</Text>
    </TouchableOpacity>
  </View>
);

const CoursesTab = () => {
  const navigation = useNavigation();

return(

  <View style={styles.tabContent}>
  {/* First Card */}
  <View style={{marginTop:-30,marginRight:200}}>
  <TouchableOpacity onPress={() => navigation.navigate('course')}>
    <View style={styles.additionalCard}>
      {/* White border with star icon and rating */}
      <View style={styles.whiteBorder}>
        <FontAwesome name="star" size={13} color="#ffdb58" />
        <Text style={{ color: "#454545", marginLeft: 5, fontSize: 11 }}>
          4.5
        </Text>
      </View>

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1622463461333-611830d028bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D' }}
        style={{ width: "100%", height: "80%", borderRadius: 24 }}
      />

      {/* Bottom box inside the image and below the whiteBorder */}
      <View style={styles.bottomBox}></View>

      <Text style={styles.cardText}>Web Design for Beginners</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between",marginRight:5  }}>
        <Text style={{ marginRight: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
          <FontAwesome name="user" size={14} color="#385a7c" /> James Kong
        </Text>
        <Text style={{ marginLeft: 10, marginTop: 7, color: "grey", fontSize: 11 }}>
          <FontAwesome name="calendar" size={11} color="#f97171" /> 1:45 Hours
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8,marginRight:50 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginLeft: 15, marginRight: 30, color: "#00A400", fontSize: 11 }}>
            $20 USD
          </Text>
          <Text style={{ marginLeft: 15, color: "white", borderRadius: 16, backgroundColor: "#43D477", padding: 3, fontSize: 7.5 }}>
            Free Course
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>

  </View>
</View>
);
}

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

const InstructorTab = () => (
  <View style={styles.tabContent}>
    <View style={styles.container}>
      {/* Image */}
      <View style={{ width:170, height: 180,marginTop:30, alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10, marginRight: 210, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5 }}>
      <View style={styles.calendarIconContainer}>
        <Icon name="calendar" size={12} color="#6AD284" />
      </View>
          <Image source={require('../../../assets/image/air.jpg')} style={{ marginTop: 10,width: 80, height: 80, borderRadius: 50, marginBottom: 10 }} />
          <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>linda Anderson</Text>
          <Text style={{ fontSize: 10,  textAlign: 'center',color:'grey',marginTop:2 }}>Classes Rating from 4 to 5</Text>
        </View>


      {/* Text */}
     
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
      source={{ uri: 'data:image/png;base64,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' }} // Updated image URL
      style={styles.circleImage}
    />
     <Text style={styles.nameText}>King Pictures</Text>

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

const OverviewsScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'about', title: 'About' },
    { key: 'courses', title: 'Courses' },
    { key: 'badges', title: 'Badges' },
    { key: 'meeting', title: 'Meeting' },
    { key: 'instructor', title: 'Instructor' },
  
  ]);

  const renderScene = SceneMap({
    about: AboutTab,
    courses: CoursesTab,
    badges: BadgesTab,
    meeting: MeetingTab,
    instructor:InstructorTab,
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
    <Text style={styles.headerText}>King Pictures Profile</Text>
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
    backgroundColor: 'White',
    padding: 20,
    alignItems: 'center',
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
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
    backgroundColor: '#FAFAFA',
    marginTop:-65,
  },
  indicator: {
    backgroundColor: 'black',
  },
  label: {
    fontSize: 9,
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
  calendarIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#D1E6B5',
    borderRadius: 16,
    padding: 3,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'grey',
    marginTop:15
  },
  masterText: {
    fontSize: 13,
    marginVertical: 10,
    color:'grey',
    marginRight:260,
    marginTop:-0
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color:'black',
    marginRight:310,
   
  },
  sectionText: {
    fontSize: 15,
    color: 'grey',
    marginRight:258,
    marginTop:0
  },
  followButton: {
    backgroundColor: 'white',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'lightgreen',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 295,
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
    bottom: 95, // Adjust the bottom position as needed
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

export default OverviewsScreen;
