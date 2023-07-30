import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import axios from 'axios'

export default function Restapi() {
  let [quote, setQuote] = React.useState('')
  let [source, setSource] = React.useState('')

  const fetchApiCall = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      "method": "GET",
    })
      .then(response => response.json())
      .then(response => {
        setQuote(response.title);
        setSource(response.userId)
      })
      .catch(err => {
        console.log(err);
      });
  }

  const axiosApiCall = () => {
    axios({
      "method": "GET",
      "url": "https://jsonplaceholder.typicode.com/todos/1",
    })
      .then((response) => {
        setQuote(response.data.title);
        setSource(response.data.userId)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Native API Calls</Text>
      <Text>Example with fetch and Axios</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Use Fetch API</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={axiosApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Use Axios</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>{quote}</Text>
        <Text style={styles.source}>{source}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  title: {
    fontSize: 35,
    color: '#fff'
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#0645AD'
  },
  buttonText: {
    color: '#fff'
  },
  quote: {
    fontSize: 17,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  source: {
    textAlign: 'right',
    marginTop: 15
  },
  quoteContainer: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5
  }
});