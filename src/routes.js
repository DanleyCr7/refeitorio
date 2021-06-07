import { 
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import MenuScreen from './pages/menu';
import OrderScreen from './pages/order';
import LoginScreen from './pages/login';

const Routes = createStackNavigator ({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Campus Parnaíba',
    },
  },
  Menu: {
    screen: MenuScreen,
  },
  Order: {
    screen: OrderScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.menu.title
    })
  },
}, {
  defaultNavigationOptions: {
    title: 'Cardápio',
    headerStyle: {
      backgroundColor: '#2FA23B',
    },
    headerTintColor: '#fff',
  },
});   

export default createAppContainer(Routes);