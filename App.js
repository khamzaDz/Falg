import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen"
import { StatusBar } from "react-native";
import colors from "./assets/colors/colors";

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Главное" 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === "Главное") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Избранное") {
                iconName = focused ? "heart" : "heart-outline";
              } else if (route.name === "Профиль") {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === "Поиск") {
                  iconName = focused ? "search" : "search-outline";
              } else if (route.name === "фальг") {
                iconName = focused ? "footsteps" : "footsteps-outline";
            }

              return (
                <Ionicons
                  name={iconName}
                  size={26}
                  color={focused ? colors.kaka : colors.grey}
                />
              );
            },
            tabBarActiveTintColor: colors.kaka,
            tabBarInactiveTintColor: colors.grey,
            headerShown: false,
          })}
        >
          <Tab.Screen name="Главное" component={HomeScreen} />
          <Tab.Screen name="Поиск" component={HomeScreen} />
          <Tab.Screen name="фальг" component={HomeScreen} />
          <Tab.Screen name="Избранное" component={HomeScreen} />
          <Tab.Screen name="Профиль" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
