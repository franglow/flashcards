import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import AddCard from './components/AddCard'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import AddDeck from './components/AddDeck'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Constants } from 'expo'

const Tabs = TabNavigator({
  // Component History
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      // tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  // --- Component End
  // Component AddEntry
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      // tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
  // --- Component End
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
//FIXME    
    // activeTintColor: Platform.OS === 'ios' ? purple : white,
    // style: {
    //   height: 56,
    //   backgroundColor: Platform.OS === 'ios' ? white : purple,
    //   shadowColor: 'rgba(0, 0, 0, 0.24)',
    //   shadowOffset: {
    //     width: 0,
    //     height: 3
    //   },
    //   shadowRadius: 6,
    //   shadowOpacity: 1
    // }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  } 
})

function SimpleStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <SimpleStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}