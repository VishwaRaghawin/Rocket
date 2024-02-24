
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const FirstRoute = () => (
  <ScrollView>
  <Card style={styles.card}>
  <View style={styles.cardContent}>
    {/* Left Content */}
    <View style={[styles.contentColumn, styles.leftContent]}>
      {/* Image 1 */}
      <Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3d1x2mfHVaK9g1FCq8Nny5PRx1_OZ-8YUPc6NaElFjfjwU6q'}}
        resizeMode="cover"
        style={{ width: 60,
          height: 60,
          borderRadius: 20,}}
      />
      {/* Text 1 */}
      <Text style={{fontWeight:'bold',fontSize:14 ,marginTop:5}}>4903</Text>
      {/* Text 2 */}
      <Text style={{color:'grey',fontSize:10.5}}>Remained</Text>
      {/* Text 3 */}
      <Text style={{color:'grey',fontSize:10.5}}>Points</Text>
    </View>
    {/* Center Content */}
    <View style={[styles.contentColumn, styles.centerContent]}>
      {/* Image 2 */}
      <Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrokDEu1A-N59aSd7ukjxwf0dE_ANXMEg5xq9SxA05Dp2cFbsn'}}
        resizeMode="cover"
        style={{ width: 65,
          height: 65,
          borderRadius: 20,}}
      />
      {/* Text 4 */}
      <Text style={{fontWeight:'bold',fontSize:14,marginTop:5}}>4903</Text>
      {/* Text 5 */}
      <Text style={{color:'grey',fontSize:10.5}}>Total</Text>

      <Text style={{color:'grey',fontSize:10.5}}>Points</Text>
    </View>
    {/* Right Content */}
    <View style={[styles.contentColumn, styles.rightContent]}>
      {/* Image 3 */}
      <Image
        source={{uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRbcm_HG1xqgKDJWarnVKRRY8EC_AYpKjnEq-txp5NumumBnlYT'}}
        resizeMode="cover"
        style={{ width: 65,
          height: 65,
          borderRadius: 20,}}
      />
      {/* Text 6 */}
      <Text style={{fontWeight:'bold',fontSize:14,marginTop:5}}>0</Text>
      {/* Text 7 */}
      <Text style={{color:'grey',fontSize:10.5}}>Spent</Text>
      {/* Text 8 */}
      <Text style={{color:'grey',fontSize:10.5}}>Points</Text>
    </View>
  </View>
</Card>

    <Text style={styles.balancesHistoryText}>Points History</Text>
    {[...Array(10)].map((_, index) => (
      <Card key={index} style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Image
              source={{
                uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTp3Xp0K3CDXLBRvg8m2z0l5xDY9PRkPxAWd3njqsnvsvzVwvZz',
              }}
              resizeMode="cover"
              style={styles.transactionImage}
            />
            <View style={styles.transactionDetails}>
              <Text style={styles.cardTitle}>Certificate Process</Text>
              <Text style={styles.dateText}>27 Jun 2023|13:16</Text>
            </View>
          </View>
          <Text style={styles.transactionAmount}>$80+</Text>
        </View>
      </Card>
    ))}
  </ScrollView>
);

const PointsScreen = () => {
  const navigation = useNavigation();

  return (
   
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.back}
  >
    <FontAwesome5 name="chevron-left" size={20} color='black' />
  </TouchableOpacity>
          <Text style={styles.headerText}>Reward Points</Text>
        </View>
        <FirstRoute />
      </View>
   
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  back: {
    marginLeft:20,
     padding: 12,
     borderRadius: 10,
     color: 'black',
     width:'10%',
     marginTop:25
    
   },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',

  
  },
  menuButton: {
    marginLeft: 20,
    marginTop: 50,
  },
  headerText: {
    fontSize: 22,
    color: "black",
    marginTop: 20,
    textAlign: 'center',
    marginLeft: 85
  },
  card: {
    margin: 12,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  cardContent: {
    flexDirection: 'row',
  },
  leftContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:10
  },
  cardImage: {
    marginLeft: 140,
    marginTop: 30,
    width: 80,
    height: 80,
    borderRadius: 20,
  },
 
  balancesHistoryText: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionImage: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginTop: -10, 
  },
  transactionDetails: {
    marginLeft: 90,
    marginTop: -70,
  },
  dateText: {
    fontSize: 12,
    color: 'gray',
    marginRight: 15,
    marginTop: 10,
  },
  transactionAmount: {
   marginRight:10,
    marginTop: 31,
    color: '#50c878',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Additional styles for card content container
  },
  contentColumn: {
    alignItems: 'center',
    flex: 1,
    // Common styles for content columns
  },
};

export default PointsScreen;
