import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/app/pages/Home';
import Admin from '@/app/pages/Admin';
import Gestao from '@/app/pages/Gestao'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

const { Navigator, Screen } = createBottomTabNavigator();
// nomes das paginas

const HomeLabel = "Home"
const GestaoLabel = "Gestao"
const AdminLabel = "Admin"

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName={AdminLabel}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string;

                    if (route.name === HomeLabel) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === AdminLabel) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === GestaoLabel) {
                        iconName = focused ? 'bar-chart' : 'bar-chart-outline'; 
                    } else {
                        iconName = 'help-circle';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Screen name="Home" component={Home} />
            <Screen name="Admin" component={Admin} />
            <Screen name="Gestao" component={Gestao} />
        </Navigator>
    );
}
