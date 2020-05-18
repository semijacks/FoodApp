import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import HomeScreen from "./src/screens/HomeScreen";
import ErrorBoundary from "./src/components/ErrorBoundary";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator();

export default App = (props) => {
  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ErrorBoundary>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{
                title: "Business Search",
                headerTitleStyle: {
                  fontSize: 20,
                  fontFamily: "Roboto-Regular",
                },
                headerLeft: () => (
                  <Feather
                    style={styles.homeIconStyle}
                    name="home"
                    color="black"
                  />
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  homeIconStyle: {
    fontSize: 24,
    marginLeft: 30,
  },
});
