import React from "react"
import {createAppContainer,createSwitchNavigator} from "react-navigation"


import Spalsh from "../screens/splash/splash"


const AuthenticationSwtichNavigator=createSwitchNavigator({
    Spalsh:Spalsh,
})

export default createAppContainer(AuthenticationSwtichNavigator)