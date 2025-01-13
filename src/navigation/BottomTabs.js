import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from '../screens/HomeScreen';
import RankScreen from '../screens/RankScreen';
import LivrosScreen from '../screens/LivrosScreen';
import ContaScreen from '../screens/ContaScreen';

import HomeIcon from '../svg/casa.svg';
import ContaIcon from '../svg/do-utilizador.svg';
import RankIcon from '../svg/podio-de-classificacao';
import NewIcon from '../svg/mais.svg';
import BooksIcon from '../svg/livros.svg';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
      
        <Tab.Navigator 
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon:({ color, size}) => {
            if (route.name === 'Home') {
              return <HomeIcon width={size} height={size} fill={color} />
            } else if (route.name === 'Rank') {
              return <RankIcon width={size} height={size} fill={color} />
            } else if (route.name === 'Livros') {
              return <BooksIcon width={size} height={size} fill={color} />
            } else if (route.name === 'Conta') {
              return <ContaIcon width={size} height={size} fill={color} />
            } else if (route.name === 'Novo') {
              return <NewIcon width={size} height={size} fill={color} />
            }
          },
          tabBarActiveTintColor: '#6C63FF',
          tabBarInactiveTintColor: '#ABABAB',
  
          tabBarStyle: {
            backgroundColor: '#F5F5F5'
          }
        })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Rank" component={RankScreen} />
          <Tab.Screen name="Livros" component={LivrosScreen} />
          <Tab.Screen name="Conta" component={ContaScreen} />
          
        </Tab.Navigator>
    );
  }