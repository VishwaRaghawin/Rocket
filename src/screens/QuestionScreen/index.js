
import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5  } from '@expo/vector-icons';
const QuestionScreen = () => {
  const navigation = useNavigation(); 

  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = [
    { question: 'Which image is about a Teacher Related?', answers: ['https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://plus.unsplash.com/premium_photo-1682141288451-9919b15490f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1612299273045-362a39972259?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D'], correctAnswer: 0 },
    { question: 'Which image is about a Music Related?', answers: ['https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1507307135715-c45473a1c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://plus.unsplash.com/premium_photo-1682141288451-9919b15490f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D'], correctAnswer: 1 },
    { question: 'Which image is about a Media Related?', answers: ['https://images.unsplash.com/photo-1531546932101-155fd62dc6a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1596182170988-18a5b63899b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://plus.unsplash.com/premium_photo-1678752716884-1f1cf64fb85c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1579389082289-3d6922d506c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D'], correctAnswer: 2 },
    { question: 'Which image is about a Laptop Related?', answers: ['https://plus.unsplash.com/premium_photo-1682141288451-9919b15490f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://plus.unsplash.com/premium_photo-1664300816077-6c9c6be0cf3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1622463461333-611830d028bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D'], correctAnswer: 3 },
    { question: 'Which image is about a Relation Related?', answers: ['https://images.unsplash.com/photo-1612299273045-362a39972259?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://plus.unsplash.com/premium_photo-1663050866626-441192d909ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1533229613598-751dc97ec35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG1hbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D'], correctAnswer: 0 }
  ];

  const handleAnswer = (selectedAnswerIndex) => {
    if (selectedAnswerIndex === questions[questionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // End of quiz, navigate to result screen or first question
      if (score < 40) {
        // Navigate to fail screen
      } else {
        // Navigate to result screen
      }
      // If it's the end of the quiz, reset to the first question
      setQuestionIndex(0);
    }
  };
  

  const renderImage = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => handleAnswer(index)}>
        <Image source={{ uri: item }} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

<View style={styles.header}>
  

<TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.back}
  >
    <FontAwesome5 name="chevron-left" size={23} color='white' />
  </TouchableOpacity>
  <Text style={styles.headerText}>Midterm Quiz</Text>

            </View>
            <View style={{marginTop: -105,marginRight:255 }}>
  <Text style={{ fontSize: 19, color: 'white' ,fontWeight:'bold'}}>Quiz Review</Text>
</View>
<Text style={{ fontSize: 12.5, color: 'white' ,marginRight:120}}>Company your answers with correct ones.</Text>

<Text style={{ fontSize: 12.5, color: 'white',marginRight:310,marginTop:10}}>Question</Text>

<View style={styles.bottomBox}></View>





      <Text style={{ marginTop: 50,fontWeight:'bold',marginRight:80,fontSize:17 }}>{questions[questionIndex].question}</Text>
      <FlatList
        data={questions[questionIndex].answers}
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
       
      />

      
<TouchableOpacity
  style={styles.buttonContainer}
  onPress={() => handleAnswer()}
>
  <Text style={styles.buttonText}>
    {questionIndex === questions.length - 1 ? "Go Back" : "Next"}
  </Text>
</TouchableOpacity>

</View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
   
    width: '90%',
    height:55, // Adjust width as needed
    backgroundColor: '#43D477', // Change background color as needed
    borderRadius: 20,
    marginBottom:15 // Adjust border radius as needed
  },
  image: {
    width: Dimensions.get('window').width / 2 - 20, // Adjust width based on the device width
    height: 200,
    margin: 10,
    marginTop:30,
    borderRadius:10

  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    padding:15
  },
  
  header: {
    backgroundColor:"#43D477",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding:110,
    alignItems: 'center',
    flexDirection:'row',
    width:430
    
  },
  back: {
   
    padding: 12,
    borderRadius: 10,
    color: 'white',
    width:'20%',
    marginRight: 20,
    marginTop:-60,
    marginLeft: -90 
  },
  headerText: {
    marginTop:-63,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft:75
   },
    bottomBox: {
    position: "absolute",
    width: 350,
    height: 7,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#f5f5f5",
    bottom: 695, // Adjust the bottom position as needed
  },
 
});

export default QuestionScreen;