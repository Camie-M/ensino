import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@/app/pages/Home'


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="screens/Home/index"
            component={Home}/>
        </Navigator>
    )
}