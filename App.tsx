/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import Home from './screens/Home';
import Posts from './screens/Posts';

const SettingsScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Settings!</Text>
  </View>
);

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {
      key: 'posts',
      title: 'Posts',
      focusedIcon: 'ab-testing',
      unfocusedIcon: 'ab-testing',
    },
    {
      key: 'settings',
      title: 'Settings',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    posts: Posts,
    settings: SettingsScreen,
  });

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default App;
