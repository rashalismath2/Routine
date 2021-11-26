import React,{useState} from 'react';
import { StyleSheet, StatusBar, View} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './theme/style';

import AuthenticationSwtichNavigator from "./src/navigation/authentication.navigation"

global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
global.FormData = global.originalFormData || global.FormData;

if (window.FETCH_SUPPORT) {
  window.FETCH_SUPPORT.blob = false;
} else {
  global.Blob = global.originalBlob || global.Blob;
  global.FileReader = global.originalFileReader || global.FileReader;
}


const getFonts=()=>Font.loadAsync({
  "roboto-bold":require("./assets/fonts/Roboto-Bold.ttf"),
  "roboto-regular":require("./assets/fonts/Roboto-Regular.ttf"),
})


export default function App() {
  const [fontsLoaded,setFontsLoaded]=useState(false)

  if(fontsLoaded){
      return (
        <Provider store={store}>
          <PaperProvider  theme={theme}>
           <SafeAreaProvider>
              <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
                <AuthenticationSwtichNavigator  />
              </SafeAreaView>
            </SafeAreaProvider>
          </PaperProvider>
        </Provider>
    );
  }
  else{
      return(<AppLoading
           startAsync={getFonts}
           onError={console.warn}
           onFinish={()=>setFontsLoaded(true)} />)
  }
 
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
