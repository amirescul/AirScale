import React from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import Sliders from './screens/Sliders'
import {AppRegistry} from "react-native";
import About from "./screens/About";
import MainApp from "./screens/MainApp"
import SearchPage from "./screens/SearchPage"
import SearchBarList from "./screens/SearchBarList"

const AppNavigator = createStackNavigator({
  About:{screen: About,
    navigationOptions:{
      header: null,
    }
  },
  SearchPage:{screen: SearchPage,
    navigationOptions:{
      header: null,
    }
  },
  SearchBarList:{screen: SearchBarList,
    navigationOptions:{
      header: null,
    }
  },
  MainApp:{screen: MainApp,
    navigationOptions:{
      header: null,
    }
  },
  Sliders: {screen: Sliders,
    navigationOptions:{
      header: null,
    }
  }
},
  {
    initialRouteName:'Sliders'
  
});

const AppContainer = createAppContainer(AppNavigator)


export default class NavApp extends React.Component {

render() {
  return (
    <AppContainer/>
  )
       
}}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AirQuality', () => NavApp);
