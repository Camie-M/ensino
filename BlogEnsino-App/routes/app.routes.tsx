import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/app/pages/Home';
import Admin from '@/app/pages/Admin';
import Gestao from '@/app/pages/Gestao';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePostForm from '@/app/pages/Admin/CreatePost';
import CreateUser from '@/app/pages/Gestao/CreateUser';
import UpdateUser from '@/app/pages/Gestao/UpdateUser';
import UpdatePost from '@/app/pages/Admin/UpdatePost';
import Login from '@/app/pages/Login';
import PostDetails from '@/app/pages/PostDetails';
import LogOut from '@/app/pages/Logout';
import { useAuth } from '@/app/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getOwnUserData } from '@/app/Services/Users/api';
import { UserLogOut } from '@/app/types/users';

const Tab = createBottomTabNavigator();
const AdminStack = createStackNavigator();
const HomeStack = createStackNavigator();
const GestaoStack = createStackNavigator();
const LoginStack = createStackNavigator();

const HomeLabel = "Home";
const GestaoLabel = "Gestao";
const AdminLabel = "Admin";
const UserLabel = "Conta";

const adminPageRoles = ["admin", "professor"];
const gestaoPageRoles = ["admin"];

function AdminStackNavigator() {
  return (
    <AdminStack.Navigator>
      <AdminStack.Screen name="Gestão de Posts" component={Admin} options={{ headerShown: false }} />
      <AdminStack.Screen name="CreatePost" component={CreatePostForm} options={{ headerShown: true, title: "Voltar" }} />
      <AdminStack.Screen name="UpdatePost" component={UpdatePost} options={{ headerShown: true, title: "Voltar" }} />
    </AdminStack.Navigator>
  );
}

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
      <HomeStack.Screen name="PostDetails" component={PostDetails} options={{ headerShown: true, title: "Voltar" }} />
    </HomeStack.Navigator>
  );
}

function GestaoStackNavigator() {
  return (
    <GestaoStack.Navigator screenOptions={{ headerShown: true }}>
      <GestaoStack.Screen name="GestaoHome" component={Gestao} />
      <GestaoStack.Screen name="CreateUser" component={CreateUser} />
      <GestaoStack.Screen name="UpdateUser" component={UpdateUser} />
    </GestaoStack.Navigator>
  );
}

export default function LoginStackNavigator() {
  const { isAuthenticated } = useAuth();
  return (
    <LoginStack.Navigator>
      {isAuthenticated ? (
        <LoginStack.Screen name="LogOutPage" component={LogOut} options={{ headerShown: false }} />
      ) : (
        <LoginStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      )}
    </LoginStack.Navigator>
  );
}

export function AppRoutes() {  
  const [data, setData] = useState<UserLogOut | null>(null); 
  const { isAuthenticated, login, logout } = useAuth();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      // AsyncStorage.clear()
      if (!token) {
        logout();
        
        setData(null); // Reseta os dados ao deslogar
        return;
      }

      const userData = await getOwnUserData();
      setData(userData); 
      login(token);
    };

    checkAuthStatus();
  }, [isAuthenticated]); // Adicionando `isAuthenticated` como dependência

  return (
    <Tab.Navigator
      key={isAuthenticated ? 'authenticated' : 'guest'} // Força recriação do Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case HomeLabel: iconName = focused ? 'home' : 'home-outline'; break;
            case AdminLabel: iconName = focused ? 'settings' : 'settings-outline'; break;
            case GestaoLabel: iconName = focused ? 'bar-chart' : 'bar-chart-outline'; break;
            case UserLabel: iconName = focused ? 'person-circle' : 'person-circle-outline'; break;
            default: iconName = 'help-circle'; break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: route.name,
      })}
    >
      <Tab.Screen name={HomeLabel} component={HomeStackNavigator} />

      {data?.role && gestaoPageRoles.includes(data.role) && (
        <Tab.Screen name={GestaoLabel} component={GestaoStackNavigator} />
      )}
      
      {data?.role && adminPageRoles.includes(data.role) && (
        <Tab.Screen name={AdminLabel} component={AdminStackNavigator} />
      )}

      <Tab.Screen name={UserLabel} component={LoginStackNavigator} /> 
    </Tab.Navigator>
  );
}

