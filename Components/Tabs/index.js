import { TabNavigator } from 'react-navigation'
import Decks from './../../Screens/Decks/'
import NewDeck from './../../Screens/NewDeck/'

const Tabs = TabNavigator({
  Perguntas: {
    screen: Decks
  },
  Nova: {
    screen: NewDeck
  }
}, {
  navigationOptions: {
    header: null
  }
}, {
  tabBarOptions: {
    activeTintColor: '#fff'
  }
})

export default Tabs
