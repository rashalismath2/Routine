import React from "react"
import {View} from "react-native"
import * as Animatable from "react-native-animatable";

export default function Line({style,width=80, height=10}){

    return (
        <View style={{
            ...style,
            backgroundColor:"#c6c8cc",
            height:height,
            width:width,
            borderRadius:5
        }}>
            <Animatable.View
                    duration={500}
                    animation="lightSpeedOut"
                    iterationCount="infinite"
                    // direction="reverse"
                    easing="linear"
                    style={{
                        width: 10,
                        backgroundColor: "white",
                        height: "100%"
                    }}
                >
            </Animatable.View>
      </View>
    )
}