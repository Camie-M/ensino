import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/app/pages/Home';
import Admin from '@/app/pages/Admin';
import Gestao from '@/app/pages/Gestao';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePostForm from '@/app/pages/Admin/CreatePost';
import UpdatePost from '@/app/pages/Admin/UpdatePost';
import Login from '@/app/pages/Login';

const Tab = createBottomTabNavigator();
const AdminStack = createStackNavigator();

const HomeLabel = "Home";
const GestaoLabel = "Gestao";
const AdminLabel = "Admin";
const logIn = "logIn";
const logOut = "logOut";

function AdminStackNavigator() {
  return (
    <AdminStack.Navigator screenOptions={{ headerShown: false }}>
      <AdminStack.Screen name="AdminHome" component={Admin} />
      <AdminStack.Screen name="CreatePost" component={CreatePostForm} />
      <AdminStack.Screen name="UpdatePost" component={UpdatePost} />
    </AdminStack.Navigator>
  );
}

export function AppRoutes() {
  const [isLoged, setIsLoged] = useState(false)
  useEffect(()=>{
    // codigo que verificar o localStorage pelo token 
    console.log();
    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdiYjc3MGRhLTI1ZDItNGNiMS04MjhkLTZjYjI3YjgwNDNkYiIsInVzZXJuYW1lIjoiQnJlbm8iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3Mzc2NzgzMTgsImV4cCI6MTczNzc2NDcxOH0.gmbVpsqbbQzQ2cLWOq2I9jHtIUiZyRIw_xU9p4bFRWo'
    if(token){
      setIsLoged(true)
    }else{
      setIsLoged(false)
    }
  },[])
  return (
    <Tab.Navigator
      initialRouteName={AdminLabel}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case HomeLabel:
              iconName = focused ? 'home' : 'home-outline';
              break;
            case AdminLabel:
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            case GestaoLabel:
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
              break;
            case logIn:
              iconName = focused ? 'log-in' : 'log-in-outline';
              break;
            case logOut:
              iconName = focused ? 'log-out' : 'log-out-outline';
              break;
            default:
              iconName = 'help-circle';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: route.name,
      })}
    >
      <Tab.Screen name={HomeLabel} component={Home} />
      <Tab.Screen name={GestaoLabel} component={Gestao} />
      <Tab.Screen
          name={AdminLabel}
          component={AdminStackNavigator}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('Admin', { screen: 'AdminHome' });
            },
          })}
        />
        
        <Tab.Screen name={isLoged?logOut:logIn} component={Login} />
    </Tab.Navigator>
  );
}
