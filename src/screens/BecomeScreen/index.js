import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome,FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const BecomeScreen = () => {
  const navigation = useNavigation(); 
  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>

      <View style={styles.header}>
        
<TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.back}
  >
    <FontAwesome5 name="chevron-left" size={20} color='black' />
  </TouchableOpacity>
<Text style={styles.headerText}>Blog Post</Text>
      </View> 

      <ScrollView style={styles.scrollContainer}>
        <View style={{ padding: 16}}>
          {/* Title */}
          <View style={{ padding: 10 }}>
  {/* Title */}
  <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8, marginTop: -5,marginRight: 10 }}>
    Become a Straight-A Student
  </Text>

  {/* Author Container */}
  <View style={styles.authorContainer}>
  <FontAwesome name="calendar" size={14} color="grey" />
    <Text style={styles.author}>01 Jul 2021 in Events</Text>
  </View>
</View>


          {/* Card Image */}
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
            }}
            style={{ width: '100%', height: 200, marginBottom: 8,borderRadius:24 }}
            resizeMode="cover"
          />

          {/* Author */}
          <View style={styles.authorContainer}>
            <Image
              source={{
                uri: 'https://s3.envato.com/files/348298745/profile.jpg', // Replace with the URL of your circular image
              }}
              style={styles.authorImage}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, color: 'black', marginBottom: 4 }}>Admin</Text>
              <Text style={{ fontSize: 16, color: 'gray', marginBottom: 3 }}>Author Name</Text>
            </View>
          </View>

          {/* Paragraph Text */}
          <Text style={{ fontSize: 17, marginBottom: 16,color:'grey' }}>
            Offer undergraduate and graduate programs, including bachelor's, master's, and doctoral
            degrees. Provide two-year associate degrees and often serve as a more affordable option
            for general education requirements. Students choose a major (area of study) and take
            classes related to that field.
          </Text>

          {/* Rule 1 Heading */}
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8,color:'grey' }}>
            Rule 1: Always have a plan.
          </Text>

          {/* Rule 1 Text */}
          <Text style={{ fontSize: 17, marginBottom: 16,color:'grey' }}>
            A plan helps you define and clarify your short-term and long-term goals. It provides a
            roadmap for where you want to go and what you want to achieve. Planning allows for
            effective time management. It helps prioritize tasks and allocate time to activities
            based on their importance and deadlines. A plan helps allocate resources such as
            finances, energy, and effort efficiently. It prevents wastage of resources on
            non-essential activities.
          </Text>

          {/* Rule 2 Heading */}
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 ,color:'grey'}}>
            Rule 2: Be organized.
          </Text>

          {/* Rule 2 Text */}
          <Text style={{ fontSize: 17, marginBottom: 16 ,color:'grey'}}>
            Knowing what you want to achieve keeps you motivated. A plan helps maintain focus on your
            priorities and prevents distractions. While having a plan is important, it's also
            crucial to remain adaptable. Plans may need adjustments based on changing circumstances
            or new information. A well-structured plan includes measurable milestones. Tracking
            progress against these milestones provides a sense of accomplishment and direction.
          </Text>

          <View style={styles.bottomContainer}>
        {/* Your Card Component Goes Here */}
       <View style={styles.cardContainer}>
            {/* Card Content */}
           
          
       
      

      </View>
      </View>
          {/* Bottom Tabs */}
          <View style={{ marginTop: 5 }}>
            {/* Your bottom tabs implementation */}
          </View>
        </View>
      </ScrollView>
        {/* Leave Comment Button */}
        <View style={styles.bottomContainer}>
  {/* Leave Comment Button */}
  <TouchableOpacity
    style={[styles.iconContainer, styles.leaveCommentButton]} // Use a separate style for the larger "Leave Comment" button
    onPress={() => {
      // Handle Leave Comment button press
    }}
  >
    <Text style={styles.buttonText}>Leave Comment</Text>
  </TouchableOpacity>

  {/* Send Button */}
  <TouchableOpacity
    style={styles.iconContainer}
    onPress={() => {
      // Handle Send button press
    }}
  >
    <Icon name="send" size={20} color="white" style={styles.icon} />
  </TouchableOpacity>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    flexDirection:'row',
   
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop:10,
    marginLeft:120

  },
  scrollContainer: {
    flex: 1,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // half of the width and height to make it circular
    aspectRatio: 1, // Ensures the image maintains its aspect ratio as a square
    overflow: 'hidden', // half of the width and height to make it circular
  },
  icon: {
    marginRight: 5,
  },
  author: {
    fontSize: 13,
    color: "gray",
    marginLeft:15,
    marginRight: 20
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    padding: 15,
  },
  back: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    color: 'black',
    marginTop:15,
    width:'10%'
   
  },
  iconContainer: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 5,
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius:10,
    marginBottom:-45,
    width:400,
   marginLeft:-15
    
  },
  leaveCommentButton: {
    flex: 2, // Adjust the flex value to control the width of the "Leave Comment" button
    backgroundColor: '#50c878', // Customize the background color if needed
    marginRight: 10,
    borderRadius:20, // Adjust spacing between buttons
  },
  
  // ... (other styles)
  
  iconContainer: {
    backgroundColor: '#50c878', // Customize the background color if needed
    padding: 20,
    borderRadius: 5,
    borderRadius:20,
  },
});

export default BecomeScreen ;
