import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome5  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const CartScreen = () => {
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
        <Text style={styles.headerText}>Cart</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={require('../../../assets/image/ima.png')}
          style={styles.image}
        />
        <Text style={{fontSize:22,fontWeight:'bold'}}>Cart is Empty</Text>
        <Text style={styles.text}>Add your favorite courses to cart.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    flexDirection:'row'
  },
  headerText: {
    color: 'black',
    fontSize: 22,
    marginTop:20,
   marginLeft:135  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width:120,
    height:120
    // Add additional styles as needed
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop:2,
    fontSize:15,
    color:'grey'
    // Add additional styles as needed
  },
  back: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    color: 'black',
    marginTop:20,
    width:'10%',
    marginLeft:10
   
  },
});

export default CartScreen;
