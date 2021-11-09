import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Header } from "react-native-elements";
import db from "../config";

export default class EnterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      profile: "",
    };
  }

  submitProfile = () => {
    db.collection("profiles").add({
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      profile: this.state.profile,
    });

    this.setState({
      name: "",
      email: "",
      contact: "",
      profile: "",
    });

    //display an alert using ToastAndroid

    //ToastAndroid.show('Your profile has been submitted', SHORT)
    ToastAndroid.show("Your profile has been submitted", ToastAndroid.SHORT);
    //show('Your profile has been submitted', ToastAndroid.SHORT)
    //ToastAndroid.Alert('Your profile has been submitted', ToastAndroid.SHORT)
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Header
          backgroundColor={"#A1C181"}
          centerComponent={{
            text: "JOB PORTAL",
            style: { color: "black", fontSize: 25, fontWeight: "BOLD" },
          }}
        />
        <TextInput
          placeholder="Name"
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.name}
          style={styles.title}
        />
        <TextInput
          placeholder="E-mail"
          onChangeText={(text) => {
            this.setState({
              email: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.email}
          style={styles.author}
        />
        <TextInput
          placeholder="Contact Number"
          onChangeText={(text) => {
            this.setState({
              contact: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.contact}
          style={styles.author}
        />
        <TextInput
          placeholder="Explain your Profile in Detail "
          onChangeText={(text) => {
            this.setState({
              profile: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.profile}
          style={styles.storyText}
          multiline={true}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitProfile}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    color: "black",
    padding: 6,
  },
  author: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  storyText: {
    height: 250,
    borderWidth: 2,
    margin: 10,
    padding: 6,
    textAlignVertical: "top",
  },
  submitButton: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#FE7F2D",
    width: 80,
    height: 40,
    color: "black",
  },
  buttonText: {
    textAlign: "center",

    fontWeight: "bold",
    color: "black",
  },
});
