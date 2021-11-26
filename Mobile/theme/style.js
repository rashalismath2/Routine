import { DefaultTheme} from 'react-native-paper';

import {Dimensions, StyleSheet} from "react-native"

export const theme = {
    ...DefaultTheme,
    dark:true,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#222222',
      accent: '#2D97F5',
      secondary:"#EE7171",
      buttonText:"#fff",
      textFields:"#F9F9F9",
      text:"#707070",
      backgroundColor: '#F4F4F4',
      yellow:"#F79E1B",
      red:"#DB3022",
      orange:"#F74F1B",
      green:"#29A65A"
    },

};

export const globalStyles=StyleSheet.create({
  textInput:{
    backgroundColor:"white"
  },
  container:{
    padding:Dimensions.get("window").width<650?15:40,
    flex:1,
    paddingTop:18
  },
  button:{
    justifyContent:"center",
    alignContent:"center",
    borderRadius:8,
    height:45,
    marginTop:35,
    color:"white",
    backgroundColor:theme.colors.accent
},
validationMessages:{
  color:"red",
  marginTop:5,
  marginBottom:10,
}
})

