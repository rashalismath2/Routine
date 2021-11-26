import React from "react"
import { AntDesign } from '@expo/vector-icons';
import { tabViewMarginLeft } from "../../theme/style";

export default function BackButton({navigation}){
    return(<AntDesign style={{
        marginLeft:tabViewMarginLeft
    }} onPress={()=>{navigation.goBack()}} name="arrowleft" size={24} color="white" />)
}