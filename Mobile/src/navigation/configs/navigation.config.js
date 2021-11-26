import { Dimensions, Easing } from "react-native";
import { CardStyleInterpolators } from "react-navigation-stack";
import { theme } from "../../../theme/style";

const config={
  duration:500,
  easing:Easing.linear
}

const navigationAnimation = {
  gestureEnabled:true,
  gestureDirection:"horizontal",
  cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
};

export default navigationConfigs=(paddingLeft=0,paddingRight=0,animationsEnabled=true)=>  ({
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTitleStyle:{
        textAlign:"center",
        color:"white",
        paddingRight:paddingRight,
        paddingLeft:paddingLeft
      },
      headerTintColor: "white",
      ...(animationsEnabled?navigationAnimation:{})
    }
})
export const navigationOptions=(paddingLeft=0,paddingRight=0)=>  ({
    headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTitleStyle:{
        textAlign:"center",
        color:"white",
        paddingRight:paddingRight,
        paddingLeft:paddingLeft
      },
      headerTintColor: "white",
})