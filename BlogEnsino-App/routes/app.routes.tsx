import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/app/pages/Home';
import Admin from '@/app/pages/Admin';
import Gestao from '@/app/pages/Gestao';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePostForm from '@/app/pages/Admin/CreatePost';
import CreateUser from '@/app/pages/Gestao/CreateUser';
import UpdateUser from '@/app/pages/Gestao/UpdateUser';
import DeleteUser from '@/app/pages/Gestao/DeleteUser';
import UpdatePost from '@/app/pages/Admin/UpdatePost';
import Login from '@/app/pages/Login';
import PostDetails from '@/app/pages/PostDetails';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import LogOut from '@/app/pages/Logout';
import { AuthProvider, useAuth } from '@/app/context/AuthContext';
import { PostProvider } from '@/app/context/PostContext';
const Tab = createBottomTabNavigator();
const AdminStack = createStackNavigator();
const HomeStack = createStackNavigator();
const GestaoStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeLabel = "Home";
const GestaoLabel = "Gestao";
const AdminLabel = "Admin";
const UserLabel = "Conta"

function AdminStackNavigator() {
  return (
    <AdminStack.Navigator>
      <AdminStack.Screen name="Gestão de Posts" component={Admin} options={{ headerShown: false, title: "Voltar" }} />
      <AdminStack.Screen name="CreatePost" component={CreatePostForm} options={{ headerShown: true, title: "Voltar" }}  />
      <AdminStack.Screen 
        name="UpdatePost" 
        component={UpdatePost} 
        options={{ headerShown: true, title: "Voltar" }} 
      />
    </AdminStack.Navigator>
  );
}

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Post Recentes" component={Home}  options={{ headerShown: false }} />
      <HomeStack.Screen name="PostDetails" component={PostDetails}  options={{ headerShown: true, title: "Voltar" }}  />
    </HomeStack.Navigator>
  );
}

function GestaoStackNavigator() {
  return (
    <GestaoStack.Navigator screenOptions={{ headerShown: true }}>
      <GestaoStack.Screen name="GestaoHome" component={Gestao} />
      <GestaoStack.Screen name="CreateUser" component={CreateUser} />
      <GestaoStack.Screen name="UpdateUser" component={UpdateUser} />
      <GestaoStack.Screen name="DeleteUser" component={DeleteUser} />
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
        <LoginStack.Screen name="LoginPage" component={Login} options={{ headerShown: false }} />
      )}
    </LoginStack.Navigator>
  );
}




export function AppRoutes() {
 
  return (
   
    <AuthProvider>
       <PostProvider>
      <Tab.Navigator
        initialRouteName={AdminLabel}
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
        <Tab.Screen name={GestaoLabel} component={GestaoStackNavigator} />
        <Tab.Screen name={AdminLabel} component={AdminStackNavigator} />
        <Tab.Screen name={UserLabel} component={LoginStackNavigator} />
      
      </Tab.Navigator>
      </PostProvider>
    </AuthProvider>
    
  );
}
