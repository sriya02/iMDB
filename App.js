// App.js is the entry point of our application.
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieListScreen from "./screens/MovieListScreen/MovieListScreen.main";
import MovieDetailScreen from "./screens/MovieDetailScreen/MovieDetailScreen.main";
import MovieFilterScreen from "./screens/MovieFilterScreen/MovieFilterScreen.main";

/* TODO: 

  This app has three screens:
    (1) MovieListScreen
    (2) MovieDetailScreen
    (3) MovieFilterScreen

  Screens (1) and (2) are on the same navigation stack.
  Screen (3) is presented modally.

  This setup is identical to the setup in the React Navigation documentation.
  Read the example carefully to set up this app's screen heirarchy in a similar manner.

  https://reactnavigation.org/docs/modal */
  /*
  function MoviesListScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
        <Button
          onPress={() => navigation.navigate('MovieFilterScreen')}
          title="Filter"
        />
      </View>
    );
  }

  function MovieFilterScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    );
  }
  */

  const Stack = createStackNavigator();

  export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="MovieListScreen" component={MovieListScreen}/>
          <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen}/>
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal '}}>
          <Stack.Screen name="MovieFilterScreen" component={MovieFilterScreen}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
