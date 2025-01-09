import {View, Text, StyleSheet} from "react-native";
import { useEffect, useState } from "react";


  
export default function Home({route}:any){
  
    return(
        <View style={styles.homeContainer}>
           <Text>
            teste
           </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer:{
      flex:1
    },
    otherTemperatures:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',    
      marginTop: 20
    },
    infoField:{    
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100%',      
      marginTop:10    
    },
    infoText:{
      fontSize:14,
      fontWeight:'bold',
    },
    detailsContent:{
      display:'flex',
      width:'80%',
      flexDirection: 'row',
      justifyContent:'space-between',
      backgroundColor:'#87CEEB',        
    },
    details:{
      width:'50%',    
      padding: 5
    },
    descriptionTitle:{
      fontSize:14,
      fontWeight:'bold',
    },  
  })