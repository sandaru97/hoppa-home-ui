import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
class TopDisplay extends React.Component {
  render() {
    return (
      <div
            style={{width:"100%",
              display: "flex",
              flexDirection: "row",
              "justify-content": "space-between",
              "margin":"5px",
              "font-size":"8vw",
            }}
          >

      <span style={{flex:1,"text-align":"left",}}>
      {this.props.coins}
      </span>
      <span style={{flex:1,"text-align":"right",}}>
      {this.props.coins}
      </span></div>
    );
  }
}



export default function App() {
  return (
    
    <View style={styles.container}>
      
      <TopDisplay coins="100"/>
      
      <Text style={
                    {
                        "color": "#EB9486",
                        "text-shadow": "0 0 50px #cccccc, 0 0 50px #cccccc, 0 0 50px #cccccc, 0 0 50px #cccccc, 0 0 50px #cccccc, 0 0 50px #cccccc, 0 0 50px #cccccc",
                        "fontSize": "15vw",
                        "-webkit-text-stroke": "2px black"
                    }
                }>
                    <b>HöPPA</b>
                    </Text><br/>
                    <Image style={{
                    width: "70vw",
                    height:"70vw",
                }} 
                source = {require("./assets/Homer.png")} />
            <View style={{"position":"absolute","bottom":"0","alignItems":"","padding-bottom":"10px",}}>
            {/* <button 
            src={require('./assets/icon.png')}
            style={styles.button}>Contact us</button> */}
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    "border-bottom":"10px solid #eb9486",
    "width":"100px",
    "height":"100px",
    "font-size" : "4vw"},
  container: {
    "border-bottom": "10px solid #eb9486",
    "border-top": "10px solid #eb9486",
    "height": "100%",
    "width": "100%",
    // backgroundColor: '#d7d9b1',
    backgroundColor: '#d7d9b1',

    // "background-color":"#d7d9b1",
    display: "flex",
    flex: 1,
    // backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    "align-items": "center",
    textAlign: 'center'
}, title: {
  position: "absolute",
  fontSize: "10vw",
  top: "15px",
  display: "flex",
},
});

