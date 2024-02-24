import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,SafeAreaView } from 'react-native';
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
import { AntDesign } from '@expo/vector-icons';
const FavoritesScreen = ({ navigation}) => {
  const { openDrawer } = navigation;
  return (
      <DrawerSceneWrapper>
    <SafeAreaView style={{flex:1}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' ,backgroundColor:'white'}}>
        <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 20, marginTop: 50 }}>
          <AntDesign name="menu-fold" size={23} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, color: "black", marginTop: 50, marginLeft: 132,textAlign:'center' }}>Favorite</Text>
      </View>
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://img.freepik.com/free-vector/personal-files-concept-illustration_114360-4503.jpg?size=626&ext=jpg' }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}> No Favorite!</Text>
        <Text style={styles.description}>Add your favorite courses to wish list.</Text>
      </View>
    </View>
    </SafeAreaView>
      </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
   
  },
  description: {
    fontSize: 13,
    color: '#555',
  },
});

export default FavoritesScreen;











