import React, { Component } from 'react';
import { View, Pressable, Text, TextInput, TouchableOpacity, Button, StyleSheet, Image, password} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import styles from './style';
const logo = require("../login/Bay-Side.png");
const google = require("../login/Colorful-google-logo-design-on-transparent-PNG-1.png");
import Feather from 'react-native-vector-icons/Feather';

const Icons ={
  Ionicons,

};

export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }


  InsertRecord=()=>{
    var Email = this.state.email;
    var Password = this.state.password;

    if ((Email.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!!!");
    }else{
      var APIURL = "http://192.168.1.7/boatRentalApp/boatRentalApp/backend/login.php";

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
            
      var Data ={
        Email: Email,
        Password: Password
      };

      fetch(APIURL,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        alert(Response[0].Message)
        if (Response[0].Message == "Success") {
          console.log("true")
          this.props.navigation.navigate("HomeScreen");
        }
        console.log(Data);
      })
      .catch((error)=>{
        console.error("ERROR FOUND" + error);
      })
    }
    
    
  }

  updateSecureTextEntry(){
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  render() {
    return(
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={logo}
          />
          <Text style={styles.textTo}>Login</Text>
          <Text style={styles.label}>Username </Text>
          <TextInput style={styles.txtInput} placeholder="Username"
          onChangeText={email=>this.setState({email})}
          />
          <Text style={styles.label}>Password</Text>
          {/* <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          /> */}
          
          <TextInput style={styles.txtInput} placeholder="Password" 
          secureTextEntry={this.state.secureTextEntry ? true : false}
          onChangeText={password=>this.setState({password})}
          />   
          <View style={{display: 'flex-box', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: "black", marginRight: 120}}>Remember me </Text> 
            <Text style={{color:"black"}}>Forgot Password </Text> 
          </View>
  
          <Pressable style={styles.login} onPress={()=>{
                      this.InsertRecord()
                    }}>
            <Text style={styles.txtLog}>Login </Text>
          </Pressable>
          <Pressable onPress={() => Alert.alert('Login sa google')}>
            <Image
              style={styles.google}
              source={google}
            />
            </Pressable>
          <Text style={styles.create} >Doesn't have an account? <Text style={styles.underline} onPress={() => Alert.alert('Password Incorrect')}>Create One</Text> </Text>
          </View>
          
  
    );
  }
}
const styles = StyleSheet.create({
    underline: {textDecorationLine: 'underline', color: 'blue'},
    container: {
      alignItems: "center",
      paddingTop: 50,
    },
    create: {
       marginTop: 10,
    },
   google: {
    marginTop: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
   },
    logo: {
      alignSelf: "center",
      backgroundColor: "#BBE9FF",
      width: "90%",
      height: 250,
      borderTopLeftRadius: 40, 
      borderTopRightRadius: 120, 
      borderBottomLeftRadius: 120,
      borderBottomRightRadius: 40, 
    },
    textTo:{
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 40,
      color: "black",
      width: "100%",
      height: 50,
      fontWeight: "bold",
    },
    txtInput: {
      padding: 10,
      height: 50,
      marginTop: 5,
      marginBottom: 20,
      borderColor: "black",
      borderWidth: 1,
      width: "90%",
      borderRadius: 10,
    },
    label:{
      fontSize: 20,
      marginRight: 250,
    },
  
    login: {
      marginTop: 20,
      backgroundColor: "#BBE9FF",
      width: 300,
      height: 50,
      borderRadius: 20,
    },
    txtLog:{
      alignSelf: "center",
      marginTop: 10,
      fontSize: 20,
    }
  });