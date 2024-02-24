
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, FontAwesome6,AntDesign,FontAwesome5  } from '@expo/vector-icons';



const handleAskQuestion = () => {
  // Implement the logic for handling the "Ask a New Question" action here
  console.log('Ask a new question button pressed');
  
};
const CircleImage = () => (
  <View style={styles.container}>
    {/* Your CircleImage content */}
  </View>
);

const CourseDetailScreen = () => {
 

 
const AccordionItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('../../../assets/image/345.jpg')}
        style={{ width: 50, height: 50, borderRadius: 5 }}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <TouchableOpacity onPress={toggleAccordion} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', flex: 1 }}>{title}</Text>
          <FontAwesome6
            name={expanded ? "caret-up" : "caret-down"}
            size={18}
            color="grey"
          />
        </TouchableOpacity>
        {expanded && <Text style={{ marginTop: 10,color:'grey' }}>{content}</Text>}
      </View>
    </View>
  );
};

const InformationTab = () => {
  const [showAll, setShowAll] = useState(false); // State to track whether to show all text or not
  const navigation = useNavigation(); 
  
    const paragraph =
      `India is a land with a vast variety of wildlife and a large variety of cultures. Situated in South Asia’s heartland, India is a densely populated country. It is a vastly diverse country in terms of culture, climate, religion, and language. India has chosen a number of emblems to represent our country’s image. Saffron, white, and green make up the Indian national flag. The Ashok chakra in the centre has a navy blue 24-spoke wheel that represents virtue.India is well-known for possessing the world’s greatest cultural diversity. Even for Indians, visiting and exploring every culture in India is quite difficult. India’s various cultures attract visitors from all over the world who want to come here at least once in their lives to experience India’s rich diversity.India is a secular and democratic country that gives the liberty to practise any religion. Along with that, every individual in India has the liberty to read any religious book of their choice. Every individual has the liberty to move to any part of the country and adapt to the culture of that region. Every state of India has its own official language.Jana Gana Mana is our national anthem, while Vande Matram is our national song. In the ‘Lion Capital of Asoka’, India’s national emblem, four lions sit back to back on a cylindrical base with four Ashok chakras on each side, only one of which is visible in the front. There are three lions visible and one concealed. It is a sign of sovereignty that also represents strength and bravery. It is a beautiful country that excels in art, culture, architecture, education, etc.`;
  
    // Function to toggle between showing all lines or not
    const toggleShowAll = () => {
      setShowAll(!showAll);
    };
    
   
    return (
      <View style={styles.tabContent}>
        <ScrollView showsVerticalScrollIndicator={false}>

      
    <View style={{marginHorizontal: 10, // horizontal margin between cards
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    elevation: 5, // for shadow
    width: 210, 
    height:70,
    marginTop:20,marginBottom:20}}>
      <Image
        source={require('../../../assets/image/54.png')}
        style={styles.circleImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>Certificates</Text>
        <Text style={{color:'grey',marginTop:5}}>Included</Text>
      </View>
    </View>
 
  
  {/* <View style={{ marginHorizontal: 10, backgroundColor: '#FFFFFF', borderRadius: 10, padding: 10, elevation: 5, marginBottom: 20 }}> */}
          <Text style={{ textAlign: 'left',color:'grey' }}>{showAll ? paragraph : paragraph.slice(0, 300)}{!showAll && '...'}</Text>
          {/* </View> */}
          <TouchableOpacity onPress={toggleShowAll} style={{ alignSelf: 'center', backgroundColor: 'lightgrey', padding: 10, borderRadius: 15 }}>
  <Text style={{ color: 'black', textAlign: 'center',fontSize:10 }}>{showAll ? 'View Less' : 'View More'}</Text>
</TouchableOpacity>

<View style={{ justifyContent: 'center', alignItems: 'center' }}>
  <View style={styles.iconRow}>
    <AntDesign name="infocirlce" size={15} color="grey" style={{ backgroundColor: 'lightgrey', borderRadius: 20, padding: 12 }} />
    <Text style={styles.text}> Webinar</Text>
    <View style={{ width: 50 }} />
    <AntDesign name="pluscircle" size={15} color="grey" style={{ backgroundColor: 'lightgrey', borderRadius: 36, padding: 12 }} />
    <Text style={styles.text}> Conducted</Text>
  </View>

  <View style={styles.iconRow}>
    <FontAwesome6 name="calendar-alt" size={15} color="grey" style={{ backgroundColor: 'lightgrey', borderRadius: 36, padding: 12 }} />
    <Text style={styles.text}>  30/01/2023</Text>
    <View style={{ width: 30 }} />
    <FontAwesome name="calendar-check-o" size={15} color="grey" style={{ backgroundColor: 'lightgrey', borderRadius: 36, padding: 12 }} />
    <Text style={styles.text}> 3 Duration</Text>
  </View>
</View>

        
      

        <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
          <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, padding: 10, elevation: 5 }}>
            <AccordionItem title="Is it a supported course?" content="Yes,you can get in touch with the instructor using the support system." />
          </View>
          <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, padding: 10, elevation: 5, marginTop: 10 }}>
            <AccordionItem title="How can I get course updates?" content="You will recevie a notification after each update is released so you can download updated files from the cours page." />
          </View>
          <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, padding: 10, elevation: 5, marginTop: 10,fontSize:8 }}>
            <AccordionItem title="What is the course level?" content="This is a course for beginners so you will familiar with the topic from scratch." />
          </View>
        </View>


        <View style={{ backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
   }}>
    <TouchableOpacity style={styles.askButton} onPress={() =>  navigation.navigate('Live')}>
      <Text style={styles.askButtonText}>Go to Leaning Page</Text>
    </TouchableOpacity>
  </View>
        </ScrollView>
      </View>
    );
  };

const ContentTab = () => {
  const navigation = useNavigation(); 

  return(
  <View style={styles.tabContent}>
   <Text style={{marginTop:20,fontSize:18,fontWeight:'bold',color:'black',marginRight:300,marginBottom:10}}>Introduction</Text>
   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {/* First Card */}
      <TouchableOpacity  onPress={() => navigation.navigate('app')}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../../../assets/image/1.png')}
            style={styles.circleImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>First Sessions</Text>
            <Text style={styles.cardText}>05 Mar 2023 | 12:00</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Second Card */}
      <TouchableOpacity onPress={() => navigation.navigate('app')}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../../../assets/image/1.png')}
            style={styles.circleImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Join to this Session</Text>
            <Text style={styles.cardText}>05 Mar 2023 | 12:00</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Third Card */}
      <TouchableOpacity onPress={() => navigation.navigate('app')}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../../../assets/image/1.png')}
            style={styles.circleImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Introduction Session</Text>
            <Text style={styles.cardText}>05 Mar 2023 | 12:00</Text>
          </View>
        </View>
      </TouchableOpacity>

    
   
    </ScrollView>
  
  
  </View>
);
  }
const  ReviewsTab = () => (
  <View style={styles.tabContent}>
   <ScrollView showsVerticalScrollIndicator={false}>
   <View style={styles.container}>
      {/* First Card */}
      <View style={styles.card}>
        <View style={styles.textSection}>
          <Text style={styles.title}>5.0</Text>
          <View style={styles.reviewContainer}>
          <AntDesign name="star" size={17} color="#ffdb58" />
          <AntDesign name="star" size={17} color="#ffdb58" />
          <AntDesign name="star" size={17} color="#ffdb58" />
          <AntDesign name="star" size={17} color="#ffdb58" />
          <AntDesign name="star" size={17} color="#ffdb58" />

          </View>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.reviewTitle}>Reviews</Text>
          
        </View>
        <View style={styles.lineContainer}>
          <Text style={styles.textNearYellowLine}>Content Quality</Text>
          <View style={styles.yellowLine}></View>
        </View>
        <View style={styles.lineContainer}>
          <Text style={styles.textNearYellowLine}>Instructor Skills</Text>
          <View style={styles.yellowLine}></View>
        </View>
        <View style={styles.lineContainer}>
          <Text style={styles.textNearYellowLine}>Purchase Worth</Text>
          <View style={styles.yellowLine}></View>
        </View>
        <View style={styles.lineContainer}>
          <Text style={styles.textNearYellowLine}>Support Quality</Text>
          <View style={styles.yellowLine}></View>
        </View>
</View>


<View style={{backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    marginTop: 20,}}>
      {/* Image on the left */}
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww' }} // Replace with your image URL
        style={{ width: 45,
          height: 45,
          borderRadius: 50,marginTop:-5}}
      />
 <View style={{marginLeft:60,marginTop:-40}}>
      <Text style={{fontWeight:'bold'}}>Morgan Sullivan</Text>
      <View style={{ flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Add this line
  marginTop: 5,}}>
          <AntDesign name="star" size={14} color="#ffdb58" />
          <AntDesign name="star" size={14} color="#ffdb58" />
          <AntDesign name="star" size={14} color="#ffdb58" />
          <AntDesign name="star" size={14} color="#ffdb58" />
          <AntDesign name="star" size={14} color="#ffdb58" />

          </View>
    </View>
      {/* Text contents on the right */}
      <View style={{  marginLeft: 10,}}>
        <Text style={{marginTop:10,color:'grey',fontSize:12}}>It was a perfect course...</Text>
        <Text style={{marginTop:5,color:'grey',fontSize:12}}>05 Jun 2023</Text>
       
      </View>
    </View>
<View style={{ backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    marginTop: 10,}}>
    <TouchableOpacity style={styles.askButton} onPress={handleAskQuestion}>
      <Text style={styles.askButtonText}>Write a Review</Text>
    </TouchableOpacity>
  </View>
    </View>
    </ScrollView>
  </View>
);

const CommentsTab = () => (
  <View style={styles.tabContent}>
     <ScrollView showsVerticalScrollIndicator={false}>
  <View style={styles.content}>
    <Image
      source={require('../../../assets/image/asd.jpg')}
      style={styles.image}
    />
    <Text style={{fontSize:20,fontWeight:'bold'}}>No Comments!</Text>
    <Text style={styles.text}>There's no comment for this course!</Text>
  </View>
  <View style={styles.bottomHeader}>
    <TouchableOpacity style={styles.askButton} onPress={handleAskQuestion}>
      <Text style={styles.askButtonText}>Leave a Comment</Text>

    </TouchableOpacity>
  </View>
  </ScrollView>
  </View>
  
 
);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'information', title: 'Information' },
    { key: 'content', title: 'Content' },
    { key: 'reviews', title: 'Reviews' },
    { key: 'comments', title: 'Comments' },
  ]);
  
  const renderScene = SceneMap({
    information : InformationTab,
    content: ContentTab,
    reviews: ReviewsTab,
    comments : CommentsTab
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
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      {/* Header */}
      
      <View style={styles.header}>
 
  
  <View style={styles.textContainer}>
    <Text style={styles.headerName}>Course Details</Text>
    
    
    <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.back}
  >
    <FontAwesome5 name="chevron-left" size={20} color='black' />
  </TouchableOpacity>
    <Text style={styles.additionalText}>New In-App Live System</Text>
    <View style={styles.communicationsContainer}>
      <Text style={styles.communicationsText}>In Communications</Text>
      
      <View style={styles.starContainer}>
        {[...Array(5)].map((_, index) => (
          <FontAwesome key={index} name="star" size={16} color="gold" />
        ))}
      </View>
    </View>
  </View>

  <View style={styles.iconContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('cart')}>
      <FontAwesome name="shopping-cart" size={23} color="black" />
    </TouchableOpacity>
  </View>
</View>

     
      {/* End Header */}
      <Image
              source={{uri: 'https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'}}
              style={styles.imageStyle}
            />


      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww'}}
        style={{  width: 50,
          height: 50,
          borderRadius: 30,
        marginTop: 15,marginLeft:10 }}
      />
   
    {/* Text contents */}
    <Text style={{fontWeight:'bold',marginLeft:70,marginTop:-40}}>Morgan Sullivan</Text>
      <View style={{ flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Add this line
  marginTop: 10,
  marginLeft:70}}>
          <AntDesign name="star" size={13} color="#ffdb58" />
          <AntDesign name="star" size={13} color="#ffdb58" />
          <AntDesign name="star" size={13} color="#ffdb58" />
          <AntDesign name="star" size={13} color="#ffdb58" />
          <AntDesign name="star" size={13} color="#ffdb58" />
</View>

      {/* TabView */}
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
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:20
  },
  text: {
    color: '#333',
    fontSize: 13,
    
  },
  viewButton: {
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
  },
  viewButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
  },
 
  textContainer: {
    flex: 1,
  },
  headerName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
    marginLeft:40,
    marginTop:10
    
  },
  additionalText: {
    fontSize: 18,
    color: 'black',
    marginTop:20,
    fontWeight: 'bold',
  },
  communicationsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  communicationsText: {
    fontSize: 15,
    color: 'grey',
    marginRight: 5,
  },
  starContainer: {
    flexDirection: 'row',
    marginLeft:140
  },
  iconContainer: {
    padding: 10,
    marginTop:-75,
   
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  tabBar: {
    backgroundColor: '#FAFAFA',
    marginTop: -270,
  },
  indicator: {
    backgroundColor: 'black',
  },
  label: {
    fontSize: 10,
    color: 'black',
  },
  imageStyle: {
    width: "90%", // Adjust width as needed
    height: 200, // Adjust height as needed
    marginLeft: 17, 
    borderRadius:25// Add some margin to separate text and image
  },
  bottomHeader: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    marginTop: 60,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  askButton: {
    backgroundColor: '#43D477',
    paddingHorizontal: 130,
    paddingVertical: 20,
    borderRadius:15,
    marginTop:30
  },
  askButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  cardContainer: {
    marginHorizontal: 10, // horizontal margin between cards
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    elevation: 5, // for shadow
    width: 210, 
    height:70// width of each card
  },
  circleImage: {
    width: 50, // reduced width of circle image
    height: 50, // reduced height of circle image
    borderRadius: 10, // to make it a circle
    marginRight: 10,
  },
  cardContent: {
    flexDirection: 'column',
  },
  cardText: {
    fontSize: 12, // reduced font size for card text
    fontWeight: 'bold',
  },
 
  card: {
    width: 330,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    marginTop: 20,
    marginLeft:2

  },
  textSection: {
    marginBottom: 10,
    marginTop:-10
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign:'center'
  },
  reviewTitle: {
    fontSize: 16,
    textAlign:'center',
    color:'grey',
    marginTop:5
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Add this line
  marginTop: 5,
  },
  reviewText: {
    marginLeft: 5,
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  back: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    color: 'black',
    marginTop:-35,
    width:'10%'
   
  },
  yellowLine: {
    backgroundColor: '#ffdb58',
    height: 5,
    width: '65%', 
    borderRadius:27,
    marginRight:30// Adjust this width as needed
  },
  textNearYellowLine: {
    marginRight: 15,
    color:'grey'
  },
 
});

export default CourseDetailScreen ;
