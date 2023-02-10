import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Button, IconButton, MD3Colors} from 'react-native-paper';
import {Appbar} from 'react-native-paper';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Appbar.Header>
        <Appbar.Content title="Title" />
        <Appbar.Action isLeading icon={'magnify'} onPress={() => {}} />
      </Appbar.Header>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            totam autem doloribus architecto quam explicabo ipsam obcaecati,
            unde sint natus eveniet nemo. Incidunt delectus sunt id
            necessitatibus iusto earum itaque!
          </Text>

          <IconButton
            icon="camera"
            mode={'contained'}
            iconColor={MD3Colors.tertiary20}
            containerColor={MD3Colors.tertiary80}
            size={20}
            onPress={() => console.log('Pressed')}
          />

          <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Press me
          </Button>

          {/*<Section title="Step One">*/}
          {/*  Edit <Text style={styles.highlight}>App.tsx</Text> to change this*/}
          {/*  screen and then come back to see your edits.*/}
          {/*</Section>*/}

          {/*<Section title="See Your Changes">*/}
          {/*  <ReloadInstructions />*/}
          {/*</Section>*/}

          {/*<Section title="Debug">*/}
          {/*  <DebugInstructions />*/}
          {/*</Section>*/}

          {/*<Section title="Learn More">*/}
          {/*  Read the docs to discover what to do next:*/}
          {/*</Section>*/}

          {/*<LearnMoreLinks />*/}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
