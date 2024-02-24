import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet, Dimensions,TouchableOpacity,SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';
  import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
import { AntDesign } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;

const SubscriptionScreen = ({ navigation }) => {
  const { openDrawer } = navigation;

return ( 
    <DrawerSceneWrapper>
  <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>
      <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 20, marginTop: 50 }}>
        <AntDesign name="menu-fold" size={23} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 22, color: "black", marginTop: 45, marginLeft: 110 }}>Subscription</Text>
    </View>

    <ScrollView style={{ flex: 1 }}>
      {/* Static Card */}
      <Card containerStyle={styles.cardContainer}>
        {/* Card Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVqMlaY2OMDePLE0e-Ge9MSF-GtOUvvl8hg&usqp=CAU',
            }}
            style={styles.cardImage}
          />
        </View>

        {/* First Text Content */}
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>
          No Subscription
        </Text>

        {/* Second Text Content */}
        <Text style={styles.textContent}>You have no active subscription plan!</Text>
      </Card>
      <Text style={styles.selectPlanText}>Select a Plan</Text>
      {/* Scrollable Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* Card 2 */}
        <Card containerStyle={styles.scrollableCard}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://img.freepik.com/premium-photo/trophy-cup-vector-illustration-flat-style-isolated-minimal-background_941097-11041.jpg?size=626&ext=jpg' }}
              style={{  width: '60%',
              height: 145,
              resizeMode: 'cover',
              borderRadius: 24,}}
            />
          </View>
          <Text style={styles.cardText}>Bronze</Text>
          <Text style={styles.textContent}>Suggest for personal usage</Text>
          <Text style={{marginTop:20,fontSize:35,color:'lightgreen',textAlign:'center'}}>$20</Text>
          <Text style={styles.textContent}> 🔑 15 Days of subscription</Text>
          <Text style={styles.textContent}>  &#8226; 🎓100 Courses subscription</Text>
          <TouchableOpacity style={styles.purchaseButton}>
          <Text style={styles.purchaseButtonText}>Purchase</Text>
        </TouchableOpacity>
        </Card>

        {/* Card 3 */}
        <Card containerStyle={styles.scrollableCard}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://img.freepik.com/premium-photo/trophy-cup-vector-illustration-flat-style-isolated-minimal-background_941097-11018.jpg?size=626&ext=jpg' }}
              style={{  width: '60%',
              height: 145,
              resizeMode: 'cover',
              borderRadius: 24,}}
            />
          </View>
          <Text style={styles.cardText}>Gold</Text>
          <Text style={styles.textContent}>Suggest for big bussiness</Text>
          <Text style={{marginTop:20,fontSize:35,color:'lightgreen',textAlign:'center'}}>$100</Text>
          <Text style={styles.textContent}> 🔑 30 Days of subscription</Text>
          <Text style={styles.textContent}>  &#8226; 🎓1000 Courses subscription</Text>
          <TouchableOpacity style={styles.purchaseButton}>
          <Text style={styles.purchaseButtonText}>Purchase</Text>
        </TouchableOpacity>
          
        </Card>

        {/* Card 4 */}
        <Card containerStyle={styles.scrollableCard}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://img.freepik.com/premium-vector/metal-shield-with-frame-trophy-blank-silver-steel-metallic-panel-with-golden-crown-gold-ribbon-award-trophy-certificate-template-isolated-white-background_134830-360.jpg?size=626&ext=jpg' }}
              style={{  width: '42%',
              height: 140,
              resizeMode: 'cover',
              borderRadius: 24,}}
            />
          </View>
          <Text style={styles.cardText}>Gold</Text>
          <Text style={styles.textContent}>Suggest for small bussiness</Text>
          <Text style={{marginTop:20,fontSize:35,color:'lightgreen',textAlign:'center'}}>$50</Text>
          <Text style={styles.textContent}> 🔑 30 Days of subscription</Text>
          <Text style={styles.textContent}>  &#8226; 🎓400 Courses subscription</Text>
          <TouchableOpacity style={styles.purchaseButton}>
          <Text style={styles.purchaseButtonText}>Purchase</Text>
        </TouchableOpacity>
          
        </Card>
      </ScrollView>
    </ScrollView>
    </ScrollView>
      </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 24,
    height: 230,
    marginTop: 20,
   
  },
  scrollableCard: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 24,
    marginTop: 5,
    width: windowWidth * 1.1 -60,
    height: 450, // Take up 50% of the screen width with margin adjustment
    marginBottom:5
  },
  imageContainer: {
    alignItems: 'center',
  },
  cardImage: {
    width: '40%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 24,
    marginTop:20
  },
  scrollView: {
    marginTop: 10,
  },
  cardText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  textContent: {
    fontSize: 13,
    marginTop: 5,
    textAlign: 'center',
    color:'grey'
  },
  purchaseButton: {
    backgroundColor: '#43D477',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 35,
    alignItems: 'center',
    height:55
  },
  purchaseButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign:'center'
  },
  selectPlanText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    marginTop: 15,
    fontWeight:'bold',
    marginLeft:15
  },
});

export default SubscriptionScreen ;
