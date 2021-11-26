import React,{useState,useEffect} from "react"
import {StyleSheet,AsyncStorage, View,Text, Image, Dimensions } from "react-native"
import { connect } from "react-redux"
import { theme } from "../../../theme/style"

import allActions from "../../redux/allActions"

 const Spalsh=({navigation,setUserToken})=>{

    useEffect(() => {
        // const getToken = async () => {
        //     const value = await AsyncStorage.getItem('token');
        //     if (value !== null) {
        //         setUserToken(value)
        //         navigation.navigate("Dashboard")
        //     }
        //     else{
        //         navigation.navigate("Login")
        //     }
        //   };
        // getToken()
        // navigation.navigate("Login")
    }, [])

    return <Image style={{width:Dimensions.get("window").width,height:Dimensions.get("window").height}} source={require("../../../assets/splash.png")} />
}

const mapDispatchToProps=dispatch=>({
    setUserToken:(token)=>dispatch(allActions.authentication.setUserToken(token))
  })
  
export default connect(null,mapDispatchToProps)(Spalsh)

const styles=StyleSheet.create({
    container:{
        backgroundColor:theme.colors.backgroundColor,
        flex:1,
        justifyContent:"center",
        alignContent:"center"
    }
})