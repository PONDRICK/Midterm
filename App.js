import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/homeScreen';
import secondScreen from './src/screen/secondScreen';
import endScreen from './src/screen/endScreen';
import { Entypo } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pond App" component={HomeScreen} />
      <Stack.Screen name="Second App" component={secondScreen} />
    </Stack.Navigator>
  );
};

const App = ({num}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#EBE76C' },
          tabBarActiveTintColor: '#ED7B7B',
          headerStyle: { backgroundColor: '#F0B86E' },
          headerTintColor: '#fff',
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5
                name="home"
                size={size}
                color={color}
              ></FontAwesome5>
            ),
          }}
        />

        <Tab.Screen
          name="second"
          component={secondScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="bowl" 
                size={size}
                color={color}/>
            ),tabBarBadge: 14,
          }}
        />
        <Tab.Screen
          name="end"
          component={endScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="cup" 
                size={size}
                color={color} />
            ),tabBarBadge: 14,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;