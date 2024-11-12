import React, { useState } from 'react';
import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const QuizApp = () => {
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(['', '', '']);

  // Questions and answers using require for local images
  const questions = [
    {
      id: 1,
      image: require('./img/bee.jpg'),
      correctAnswer: 'bee',
      options: [
        { label: 'Bee', value: 'bee' },
        { label: 'Cat', value: 'cat' },
        { label: 'Owl', value: 'owl' }
      ]
    },
    {
      id: 2,
      image: require('./img/crocodile.jpg'),
      correctAnswer: 'crocodile',
      options: [
        { label: 'Crocodile', value: 'crocodile' },
        { label: 'Zebra', value: 'zebra' },
        { label: 'Deer', value: 'deer' }
      ]
    },
    {
      id: 3,
      image: require('./img/deer.jpg'),
      correctAnswer: 'deer',
      options: [
        { label: 'Tiger', value: 'tiger' },
        { label: 'Rabbit', value: 'rabbit' },
        { label: 'Deer', value: 'deer' }
      ]
    }
  ];

  // Submit Answers and calculate score
  const handleSubmit = () => {
    const newScore = selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);

    setScore(newScore);
    Alert.alert(`Your Score: ${newScore} out of ${questions.length}`);
  };

  return (
      <View style={styles.container}>
        {/* Title of the Quiz App */}
        <Text style={styles.title}>ANIMAL QUIZ</Text>

        {questions.map((question, index) => (
            <View key={question.id} style={styles.questionContainer}>
              <Image source={question.image} style={styles.image} />
              <Text style={styles.questionText}>WHAT ANIMAL IS THIS?</Text>
              <RNPickerSelect
                  onValueChange={(value) => {
                    const updatedAnswers = [...selectedAnswers];
                    updatedAnswers[index] = value;
                    setSelectedAnswers(updatedAnswers);
                  }}
                  items={question.options}
                  style={pickerSelectStyles}
              />
            </View>
        ))}
        <Button title="Submit Answers" onPress={handleSubmit} />
      </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#90EE90',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    borderWidth: 2,
    borderColor: '#FF69B4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: 150,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
  questionText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
    color: '#FF69B4',
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#90EE90',
  }
});

// Styles for RNPickerSelect
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor:'#ccc',
    borderRadius :4 ,
    color : '#000',
    paddingRight :30 ,
    marginBottom :10 ,
  },

  inputAndroid:{
    fontSize :16 ,
    paddingVertical :8 ,
    paddingHorizontal :10 ,
    borderWidth :1 ,
    borderColor:'#ccc',
    borderRadius :4 ,
    color:'#000',
    paddingRight :30 ,
    marginBottom :10 ,
  }
});

export default QuizApp;
