import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, Text, View, CheckBox, TouchableOpacity } from 'react-native';

export default function App() {
  const [isSelected, setSelection] = useState(false);

  const showAlert = () => {
    Alert.alert(
      'Registered Successfully'
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registration</Text>
      <Text style={styles.headtext}>Create new account</Text>
      <Text style={styles.text}>*All fields are mandatory</Text>
      <View style={styles.formtext}>
        <View style={styles.form}>
          <TextInput style={styles.inputtext} placeholder="Name" placeholderTextColor="grey" type="text" />
          <TextInput style={styles.inputtext} placeholder="Email" placeholderTextColor="grey" type="email" />
          <TextInput style={styles.inputtext} placeholder="Phone No." placeholderTextColor="grey" type="text" />
          <TextInput secureTextEntry={true} style={styles.inputtext} placeholder="Password" placeholderTextColor="grey" type="date" />
          <TextInput secureTextEntry={true} style={styles.inputtext} placeholder="Confirm Password" placeholderTextColor="grey" type="text" />
        </View>
        <View style={styles.check}>
          <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
          <Text style={styles.inputtxt} color="white">&nbsp;I accept all terms and conditions.</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity color="grey" title="Register" onPress={showAlert}><Text style={styles.press}>Register</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'black'
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 15,
    marginTop: 20,
    marginBottom: 80,
    borderBottomWidth: 5,
    borderBottomColor: 'white'
  },
  headtext: {
    fontSize: 25,
    color: 'white',
    paddingBottom: 10,
    marginBottom: 20
  },
  text: {
    fontSize: 15,
    color: 'red',
    paddingBottom: 5,
    marginBottom: 10
  },
  form:{
    backgroundColor: 'white'
  },
  formtext: {
    backgroundColor: 'white',
  },
  inputtext: {
    fontSize: 18,
    color: 'black',
    paddingBottom: 10,
    paddingLeft:15,
    marginTop: 10,
    borderBottomWidth: 10,
    borderBottomColor: 'black',
  },
  check: {
    marginTop: 10,
    paddingLeft:8,
    flexDirection: "row",
    marginBottom: 10
  },
  inputtxt: {
    color: 'black',
    margin: 7
  },
  press: {
    fontSize: 20,
    alignSelf: "center",
    color: 'white',
    backgroundColor: 'grey',
    paddingTop: 20,
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 20,
    borderRadius: 10,
    marginTop: 70
  }
});



