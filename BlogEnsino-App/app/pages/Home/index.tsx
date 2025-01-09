import {View, Text} from "react-native";
import styles from "@/app/pages/Home/styled";
  
export default function Home({route}:any){
  
    return(
        <View style={styles.homeContainer}>
          <Text>Home</Text>
        </View>
    )
}
