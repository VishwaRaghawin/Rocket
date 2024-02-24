import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Dimensions, TouchableOpacity,SafeAreaView } from 'react-native';
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
import { AntDesign, MaterialIcons, Ionicons,FontAwesome5,FontAwesome  } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';




const DashboardScreen = ({ navigation }) => {
  const { openDrawer } = navigation;
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = screenWidth > 400 ? 400 : screenWidth * 0.95;
  const data = [
    { id: 1, imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYZMBchIZWjzYcaUuVcy9ndzsEXlxPn82llxIFu92547YfNe7f', text1: '10', text2: 'Upcoming', text3: 'Live Sessions' },
    { id: 2, imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRw8bemSBa2Kg9RiWCTq9nHuRzRaKgvLxkCW9GXjAzVK87A0vSr', text1: '1', text2: 'Message', text3: 'Live Sessions'  },
    { id: 3, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrNvnTyFnl50zI04DUOZQgqEHjecN-zejvY6WyL4CEJ4IclNW', text1: '0', text2: 'Meetings',text3: 'Live Sessions'  },
    { id: 4, imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQP7hAIUSLv1KIg3eWlg7rZzEsEye7q8N_t0IZHlxvQEBsHGW2D', text1: '2', text2: 'Comments',text3: 'Live Sessions'  },
    // Additional cards
    
  ];

  return (
   
   <DrawerSceneWrapper> 
     <ScrollView  style={{backgroundColor:'#F2F2F2'}}>
      <View style={styles.header}>
        <View style={{ right: 80, flexDirection: 'row', alignItems: 'center', marginTop: -30 }}>
          <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 20, marginTop: 10 }}>
            <AntDesign name="menu-fold" size={23} color="white" />
          </TouchableOpacity>
          <View style={{ marginLeft: 15, flexDirection: 'row', alignItems: 'center' }}>
            <Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: -5 }}>Hi Cameron Schofield</Text>
              <Text style={{ fontSize: 25, color: 'yellow' }}> 👋</Text>
            </Text>
            <TouchableOpacity  onPress={() => navigation.navigate('cart')} style={styles.iconContainer}>
              <MaterialIcons name="shopping-cart" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('notification')}style={styles.iconContainer}>
              <Ionicons name="notifications" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginLeft: -20, marginTop: 2 }}>
          <Text style={{ fontSize: 13, color: 'white' }}>You have new 20 events...</Text>
        </View>
      </View>
  
      {/* First set of cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {data.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.circleImage} />
            <View style={styles.textContainer}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.text1}</Text>
              <Text style={styles.text}>{item.text2}</Text>
              <Text style={styles.text}>{item.text3}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
  
      {/* Second set of cards (Account Balance cards) */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' }}>
          {/* Your existing code for the first card */}
          <View style={[styles.accountBalanceCard, { marginTop: -10 }]}>
            <View style={{ margin: 12, width: '95%', height: 150, borderRadius: 8, elevation: 4, backgroundColor: 'white' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ padding: 16 }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>$281.50</Text>
                  <Text style={{  fontSize: 15, color: 'grey' }}>Account Balance</Text>
                </View>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMIzoWbWcT6PzJB0FaKFjlT4eovTXjN9C1I2iuTSb4tNBuMm5',
                  }}
                  resizeMode="cover"
                  style={{ marginLeft: 100, marginTop: 30, width: 80, height: 80, borderRadius: 20 }}
                />
              </View>
            </View>
          </View>
  
          {/* Your second card */}
          <TouchableOpacity onPress={() => navigation.navigate('points')}>
  <View style={[styles.accountBalanceCard, { marginTop: -10 }]}>
    <View style={{ margin: 12, width: 350, height: 150, borderRadius: 8, elevation: 4, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>4923</Text>
          <Text style={{ fontSize: 15, color: 'grey' }}>Reward Points</Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMIzoWbWcT6PzJB0FaKFjlT4eovTXjN9C1I2iuTSb4tNBuMm5',
          }}
          resizeMode="cover"
          style={{ marginLeft: 140, marginTop: 30, width: 80, height: 80, borderRadius: 20 }}
        />
      </View>
    </View>
  </View>
</TouchableOpacity>

        </View>
      </ScrollView>
     
      {/* Add vertical ScrollView here */}
     <ScrollView>
  <View style={{width:'95%',marginLeft:10}}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft:10 }}>Learning Statistics</Text>
    {/* Replace the following with your actual StatisticsGraph component */}
    <View style={{ borderWidth: 1, borderColor: 'white', borderRadius: 8, overflow: 'hidden' }}>
      {/* Ensure the width of the card and the chart is the full width of the screen */}
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
          ],
        }}
      
        width={Dimensions.get('window').width -1} // Full width of the screen (minus 40 for padding and margin)
        height={200}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 8,
            margin: 0, // Remove any margin to ensure the chart fits perfectly
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          borderRadius: 8,
        }}
      />
    </View>
  </View>
</ScrollView>

      <Text  style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10,marginTop:10 }}>Notics</Text>
      

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[1, 2, 3, 4].map((cardNumber) => (
        <View key={cardNumber} style={[styles.card, { width: cardWidth ,height:100}]}>
          <Text style={styles.cardTitle}>New Private Course Published</Text>
          <View style={styles.contentContainer}>
           
            <Text style={styles.paragraphText}>Effective time management is crucial for productivity and achieving your goals. Here are some easy and practical tips to help you manage your time more effectively...</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </ScrollView>
     </DrawerSceneWrapper> 
  
  
  
  
  
  );
};

const styles = StyleSheet.create({
  card: {
    height: 120, // Adjust the height as needed
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop:-5,
    marginRight:150
  },
  contentContainer: {
    flex: 1,
  },
  iconContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjust as needed
    marginBottom: 5,
    marginTop:5
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWithIcon: {
   
    marginTop: -16,
    fontSize: 10,
    color: 'white',
  },
  paragraphText: {
    fontSize: 10,
    marginTop: 5,
    color: 'grey',
  },
  header: {
    backgroundColor:"#43D477",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 90,
    position: "relative",
  },
  scrollView: {
    flexDirection: 'row',
    marginTop: -70,
    marginBottom: 30,
  },
  iconContainer: {
    marginRight: 15,
    left:5
  },
  card: {
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    height: 145,
    width: Dimensions.get('window').width * 0.35, // Adjust the percentage as needed
    justifyContent: 'space-between',
    marginBottom: 20, // Add margin at the bottom of each card
  },
  textContainer: {
    alignItems: 'flex-start', 
    // Align text to the left
  },
  
  circleImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginBottom: 16,
    marginRight: 50,
  },
  text: {
    fontSize: 10,
    marginRight: 46,
   color:'grey'
  },
  iconContainer: {
    padding:7,
    borderRadius: 10, // Adjust the border radius as needed
    backgroundColor: '#36AA5F',
    opacity: 0.9,
    marginRight: 8,
    left:5
  },
});

export default DashboardScreen ;
