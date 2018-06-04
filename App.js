import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import Page1 from "./src/Page1";
import Page2 from "./src/Page2";
import Page3 from "./src/Page3";
import About from "./src/About";
import Info from "./src/Info";

import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export class App extends Component {
  render() {
    return <View />;
  }
}

export default createBottomTabNavigator(
  {
    Home: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: "inicio",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={30} />
        )
      }
    },

    News: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: "notícias",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="newspaper" color={tintColor} size={30} />
        )
      }
    },

    Share: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: "compartilhar",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="share-variant" color={tintColor} size={30} />
        )
      }
    },

    About: {
      screen: About,
      navigationOptions: {
        tabBarLabel: "perfil",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-circle" color={tintColor} size={30} />
        )
      }
    },

    Info: {
      screen: Info,
      navigationOptions: {
        tabBarLabel: "info",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="information-outline" color={tintColor} size={30} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    order: ["About", "News", "Home", "Share", "Info"],
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: "#2980b9",
      inactiveTintColor: "gray"
    }
  }
);
