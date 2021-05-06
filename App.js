import React, { useState } from 'react';
import { ImageBackground, StyleSheet, TextInput, Text, View, Button, CheckBox } from 'react-native';

export default function App() {
  const [isSelected, setSelection] = useState(false);
  return (
      <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>
        <Text style={styles.headtext}>Create your account</Text>
        <View style={styles.formtext}>
          <View style={styles.form}>
            <TextInput style={styles.inputtext} placeholder="Name" placeholderTextColor="grey" type="text" />
            <TextInput style={styles.inputtext} placeholder="Email" placeholderTextColor="grey" type="email" />
            <TextInput style={styles.inputtext} placeholder="Phone No." placeholderTextColor="grey" type="text" />
            <TextInput secureTextEntry={true} style={styles.inputtext} placeholder="Password" placeholderTextColor="grey" type="date" />
            <TextInput secureTextEntry={true} style={styles.inputtext} placeholder="Confirm Password" placeholderTextColor="grey" type="text" />
            <View style={styles.check}>
              <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
              <Text style={styles.inputtxt} color="white">&nbsp; I accept all terms and conditions.</Text>
            </View>
          </View>
        </View>
        <View style={styles.btn}>
        <Button color="grey" title="Register" />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor:'black'
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 15,
    marginTop:20,
    marginBottom: 20,
    borderBottomWidth: 5,
    borderBottomColor: 'white'
  },
  headtext: {
    fontSize: 25,
    color: 'white',
    paddingBottom: 10,
    marginBottom: 20
  },
  formtext: {
    backgroundColor: 'white',
    marginTop:10,
  },
  inputtext: {
    fontSize:20,
    color: 'black',
    textAlign: 'center',
    paddingTop:10,
    paddingBottom: 10,
    marginTop:10,
    marginBottom:10,
    borderBottomWidth: 5,
    borderBottomColor: 'black',
  },
  check: {
    flexDirection: "row",
    marginBottom: 15
  },
  inputtxt: {
    color: 'black',
    margin:-2
  },
  btn:{
    paddingTop:10,
    paddingBottom:10,
    borderRadius:20,
    marginTop:10
  }
});



